export default function populateForecast(forecast, day) {
  document.querySelector(
    `.${day.toLowerCase() === "tomorrow" ? "tomorrow" : "in-two-days"}`
  ).innerHTML = `
    <h2 class="forecast-subtitle">${
      day === "Tomorrow" ? day : "In two days"
    }</h2>
    <p class="feels-like forecast-avg-temp">Average temperature: ${
      forecast.avgtemp_c
    } °C</p>
    <h3>${forecast.condition.text}</h3>
    <img src=${forecast.condition.icon} alt="forecast-icon">
    <p class="feels-like max-temp-forecast forecast-text">Maximum temperature: ${
      forecast.maxtemp_c
    } °C</p>
    <p class="feels-like min-temp-forecast forecast-text">Minimum temperature: ${
      forecast.mintemp_c
    } °C</p>
    <p class="feels-like max-wind-speed-forecast forecast-text">Max. wind speed: ${
      forecast.maxwind_kph
    } kmph</p>
    <p class="feels-like chance-of-rain-forecast forecast-text">Chance of rain: ${
      forecast.daily_chance_of_rain
    }%</p>
    <p class="feels-like chance-of-snow-forecast forecast-text">Chance of snow: ${
      forecast.daily_chance_of_snow
    }%</p>
  `;
}
