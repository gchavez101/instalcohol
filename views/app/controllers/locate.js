
/* global $ */
$(document).ready(function() {
    var api_key = 'AIzaSyCV42o3NCZIPW9vfVZpP-40RkwMrRJ7DKA';
    
    var request = new XMLHttpRequest();
    request.open('POST', 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + api_key, true);
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var res = JSON.parse(request.responseText);
            var lat = res.location.lat;
            var lng = res.location.lng;
            console.log('Latitude: ' + lat);
            console.log('Longitude: ' + lng);
        } else {
            console.log('Reached server but returned an error.');
        }
    }
    
    request.onerror = function() {
        console.log('We had an error connecting to the server.');
    }
    
    request.send();
    
});