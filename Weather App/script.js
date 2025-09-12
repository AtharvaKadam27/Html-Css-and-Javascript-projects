let inputBtn = document.querySelector(".input-btn");
let weatherIcon = document.querySelector(".weather-info img");
let weatherAll = document.querySelector(".weather-all");
let weatherContainer = document.querySelector(".weather-card-container");
let city = null;

async function currentLocation(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c4140d30415bbc8aee1a0178bffd5860&units=metric`
  )
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      addWeatherDetails(res);
    });

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=c4140d30415bbc8aee1a0178bffd5860&units=metric`
  )
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      addForecastDetails(res);
    });
}

navigator.geolocation.getCurrentPosition((position) => {
  currentLocation(
    position.coords.latitude.toFixed(2),
    position.coords.longitude.toFixed(2)
  );
});

function getWeatherFont(type) {
  if (type === "Clouds") {
    return "images/clouds.png";
  } else if (type === "Clear") {
    return "images/clear.png";
  } else if (type === "Rain") {
    return "images/rain.png";
  } else if (type === "Drizzle") {
    return "images/drizzle.png";
  } else if (type === "Mist") {
    return "images/mist.png";
  }
}

function addWeatherDetails(data) {
  console.log(data);

  document.querySelector(".weather-all").style.display = "block";
  document.querySelector(".weather-info h1").textContent =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".weather-info p").textContent = data.name;
  document.querySelector(".weather-info-1 .humidity-data").textContent =
    data.main.humidity + "%";
  document.querySelector(".weather-info-1 .wind-speed-data").textContent =
    data.wind.speed + "km/h";

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}

function addForecastDetails(data) {
  console.log(data);

  const timeTaken = "12:00:00";
  const todayDate = new Date().toISOString().split("T")[0];

  data.list.forEach((item) => {
    const dateTaken = new Date(item.dt_txt);
    const dateOption = {
      day: "2-digit",
      month: "short",
    };

    const dateResult = dateTaken.toLocaleDateString("en-US", dateOption);
    if (item.dt_txt.includes(timeTaken) && !item.dt_txt.includes(todayDate)) {
      let weatherCard = `
        <div class="weather-card">
              <h4>${dateResult}</h4>
              <img src="./${getWeatherFont(item.weather[0].main)}" alt="" />
              <p>${Math.round(item.main.temp)}°c</p>
            </div>
            `;
      weatherContainer.insertAdjacentHTML("beforeend", weatherCard);
    }
  });
}

async function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4140d30415bbc8aee1a0178bffd5860&units=metric`
  )
    .then((res) => res.json())
    .then((data) => addWeatherDetails(data))
    .catch((Error) => {
      alert(Error.message);
      console.log(Error);
    });

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c4140d30415bbc8aee1a0178bffd5860&units=metric`
  )
    .then((res) => res.json())
    .then((data) => addForecastDetails(data))
    .catch((Error) => alert(Error.message));
}

function getInput() {
  let city = document.querySelector(".input-box").value.trim();
  console.log(city);

  if (!city) {
    return alert("Please enter a city name");
  }
  getWeather(city);
}

inputBtn.addEventListener("click", (e) => {
  getInput();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    getInput();
  }
});
