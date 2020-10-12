// jshint esversion : 8

// weatherData = { city: "MIAMI", state: "US" };
// Init Storage
const storage = new Storage();
// Get stored location data
const weatherData = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherData.city, weatherData.state);

// Init UI
const ui = new UI();

// Get weather on DOM model
// weather.getWeather().then((data) => console.log(data));
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((result) => ui.paint(result))
    .catch((err) => console.log(err));
}
