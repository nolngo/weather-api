function getWeather(zip, apikey, callback) {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`;

  fetch(path).then((res) => res.json()).then((json) => {
    console.log(json);
    console.log(json.main.temp);
    callback(json);
  }).catch((err) => {
    console.log(err.message);
  });
}
