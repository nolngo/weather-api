class OpenWeather {
  constructor(apikey, unit) {
    this.apikey = apikey;
    this.unit = unit;
  }

  async getWeather(zip) {
    const { apikey, unit } = this;
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`;

    const res = await fetch(path);
    const json = await res.json();

    return json;
  }
}