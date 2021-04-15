const MPH_FRACTION = 0.621371;

export default function convertEverythingToMph() {
  const currentSpeed = document
    .querySelector(".wind-speed-direction")
    .innerText.split(" ")[3];
  const currentDirection = document
    .querySelector(".wind-speed-direction")
    .innerText.split(" ")[5];

  document.querySelector(
    ".wind-speed-direction"
  ).innerText = `Wind speed (direction): ${kphToMphConverter(
    currentSpeed
  )} mph ${currentDirection}`;

  const forecastMaxWindSpeed = document.querySelectorAll(
    ".max-wind-speed-forecast"
  );
  forecastMaxWindSpeed.forEach((item) => {
    let currentValue = item.textContent.split(" ")[3];
    item.textContent = `Max. wind speed: ${kphToMphConverter(
      currentValue
    )} mph`;
  });
}

function kphToMphConverter(input) {
  return parseFloat((input * MPH_FRACTION).toFixed(2));
}
