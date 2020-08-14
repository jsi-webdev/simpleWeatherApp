// jshint esversion : 8

// Init weather object
const weather = new Weather("Boston", "MA");
// Init UI
const ui = new UI();

// Get weather on DOM model
document.addEventListener("DOMContentLoaded", getWeather);

// weather.changeLocation("Miami", "FL");

function getWeather() {
  weather
    .getWeather()
    .then((result) => ui.paint(result))
    .catch((err) => console.log(err));
}
s