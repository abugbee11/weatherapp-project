function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-engine-text-input");
  let apiKey = `1f89389e78f44d7dc0d729d05fb3eca6`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=imperial`;

  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${cityInput.value}`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let tempElement = document.querySelector(".temp");
  tempElement.innerHTML = `${temperature}° F`;
  let currentWeatherDescription = response.data.weather[0].description;
  let description = document.querySelector(".current-temp-description");
  description.innerHTML = `${currentWeatherDescription}`;

  let currentPosition = response.data.name;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${currentPosition}`;
}

function showPosition(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = `1f89389e78f44d7dc0d729d05fb3eca6`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  // let currentCity = document.querySelector("#current-city");
  //currentCity.innerHTML = `${currentPosition}`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function getCurrentPosition(event) {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let currentDateTime = document.querySelector("#current-date-time");
currentDateTime.innerHTML = `${day}, ${month} ${date}, ${year}, ${hours}:${minutes}`;

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", search);
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentPosition);
