const request = require('request');

var geocodeAddress = (address,callback) => {
var encodedAddress = encodeURI(address);
//console.log(address);
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAY5iJEboxK9dTrAaPw0iwvFK0LUEyoWlk`,
    json: true
}, (error, response, body) => {
    if(error){
        callback("Something went wrong");
    }else if(body.status ==="ZERO_RESULTS"){
        callback("Unable to find the address");
    }else if(body.status ==="OK"){
        callback(undefined, {
            address:body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude:body.results[0].geometry.location.lng
        });
    }
})
}

module.exports = {
    geocodeAddress
}
