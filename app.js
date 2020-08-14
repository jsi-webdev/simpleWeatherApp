// jshint esversion : 8

// Init Storage
const storage = new Storage();
// Get stored location data
const weatherData = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherData.city, weatherData.state);
// Init UI
const ui = new UI();

// Get weather on DOM model
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-chagne-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // Change location
  weather.changeLocation(city, state);
  // Store location data in LS
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

// weather.changeLocation("Miami", "FL");

function getWeather() {
  weather
    .getWeather()
    .then((result) => ui.paint(result))
    .catch((err) => console.log(err));
}
