const apiKey = "a8d0b5b758d3e8fa2b98d2d5b41e120d";
const weatherInfo = document.getElementById("weather-info");
const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const cityName = cityInput.value;
  if (cityName) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        const { name, main, weather } = data;
        const temperature = main.temp;
        const description = weather[0].description;
        const icon = weather[0].icon;

        const weatherHTML = `
                    <h2>${name}</h2>
                    <div>
                        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
                    </div>
                    <p>${description}</p>
                    <p>Temperature: ${temperature}°C</p>
                `;

        weatherInfo.innerHTML = weatherHTML;
      })
      .catch((error) => {
        console.error(error);
        weatherInfo.innerHTML = "City not found";
      });
  }
});
