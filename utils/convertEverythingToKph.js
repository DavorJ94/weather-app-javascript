const KMPH_FRACTION = 1 / 0.621371;

export default function convertEverythingToKph() {
  const currentSpeed = document
    .querySelector(".wind-speed-direction")
    .innerText.split(" ")[3];
  const currentDirection = document
    .querySelector(".wind-speed-direction")
    .innerText.split(" ")[5];

  document.querySelector(
    ".wind-speed-direction"
  ).innerText = `Wind speed (direction): ${mphToKphConverter(
    currentSpeed
  )} kph ${currentDirection}`;

  const forecastMaxWindSpeed = document.querySelectorAll(
    ".max-wind-speed-forecast"
  );
  forecastMaxWindSpeed.forEach((item) => {
    let currentValue = item.textContent.split(" ")[3];
    item.textContent = `Max. wind speed: ${mphToKphConverter(
      currentValue
    )} kph`;
  });
}

function mphToKphConverter(input) {
  return parseFloat((input * KMPH_FRACTION).toFixed(2));
}
