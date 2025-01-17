const axios = require('axios')
const captainModel = require('../models/captain.model');
// const url = `http://maps.gomaps.pro/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&key=${apiKey}`;




module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.SINGLE_POINT_API;
    
    // console.log(address);
    const url = `https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${apiKey}`;


    try {
        const response = await axios.get(url);

        if (true) {
            const location = response.data[ 0 ];
            return {
                ltd: location.lat,
                lng: location.lon
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error('Get Address coordinate error', error);
        throw error;
    }
}



module.exports.getDistanceTime = async (origin, destination) => {
    const apiKey = process.env.GOOGLE_MAPS_API; // Ensure this is correctly set in your environment variables
    if (!apiKey) {
        throw new Error("API key is not set in environment variables.");
    }

    const url = `http://maps.gomaps.pro/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            const route = response.data.routes[0]; 
            const leg = route.legs[0]; 
            const distance = leg.distance; 
            const duration = leg.duration; 

            return {
                distance,
                duration
            };
        } else {
            throw new Error(`API Error: ${response.data.status}`);
        }
    } catch (error) {
        console.error("Error fetching distance and time:", error.message);
        throw error;
    }
};



module.exports.getAddressSuggestions = async (address) => {
    const apiKey = process.env.SINGLE_POINT_API;
    // console.log(address);
    const url = `https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${apiKey}`;


    try {
        const response = await axios.get(url);

        if (response.data) {
            // Return as an array of strings (only names)
            return response.data
                .filter(item => item.display_name)
                .map(item => item.display_name);
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error('Get address suggetions error', error);
        throw error;
    }
}


//Here All captains returned i couldn't get the captain using geowithin radious so returned all captains registered
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
            Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
}

module.exports.getCaptainsInTheRadius = async (lng, ltd, radius) => {
    try {
        const captains = await captainModel.find(); // Fetch all captains

        // // Filter captains based on the distance
        // const captainsInRadius = captains.filter(captain => {
        //     const distance = getDistance(ltd, lng, captain.location.lng, captain.location.ltd); // Assuming captain.location is [lng, ltd]
            
        //     // console.log(distance);
        //     return distance <= radius;
        // });
        console.log(captains, "ddddddddd")

        return captains;
    } catch (error) {
        console.error('Error finding captains within radius:', error);
        throw error;
    }
};
