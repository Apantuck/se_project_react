import { useState, useEffect } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeatherData } from "../../utils/weatherApi.js";
import { defaultClothingItems } from "../../utils/clothingItems.js";
import {
  addGarmentModal,
  previewItemModal,
  coordinates,
  units,
  APIkey,
} from "../../utils/constants.js";
import TemperatureContextUnit from "../../contexts/TemperatureContextUnit.js";
import Profile from "../Profile/Profile.jsx";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    time: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddClothesClick = () => {
    setActiveModal(addGarmentModal);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal(previewItemModal);
    setSelectedCard(card);
  };

  const closeModalOnEsc = (e) => {
    if (e.key === "Escape") {
      closeActiveModal();
    }
  };

  // Close modal on "Escape" key press
  useEffect(() => {
    document.addEventListener("keydown", closeModalOnEsc);
    return () => {
      document.removeEventListener("keydown", closeModalOnEsc);
    };
  }, []);

  // Fetch weather data on component mount
  useEffect(() => {
    getWeatherData({
      ...coordinates,
      units,
      APIkey,
    })
      .then((data) => {
        setWeatherData({
          type: data.type,
          temp: data.temp,
          city: data.city,
          condition: data.condition,
          time: data.time,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="app">
      <TemperatureContextUnit.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="app__content">
          <Header
            weatherData={weatherData}
            onButtonClick={handleAddClothesClick}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <ModalWithForm
          btnText="Add garment"
          titleText="New garment"
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          modalName={addGarmentModal}
        >
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
              required
            />
          </label>
          <label htmlFor="imageURL" className="modal__label">
            Image{" "}
            <input
              type="url"
              className="modal__input"
              id="imageURL"
              placeholder="Image URL"
              required
            />
          </label>
          <fieldset className="modal__radio-btns">
            <legend className="modal__legend">Select the weather type:</legend>
            <label htmlFor="hot" className="modal__label modal__label_radio">
              <input
                type="radio"
                name="weatherTypeSelector"
                className="modal__input-radio"
                id="hot"
                value="hot"
              />
              Hot
            </label>
            <label htmlFor="warm" className="modal__label modal__label_radio">
              <input
                type="radio"
                name="weatherTypeSelector"
                className="modal__input-radio"
                id="warm"
                value="warm"
              />
              Warm
            </label>
            <label htmlFor="cold" className="modal__label modal__label_radio">
              <input
                type="radio"
                name="weatherTypeSelector"
                className="modal__input-radio"
                id="cold"
                value="cold"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          modalName={previewItemModal}
          card={selectedCard}
        />
      </TemperatureContextUnit.Provider>
    </div>
  );
}

export default App;
