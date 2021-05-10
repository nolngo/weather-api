async function getWeather(zip, apikey) {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`;

  const res = await fetch(path);
  const json = await res.json();

  return json;
}
