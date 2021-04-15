import populateCurrentData from "./populateCurrentData.js";
import populateForecast from "./populateForecast.js";
import convertEverythingToFahrenheit from "./convertEverythingToFahrenheit.js";
import convertEverythingToCelsius from "./convertEverythingToCelsius.js";

const initialState = `<h1 class="title">Weather App</h1>
<div class="buttons">
  <button class="button celsius">°C</button>
  <button class="button fahrenheit">°F</button>
</div>
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
  const celsiusButton = document.querySelector(".celsius");
  const fahrenheitButton = document.querySelector(".fahrenheit");

  celsiusButton.removeEventListener("click", handleCelsiusConversion);
  fahrenheitButton.removeEventListener("click", handleFahrenheitConversion);

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

  celsiusButton.addEventListener("click", handleCelsiusConversion);
  fahrenheitButton.addEventListener("click", handleFahrenheitConversion);
}

function handleCelsiusConversion() {
  if (
    getComputedStyle(document.querySelector(".celsius")).backgroundColor !==
    "rgba(0, 0, 0, 0)"
  )
    return;
  document.querySelector(".celsius").style.backgroundColor =
    "rgb(29, 195, 207)";
  document.querySelector(".fahrenheit").style.backgroundColor =
    "rgba(0, 0, 0, 0)";
  convertEverythingToCelsius();
}

function handleFahrenheitConversion() {
  if (
    getComputedStyle(document.querySelector(".fahrenheit")).backgroundColor !==
    "rgba(0, 0, 0, 0)"
  )
    return;
  document.querySelector(".fahrenheit").style.backgroundColor =
    "rgb(29, 195, 207)";
  document.querySelector(".celsius").style.backgroundColor = "rgba(0, 0, 0, 0)";
  convertEverythingToFahrenheit();
}
