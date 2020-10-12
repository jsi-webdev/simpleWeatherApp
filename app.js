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

// Change location event
document.getElementById("w-change-btn").addEventListener("click", () => {
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

function getWeather() {
  weather
    .getWeather()
    .then((result) => ui.paint(result))
    .catch((err) => console.log(err));
}
