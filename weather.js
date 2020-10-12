// jshint esversion : 8

class Weather {
  constructor(city, state) {
    this.apiKey = appConfig.apiKey;
    this.city = city;
    this.state = state;
    this.url = "https://api.openweathermap.org/data/2.5/weather";
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `${this.url}?appid=${this.apiKey}&q=${this.city},${this.state}&units=metric`
    );

    const responseData = await response.json();

    return responseData;

    // fetch(`${this.url}?appid=${this.apiKey}&q=${this.city},${this.state}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }
}
