async function getWeather(zip, apikey, unit) {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`;

  const res = await fetch(path);
  const json = await res.json();

  return json;
}
