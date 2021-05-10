function getWeather(zip, apikey) {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`;

  const p1 = fetch(path)
  const p2 = p1.then((res) => {
    return res.json();
  });

  return p2;
}
