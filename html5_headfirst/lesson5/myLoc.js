window.onload = getMyLocation;

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation, displayError);
  } else {
    alert("Oops, no geolocation support");
  }
}

// getCurrentPosition(successHandler, errorHandler, options) where the last two arguments are optional
// displayLocation is our successHandler in this example

function displayLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  var div = document.getElementById("location");
  div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;

  var km = computeDistance(position.coords, ourCoords);
  var distance = document.getElementById("distance");
  distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ"

  showMap(position.coords);
}

// error object passed by getCurrentPosition to error handler has code property 0-3
function displayError(error) {
  var errorTypes = {
    0: "Unknown error",
    1: "Permission denied by user",
    2: "Position is not available",
    3: "Request timed out"
  };
  var errorMessage = errorTypes[error.code];
  // In the case of 0 & 2 there are sometime additional messages in the code property
  if (error.code == 0 || error.code == 2) {
    errorMessage = errorMessage + " " + error.message;
  }
  var div = document.getElementById("location");
  div.innerHTML = errorMessage;
}

// function to calculate distance between two coordinates
function computeDistance(startCoords, destCoords) {
  var startLatRads = degreesToRadians(startCoords.latitude);
  var startLongRads = degreesToRadians(startCoords.longitude);
  var destLatRads = degreesToRadians(startCoords.latitude);
  var destLongRads = degreesToRadians(startCoords.longitude);

  var Radius = 6371; // radius of the earth in km
  var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
                  Math.cos(startLatRads) * Math.cos(destLatRads) *
                  Math.cos(startLongRads - destLongRads)) * Radius;

  return distance;
}

function degreesToRadians(degrees) {
  var radians = (degrees * Math.PI)/180;
  return radians;
}

var ourCoords = {
latitude: 47.624851,
longitude: -122.52099
};


var map; //this ensures map called in function below is a global scope variable

function showMap(coords) {
    //use google constructor to create map position object
    var googleLatAndLong = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
      zoom: 10, //specified from zero to 21
      center: googleLatAndLong, //centered on location
      mapTypeId: google.maps.MapTypeId.ROADMAP //options - satellite and hybrid
    };

    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);
}

// creating a marker, info window and event handler for clicks on the marker
function addMarker(map, latlong, title, content) {
  var markerOptions = {
    position: latlong,
    map: map,
    title: title,
    clickable: true,
  };

  var marker = new google.maps.Marker(markerOptions);
}
