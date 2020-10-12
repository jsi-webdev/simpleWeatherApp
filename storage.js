// jshint esversion : 8

class Storage {
  constructor() {
    this.city;
    this.state;
    this.defualtCity = "Miami";
    this.defualtState = "US";
  }

  getLocationData() {
    // Get City
    if (localStorage.getItem("city") === null) {
      this.city = this.defualtCity;
    } else {
      this.city = localStorage.getItem("city");
    }
    // Get State
    if (localStorage.getItem("state") === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem("state");
    }

    return {
      city: this.city,
      state: this.state,
    };
  }

  setLocationData(city, state) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
}
