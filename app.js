// jshint esversion : 8

// Init weather object
const weather = new Weather("Boston", "MA");

// Get weather on DOM model
document.addEventListener("DOMContentLoaded", getWeather);

// weather.changeLocation("Miami", "FL");

function getWeather() {
  weather
    .getWeather()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}
