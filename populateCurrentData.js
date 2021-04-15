export default function populateCurrentData(weatherData) {
  document.querySelector(
    ".city-and-country"
  ).innerHTML = `${weatherData.location.name}, ${weatherData.location.country} <span>(${weatherData.location.lat}, ${weatherData.location.lon})</span>`;

  document.querySelector(
    ".current-time"
  ).textContent = `Time of data retrieval: ${
    weatherData.location.localtime.split(" ")[1]
  }`;

  document.querySelector(".last-updated").textContent = `Last data update: ${
    weatherData.current.last_updated.split(" ")[1]
  }`;

  document.querySelector(
    ".current-temperature"
  ).innerText = `${weatherData.current.temp_c} °C`;

  document.querySelector(
    ".current-conditions"
  ).innerText = `${weatherData.current.condition.text}`;

  const image = document.createElement("img");
  image.setAttribute(
    "src",
    `${weatherData.current.condition.icon.replace("64x64", "128x128")}`
  );
  image.setAttribute("alt", `conditions icon`);
  image.className = "current-conditions-icon";
  const imgContainer = document.querySelector(".img-container");
  imgContainer.appendChild(image);

  document.querySelector(
    ".feels-like"
  ).innerText = `Feels like: ${weatherData.current.feelslike_c} °C`;

  document.querySelector(
    ".humidity"
  ).innerText = `Humidity: ${weatherData.current.humidity}%`;

  document.querySelector(
    ".cloud-coverage"
  ).innerText = `Cloud coverage: ${weatherData.current.cloud}%`;

  document.querySelector(
    ".pressure"
  ).innerText = `Pressure: ${weatherData.current.pressure_mb} mbar`;

  document.querySelector(
    ".wind-speed-direction"
  ).innerText = `Wind speed (direction): ${weatherData.current.wind_kph} kmph (${weatherData.current.wind_dir})`;
}
