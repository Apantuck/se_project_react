const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherConditions = (temp) => {
  return temp >= 86 ? "hot" : temp >= 66 ? "warm" : "cold";
};

const getTimeOfDay = ({ sunrise, sunset }) => {
  const time = Date.now() / 1000;
  return time >= sunrise && time < sunset ? "day" : "night";
};

const getWeatherData = ({ latitude, longitude, units, APIkey }) => {
  const weatherApiUrl = `${baseUrl}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${APIkey}`;
  // console.log("Fetching weather data from:", weatherApiUrl);
  return fetch(weatherApiUrl)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      // console.log(`data from weather api:`, data);
      return {
        temp: {
          F: Math.round(data.main.temp),
          C: Math.round((data.main.temp - 32) * (5 / 9)),
        },
        type: getWeatherConditions(data.main.temp),
        city: data.name,
        condition: data.weather[0].main.toLowerCase(),
        time: getTimeOfDay(data.sys),
      };
    })
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });
};

export { getWeatherData };
