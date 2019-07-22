/**
 * 
 */

/**
 * 
 */
const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b9263f90ea0372c2935b4cf09e256645&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
};