const axios = require('axios')
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
        console.error(error);
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
        console.error(error);
        throw error;
    }
}