const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const rideModel = require('../models/ride.model');
const mapService = require('../services/maps.service');
const { sendMessageToSocketId } = require('../socket')


module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const { userId, pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
        res.status(201).json(ride);
        

        const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
        console.log(pickupCoordinates);

        const captainsInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 3);

        ride.otp = ""

        const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');

        console.log(ride, "Krishnaya");

        console.log(rideWithUser);
        
        captainsInRadius.map(captain => {


            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data: rideWithUser
            })

        })


    } catch (err) {

        // console.log(err);
        // return res.status(500).json({ message: err.message });
        return "Govindaya Namo Nama";
    }

};



module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}



module.exports.confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, captain } = req.body;
    

    // console.log(rideId);
    // console.log(captain);

    try {
        const ride = await rideService.confirmRide({ rideId, captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {

        console.log("ConfirmRide Error" ,err);
        return res.status(500).json({ message: err.message });
    }
}



module.exports.startRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, otp } = req.query;

    try {
        const ride = await rideService.startRide({ rideId, otp, captain: req.captain });

        console.log(ride);

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {
        console.log("Start Ride Error");
        return res.status(500).json({ message: err.message });
    }
}



module.exports.endRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, captain } = req.body;

    console.log(captain, "Nehi mila captain");

    try {
        const ride = await rideService.endRide({ rideId, captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-ended',
            data: ride
        })



        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}