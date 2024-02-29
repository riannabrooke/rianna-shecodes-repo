function updateWeatherDetails(response) {
  console.log(response);
  let city = document.querySelector("#current-city");
  city.innerHTML = response.data.city;
  let temperature = document.querySelector(".current-temperature-value");
  temperature.innerHTML = Math.round(response.data.temperature.current);
}

function search(event) {
  event.preventDefault();
  let apiKey = "7d4d0f8bca21ta4eb4313oad2f2b1ec4";
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherDetails);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);
