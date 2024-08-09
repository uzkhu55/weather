const weather = [];

const weatherBlock = document.getElementById("weatherBlock");
const input = document.getElementById("input");
const myCity = document.querySelector(".myCity");
const asd = document.getElementById("asd");

const cardComponent = (item) => {
  const { city, temperature, weather, time } = item;

  return `<div id="videoo" class="videoo">
            <video autoplay muted loop id="bg-video">
            </video>
            <div class="pidda">
              <div class="myCity">${city}
                <div class="time">${time}</div>
              </div>
              <div class="weatherArea">${weather}</div>
              <div class="temperature">${temperature}°C
              </div>
            </div> 
          </div>`;
};
const catching = (data) => {
  weatherBlock.innerHTML = "";
  data.forEach((item) => {
    weatherBlock.innerHTML += cardComponent(item);
  });
};
catching(weather);

const getWeatherData = async (locationToFind) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationToFind}&units=metric&appid=7c91776fb1267161889e298c3e7ceb4b`;
  const result = await fetch(url);
  return result.json();
};

asd.addEventListener("click", async () => {
  const data = await getWeatherData(input.value);

  if (data) {
    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      weather: data.weather[0].description,
      time: new Date(data.dt * 1000).toLocaleTimeString(),
    };

    weatherBlock.innerHTML = cardComponent(weatherData);
  }
});
