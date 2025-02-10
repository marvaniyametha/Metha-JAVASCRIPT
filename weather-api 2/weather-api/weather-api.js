document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.querySelector(".ri-search-line");
  const inputField = document.getElementById("weather-city");
  const weatherResult = document.getElementById("weather-result");

  searchIcon.addEventListener("click", fetchWeather);
  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      fetchWeather();
    }
  });

  function fetchWeather() {
    const apiKey = "2207eaaf96a5ec1ab27680316e7632a5";
    const city = inputField.value.trim();

    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        displayWeather(data);
      })
      .catch((error) => {
        alert(error.message || "Something went wrong. Please try again.");
      });
  }

  function displayWeather(data) {
    const { name } = data;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { description, icon } = data.weather[0];

    weatherResult.innerHTML = `
        <div class="weather-card">
          <h3>${name}</h3>
          <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
          <div class="temperature">${temp}°C</div>
          <p>Humidity: ${humidity}%</p>
          <p>Wind Speed: ${speed} m/s</p>
          <p>Weather: ${description}</p>
        </div>
      `;

    weatherResult.style.display = "block";
  }
});
