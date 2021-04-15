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
  let crd = pos.coords;
  const latitude = crd.latitude;
  const longitude = crd.longitude;

  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=012f614cb34a44c9b89174346211504&q=${latitude},${longitude}&aqi=no`
  );
  const weatherData = await response.json();
  document.querySelector(
    ".city-and-country"
  ).innerHTML = `${weatherData.location.name}, ${weatherData.location.country} <span>(${weatherData.location.lat}, ${weatherData.location.lon})</span>`;

  document.querySelector(".current-time").textContent = `Current time: ${
    weatherData.location.localtime.split(" ")[1]
  }`;

  document.querySelector(".last-updated").textContent = `Last data update: ${
    weatherData.current.last_updated.split(" ")[1]
  }`;

  document.querySelector(
    ".current-temperature"
  ).innerText = `${weatherData.current.temp_c} °C`;

  const currentConditions = (document.querySelector(
    ".current-conditions"
  ).innerText = `${weatherData.current.condition.text}`);

  const image = document.createElement("img");
  image.setAttribute(
    "src",
    `${weatherData.current.condition.icon.replace("64x64", "128x128")}`
  );
  image.setAttribute("alt", `conditions icon`);
  image.className = "current-conditions-icon";
  const imgContainer = document.querySelector(".img-container");
  imgContainer.appendChild(image);
  // document
  //   .querySelector(".current-conditions-icon")
  //   .setAttribute(
  //     "src",
  //     `${weatherData.current.condition.icon.replace("64x64", "128x128")}`
  //   );

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
  ).innerText = `Wind speed (direction): ${weatherData.current.wind_kph} kph (${weatherData.current.wind_dir})`;
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
