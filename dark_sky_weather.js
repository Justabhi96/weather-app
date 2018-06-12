const request = require('request');
const darkSkyAPI_KEY = 'e9c53a47f5d47c576315654fb58e2b49';

var fetchWeather = (lat,lng,callback) => {
    request({
        url : `https://api.darksky.net/forecast/${darkSkyAPI_KEY}/${lat},${lng}`,
        json: true
    },(error, response,body)=>{
        if(!error && response.statusCode===200){
            callback(undefined,{
                summary: body.currently.summary,
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                humidity: body.currently.humidity,
                pressure: body.currently.pressure,
                windSpeed: body.currently.windSpeed,
                uvIndex: body.currently.uvIndex,
                visibility: body.currently.visibility,
            });
        }else{
            callback("unable to fetch weather");
        }
    }
    )
}

module.exports = {
    fetchWeather
}