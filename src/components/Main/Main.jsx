import React from "react";
import "./Main.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import TemperatureContextUnit from "../../contexts/TemperatureContextUnit.js";

function Main({ clothingItems, weatherData, onCardClick }) {
  const tempContext = React.useContext(TemperatureContextUnit);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[tempContext.currentTemperatureUnit]}&deg;{" "}
          {tempContext.currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            ?.filter((item) => {
              return item.weather === weatherData.type;
            })
            ?.map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
