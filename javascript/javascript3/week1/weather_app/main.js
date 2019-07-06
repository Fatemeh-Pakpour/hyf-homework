const btnWeather = document.querySelector("#btn_search");
const cityNameInput = document.querySelector("#city_name");
const btnCurrentLocation = document.querySelector("#btn_current_location");

const apiKey = "0c6db5d597b4b735d735f6d9bedd78c2";
/**
 *function get the wather inforamation from json file
 *
 * @param {*} cityName
 */
function weatherInfo(cityName) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?&q=" +
      cityName +
      "&units=metric&appid=" +
      apiKey
  )
    .then(resp => resp.json())
    .then(json => {
      localStorage.clear();
      localStorage.setItem("city", JSON.stringify(json));
      showWeatherInfo(json);
    });
}
function weatherInfoCurrentLocation(lat, lon) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=metric&appid=" +
      apiKey
  )
    .then(resp => resp.json())
    .then(json => {
      localStorage.clear();
      localStorage.setItem("city", JSON.stringify(json));
      showWeatherInfo(json);
    });
}
function cleanItems(item) {
  while (item.firstChild) {
    item.removeChild(item.firstChild);
  }
}

/**
 *render the location using latitude and longitude
 *
 * @param {*} lat
 * @param {*} lng
 */
function renderLocationOnGoogleMap(lat, lng) {
  const mapDiv = document.querySelector("#map");
  const map = new google.maps.Map(mapDiv, {
    center: { lat, lng },
    zoom: 15
  });
  console.log(map);
}
/**
 *display the weather information
 *
 * @param {*} data=> data of json file
 */
function showWeatherInfo(data) {
  // weather icon
  const iconcode = data.weather[0].icon;
  const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  document.querySelector("#wicon").setAttribute("src", iconurl);

  // location
  document.querySelector("#location").innerHTML = data.name;

  // temperature
  document.querySelector("#temp").innerHTML = `${data.main.temp} &degC`;

  // wind speed
  const wind = data.wind.speed;

  // sunset & sunrise
  const secSunrise = data.sys.sunrise;
  const secSunset = data.sys.sunset;
  /**
   *
   *convert the seconds to the local time
   * @param {*} sec
   */
  function convertTime(sec) {
    const time = new Date(sec * 1000);
    return time.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  const timeSunrise = convertTime(secSunrise);
  const timeSunset = convertTime(secSunset);
  // cloudy
  const cloudsData = data.weather[0].description;
  const cloudiness = cloudsData.charAt(0).toUpperCase() + cloudsData.slice(1);
  const tableDataLi = document.createElement("li");
  const tableDataUl = document.querySelector(".table .table_data");
  const tableTitle = document.querySelector(".table .table_title");
  tableTitle.style.display = "block";
  cleanItems(tableDataUl);
  tableDataLi.innerHTML = `
            <ul>
                <li>${wind}</li>
                <li>${timeSunrise}</li>
                <li>${timeSunset}</li>
                <li>${cloudiness}</li>
            </ul>
        `;

  tableDataUl.appendChild(tableDataLi);

  // display the location on the map
  const latitude = data.coord.lat;
  const longitude = data.coord.lon;
  renderLocationOnGoogleMap(latitude, longitude);
}

btnWeather.addEventListener("click", () => {
  if (cityNameInput.value === "") {
    alert("Enter your city name");
  }
  weatherInfo(cityNameInput.value);
});
btnCurrentLocation.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    const currentLocation = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
    weatherInfoCurrentLocation(
      currentLocation.latitude,
      currentLocation.longitude
    );
  });
});
window.addEventListener("load", () => {
  if (localStorage.getItem("city") !== null) {
    const data = JSON.parse(localStorage.getItem("city"));
    showWeatherInfo(data);
  }
});
