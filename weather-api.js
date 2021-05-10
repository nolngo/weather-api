function getWeather(zip, apikey, success, error) {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`;

  fetch(path).then((res) => res.json()).then((json) => {
    console.log(json);
    console.log(json.main.temp);
    success(json);
  }).catch((err) => {
    console.log(err.message);
    error(err);
  });
}
