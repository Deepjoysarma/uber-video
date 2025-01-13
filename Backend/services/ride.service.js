const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const crypto = require('crypto');


async function getFare(pickup, destination) {

    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        moto: 20
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        moto: 8
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        moto: 1.5
    };



    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto))
    };
    // console.log(fare);
    return fare;
}

module.exports.getFare = getFare;



function generateOtp(num) {
    if (num <= 0 || !Number.isInteger(num)) {
        throw new Error('Please provide a positive integer for the OTP length.');
    }
    const min = Math.pow(10, num - 1); // Minimum value for the OTP (e.g., 100000 for a 6-digit OTP)
    const max = Math.pow(10, num) - 1; // Maximum value for the OTP (e.g., 999999 for a 6-digit OTP)
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    return otp.toString(); // Return the OTP as a string
}



module.exports.createRide = async ({
    user, pickup, destination, vehicleType
}) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required');
    }

    const fare = await getFare(pickup, destination);



    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp: generateOtp(6),
        fare: fare[ vehicleType ]
    })

    return ride;
}