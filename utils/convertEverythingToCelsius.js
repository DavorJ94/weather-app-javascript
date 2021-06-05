export default function convertEverythingToCelsius() {
  const currentTemperature = document
    .querySelector(".current-temperature")
    .innerText.split(" ")[0];
  document.querySelector(
    ".current-temperature"
  ).innerText = `${fahrenheitToCelsiusConverter(currentTemperature)} °C`;

  const feelsLikeTemp = document
    .querySelector(".feels-like")
    .innerText.split(" ")[2];
  document.querySelector(
    ".feels-like"
  ).innerText = `Feels like: ${fahrenheitToCelsiusConverter(feelsLikeTemp)} °C`;

  const forecastAvgTemperatures = document.querySelectorAll(
    ".forecast-avg-temp"
  );
  forecastAvgTemperatures.forEach((item) => {
    let currentValue = item.textContent.split(" ")[2];

    item.textContent = `Average temperature: ${fahrenheitToCelsiusConverter(
      currentValue
    )} °C`;
  });

  const forecastMaxTemperatures = document.querySelectorAll(
    ".max-temp-forecast"
  );
  forecastMaxTemperatures.forEach((item) => {
    let currentValue = item.textContent.split(" ")[2];
    item.textContent = `Maximum temperature: ${fahrenheitToCelsiusConverter(
      currentValue
    )} °C`;
  });

  const forecastMinTemperatures = document.querySelectorAll(
    ".min-temp-forecast"
  );
  forecastMinTemperatures.forEach((item) => {
    let currentValue = item.textContent.split(" ")[2];
    item.textContent = `Minimum temperature: ${fahrenheitToCelsiusConverter(
      currentValue
    )} °C`;
  });
}

function fahrenheitToCelsiusConverter(input) {
  return parseFloat(((input - 32) * (5 / 9)).toFixed(1));
}
