import React from "react";
import "./WeatherCard.css";
import cloudy from "../../assets/weather-day-cloudy.png";
import { weatherBanners } from "../../utils/constants.js";
import CurrentTemperatureContextUnit from "../../contexts/CurrentTemperatureContextUnit.js";

function WeatherCard({ weatherData }) {
  const tempContext = React.useContext(CurrentTemperatureContextUnit);

  const getBannerURL = () => {
    if (weatherData?.time && weatherData?.condition) {
      return weatherBanners[weatherData.time][weatherData.condition];
    } else {
      return cloudy;
    }
  };

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData?.temp[tempContext.currentTemperatureUnit]}&deg;
        {tempContext.currentTemperatureUnit}
      </p>
      <img
        src={getBannerURL()}
        alt={weatherData.condition}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
