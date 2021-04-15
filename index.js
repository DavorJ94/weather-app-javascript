import populateCurrentData from "./populateCurrentData.js";
import populateForecast from "./populateForecast.js";

const initialState = `<h1 class="title">Weather App</h1>
<h2 class="city-and-country"></h2>
<p class="current-time"></p>
<p class="last-updated"></p>
<h2 class="current-temperature"></h2>
<h2 class="current-conditions"></h2>
<div class="img-container"></div>
<p class="feels-like"></p>
<p class="feels-like humidity"></p>
<p class="feels-like cloud-coverage"></p>
<p class="feels-like pressure"></p>
<p class="feels-like wind-speed-direction"></p>
<br>
<br>
<hr>
<hr>
<h1 class="forecast-title">Forecast</h1>
<div class="forecast tomorrow"></div>
<div class="forecast in-two-days"></div>`;

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(getWeatherData, error, options);

async function getWeatherData(pos) {
  document.body.innerHTML = initialState;
  let crd = pos.coords;
  const latitude = crd.latitude;
  const longitude = crd.longitude;

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=012f614cb34a44c9b89174346211504&q=${latitude},${longitude}&days=4&aqi=no&alerts=no`
  );
  const weatherData = await response.json();
  console.log(weatherData);
  populateCurrentData(weatherData);
  populateForecast(weatherData.forecast.forecastday[1].day, "Tomorrow");
  populateForecast(weatherData.forecast.forecastday[2].day, "In two days");
}
