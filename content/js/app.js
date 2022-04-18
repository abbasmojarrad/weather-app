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

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = document.querySelector(".date"),
  searchBox = document.querySelector(".search-box"),
  Url = "https://api.openweathermap.org/data/2.5/weather?",
  apiKey = "a08fa6e4b94cef9c0cbc29f3d36848be",
  temp = document.querySelector(".temp"),
  cityName = document.querySelector(".city"),
  weather = document.querySelector(".weather"),
  hiLow = document.querySelector(".hi-low"),
  d = new Date();

let today = days[d.getDay()],
  month = months[d.getMonth()],
  year = d.getFullYear(),
  day = d.getDate();

function setData(data) {
  cityName.innerHTML = `${data.name},${data.sys.country}`;
  weather.innerHTML = `${data.weather[0].description}`;
  temp.innerHTML = `${(+data.main.temp - 273.15).toFixed(1)} °c`;
  hiLow.innerHTML = `${(+data.main.feels_like - 273.15).toFixed(1)}°c/${(
    +data.main.temp_max - 273.15
  ).toFixed(1)}°c`;
  currentDate.innerHTML = `${today} ${day} ${month} ${year}`;
}
function clearData() {
  cityName.innerHTML = `inter valid city`;
  weather.innerHTML = "";
  temp.innerHTML = "";
  hiLow.innerHTML = "";
  currentDate.innerHTML = "";
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let city = searchBox.value;

    city
      ? fetch(`${Url}q=${city}&appid=${apiKey}`)
          .then((res) => res.json())
          .then(setData)
          .catch(clearData)
      : (cityName.innerHTML = "inter  city name please");

    searchBox.value = "";
  }
});
