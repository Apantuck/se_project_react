const addGarmentModal = "add-garment";
const previewItemModal = "preview-item";
const APIkey = "ae6a1868e8c6a82528580e5052884713";
const coordinates = {
  latitude: -19.976599,
  longitude: -43.966686,
};
const units = "imperial";

const weatherBanners = {
  day: {
    clear: new URL("../assets/weather-day-sunny.png", import.meta.url).href,
    clouds: new URL("../assets/weather-day-cloudy.png", import.meta.url).href,
    fog: new URL("../assets/weather-day-fog.png", import.meta.url).href,
    rain: new URL("../assets/weather-day-rainy.png", import.meta.url).href,
    snow: new URL("../assets/weather-day-snow.png", import.meta.url).href,
    thunderstorm: new URL("../assets/weather-day-stormy.png", import.meta.url)
      .href,
  },
  night: {
    clear: new URL("../assets/weather-night-sunny.png", import.meta.url).href,
    clouds: new URL("../assets/weather-night-cloudy.png", import.meta.url).href,
    fog: new URL("../assets/weather-night-fog.png", import.meta.url).href,
    rain: new URL("../assets/weather-night-rainy.png", import.meta.url).href,
    snow: new URL("../assets/weather-night-snow.png", import.meta.url).href,
    thunderstorm: new URL("../assets/weather-night-stormy.png", import.meta.url)
      .href,
  },
};

export {
  addGarmentModal,
  previewItemModal,
  APIkey,
  coordinates,
  units,
  weatherBanners,
};
