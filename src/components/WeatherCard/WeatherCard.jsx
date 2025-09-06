import "./WeatherCard.css";
import cloudy from "../../assets/weather-day-cloudy.png";
import { weatherBanners } from "../../utils/constants.js";

function WeatherCard({ weatherData }) {
  const getBannerURL = () => {
    if (weatherData?.time && weatherData?.condition) {
      return weatherBanners[weatherData.time][weatherData.condition];
    } else {
      return cloudy;
    }
  };

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData?.temp}&deg;F</p>
      <img
        src={getBannerURL()}
        alt={weatherData.condition}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
