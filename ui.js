// jshint esversion : 8

class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.details = document.getElementById("w-details");
    this.temperture = document.getElementById("w-temperture");
    this.humidity = document.getElementById("w-humidity");
    // this.feelsLike = document.getElementById("w-feels-like");
    // this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    console.log(weather);
    this.location.textContent = `${weather.name} [${weather.sys.country}]`;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.weather[0].description;
    // Set icon source
    const weatherIcon = weather.weather[0].icon;
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    this.icon.setAttribute("src", weatherIconUrl);
    this.temperture.textContent = `Temperture : ${weather.main.temp} degree Celcius`;
    this.humidity.textContent = `Reletive Humidity : ${weather.main.humidity}`;
    this.wind.textContent = `Wind : Speed ${weather.wind.speed}, Degree ${weather.wind.deg}`;
  }
}
