export default function convertEverythingToFahrenheit() {
  const currentTemperature = document
    .querySelector(".current-temperature")
    .innerText.split(" ")[0];
  document.querySelector(
    ".current-temperature"
  ).innerText = `${celsiusToFahrenheitConverter(currentTemperature)} °F`;

  const feelsLikeTemp = document
    .querySelector(".feels-like")
    .innerText.split(" ")[2];
  document.querySelector(
    ".feels-like"
  ).innerText = `Feels like: ${celsiusToFahrenheitConverter(feelsLikeTemp)} °F`;

  const forecastAvgTemperatures = document.querySelectorAll(
    ".forecast-avg-temp"
  );
  forecastAvgTemperatures.forEach((item) => {
    let currentValue = item.textContent.split(" ")[2];

    item.textContent = `Average temperature: ${celsiusToFahrenheitConverter(
      currentValue
    )} °F`;
  });

  const forecastMaxTemperatures = document.querySelectorAll(
    ".max-temp-forecast"
  );
  forecastMaxTemperatures.forEach((item) => {
    let currentValue = item.textContent.split(" ")[2];
    item.textContent = `Maximum temperature: ${celsiusToFahrenheitConverter(
      currentValue
    )} °F`;
  });

  const forecastMinTemperatures = document.querySelectorAll(
    ".min-temp-forecast"
  );
  forecastMinTemperatures.forEach((item) => {
    let currentValue = item.textContent.split(" ")[2];
    item.textContent = `Minimum temperature: ${celsiusToFahrenheitConverter(
      currentValue
    )} °F`;
  });
}

function celsiusToFahrenheitConverter(input) {
  return (input * 9) / 5 + 32;
}
