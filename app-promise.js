//this file is same as 'app.js' 
//just in this file we are using 'axios' to get the data from the apis
//and in 'app.js' we are using 'request' to get the data from the apis
const yargs = require('yargs');
const axios = require('axios');

const darkSkyAPI_KEY = 'e9c53a47f5d47c576315654fb58e2b49';
var argv = yargs
        .options({
            a:{
                describe:'Enter your address to fetch weather',
                alias: 'address',
                demand: true,
                string: true
            }
        })
        .alias('help','h')
        .help()
        .argv;
var encodedAddress = encodeURI(argv.a);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAY5iJEboxK9dTrAaPw0iwvFK0LUEyoWlk`

axios.get(geocodeURL).then((response) => {
    if(response.data.statusCode === 'ZERO_RESULT' ){
        return new Error('unable to get address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/${darkSkyAPI_KEY}/${lat},${lng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    console.log(temperature);
})
.catch((e) => {
    if(e.code ==='ENOTFOUND') {
        console.log('Unable to connect to API servers');
    }
    else{
        console.log(e.message);
    }
})