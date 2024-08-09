const weathers = [
  // {
  //   city: "New York",
  //   temperature: 28,
  //   weather: "Cloudy",
  //   icon: "moon",
  //   day: "night",
  //   time: new Date().toLocaleTimeString("en-US", {
  //     timeZone: "America/New_York",
  //   }),
  // },
  // {
  //   city: "London",
  //   temperature: 18,
  //   weather: "Cloudy",
  //   icon: "cloudy",
  //   day: "day",
  //   time: new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/London" }),
  // },
  // {
  //   city: "Local",
  //   temperature: 30,
  //   weather: "Sunny",
  //   icon: "Sunny",
  //   day: "day",
  //   time: new Date().toLocaleTimeString(),
  // },
  // {
  //   city: "Sydney",
  //   temperature: 22,
  //   weather: "Partly Cloudy",
  //   icon: "cloudy",
  //   day: "night",
  //   time: new Date().toLocaleTimeString("en-AU", {
  //     timeZone: "Australia/Sydney",
  //   }),
  // },
  // {
  //   city: "Paris",
  //   temperature: 25,
  //   weather: "Clear",
  //   icon: "moon",
  //   day: "day",
  //   time: new Date().toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" }),
  // },
];

const weatherBlock = document.getElementById("weatherBlock");
const input = document.getElementById("input");
const myCity = document.querySelector(".myCity");

const iconComponent = (icon) => {
  if (icon === "Sunny") {
    return `<div>
<img src="sunny.png" width="10px" height="10px" alt="" />
    </div>`;
  } else if (icon === "Rainy") {
    return `<div>
<img src="rainy.png" width="10px" height="10px" alt="" />
    </div>`;
  } else if (icon === "cloudy") {
    return `<div>
<img src="cloudy.png" width="10px" height="10px" alt="" />
    </div>`;
  } else if (icon === "moon") {
    return `<div>
<img src="moon.png" width="10px" height="10px" alt="" />
    </div>`;
  }
};
// icon orj ireh

const videoChanger = (day) => {
  if (day === "day") {
    return "udur1.mp4";
  } else {
    return "2018959-hd_1920_1080_30fps.mp4";
  }
};

const cardComponent = (item) => {
  const { city, temperature, weather, icon, day, time } = item;
  const result = iconComponent(icon);
  const video = videoChanger(day);
  // const time = dayChanger(time);

  return `<div id="videoo" class="videoo">
          <video autoplay muted loop id="bg-video">
            <source src="${video}" type="video/mp4" />
          </video>
          <div class="pidda">
            <div class="myCity">${city}
            <div class="time">${time}</div>
            </div>
            <div class="weatherArea">${weather}</div>
            <div class="temprature">${temperature}
            <div class="icon">${result}</div>
            </div>
            <div class="day">${day}</div>
           </div> 
        </div>
  `;
};

const catching = (data) => {
  weatherBlock.innerHTML = "";

  data.forEach((item) => {
    weatherBlock.innerHTML += cardComponent(item);
  });
};

catching(weathers);
//udur shunu bgag chechleh
// day=== day || night day

//hereg bolh

//icon check

if (!("webkitSpeechRecognition" in window)) {
  alert(
    "Your browser does not support the Web Speech API. Please use Chrome or a compatible browser."
  );
} else {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  // recognition.lang = "fr-FR";
  recognition.lang = "en-EN";

  const voiceButton = document.getElementById("voiceButton");
  const status = document.getElementById("status");

  voiceButton.addEventListener("click", () => {
    recognition.start();
    status.textContent = "Listening...";
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    status.textContent = `Recognized: ${transcript}`;

    const filtered1 = weathers.filter(({ city }) =>
      city.toLowerCase().includes(transcript.toLowerCase())
    );

    if (filtered1.length > 0) {
      catching(filtered1);
      videoo.forEach((item) => {
        item.style.justifyContent = "Center";
        item.style.height = "100%";
      });
    }
    // window.location.href = "1.html";
  };
}

const container = document.getElementById("container");

const getGiphyData = async (locationToFind) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationToFind}&units=Metric&appid=7c91776fb1267161889e298c3e7ceb4b`;
  const result = await fetch(url);
  return result.json();
};

const asd = document.getElementById("asd");

asd.addEventListener("click", async () => {
  const data = await getGiphyData(input.value);
  container.innerHTML = "";
  if (data) {
    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      weather: data.weather[0].description,
      time: new Date(data.dt * 1000).toLocaleTimeString(),
    };

    weatherBlock.innerHTML = cardComponent(weatherData);
  }

  // data.forEach((element) => {
  //   // const imgTag = `<img src=${element.images.original.url} />`;
  //   container.innerHTML += imgTag;
  // });

  // {
  //   const filtered = weathers.filter(({ city }) =>
  //     city.toLowerCase().includes(input.value.toLowerCase())
  //   );
  //   catching(filtered);
  //   const videoo = document.querySelectorAll(".videoo");
  //   const myCity = document.querySelectorAll(".myCity");
  //   const pidda = document.querySelectorAll(".pidda");
  //   const day = document.querySelectorAll(".day");
  //   const weatherArea = document.querySelectorAll(".weatherArea");
  //   const temprature = document.querySelectorAll(".temprature");

  //   temprature.forEach((temp) => {
  //     temp.style.fontSize = "30px";
  //   });
  //   weatherArea.forEach((wera) => {
  //     wera.style.display = "none";
  //   });
  //   day.forEach((daya) => {
  //     daya.style.display = "none";
  //   });
  //   pidda.forEach((pid) => {
  //     pid.style.flexDirection = "Row";
  //     pid.style.gap = "20px";
  //   });
  //   myCity.forEach((tiem) => {
  //     tiem.style.fontSize = "36px";
  //     tiem.style.justifyContent = "Center";
  //   });
  //   videoo.forEach((item) => {
  //     item.style.justifyContent = "Center";
  //     item.style.height = "100%";
  //   });
  // }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    catching(weathers);
  }
});
