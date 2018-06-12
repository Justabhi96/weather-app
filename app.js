const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./dark_sky_weather');

// const darkSkyAPI_KEY = 'e9c53a47f5d47c576315654fb58e2b49';
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

geocode.geocodeAddress(argv.a,(errorMsg,result) => {
    if(errorMsg){
        console.log(errorMsg);
    }else{
        console.log(result.address);
        weather.fetchWeather(result.latitude,result.longitude,(errorMessage,weatherResult) => {
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(JSON.stringify(weatherResult,undefined,2));
            }
        });
    }
});

