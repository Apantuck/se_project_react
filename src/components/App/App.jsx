//#region Imports
import { useState, useEffect } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
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
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
//#endregion

function App() {
  //#region State Variables + Handlers
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

  const handleAddItem = (item, formReset) => {
    // todo : get id from backend
    const newItem = {
      _id: clothingItems.length + 1,
      name: item.name,
      weather: item.weatherType,
      link: item.url,
    };
    setClothingItems([newItem, ...clothingItems]);
    closeActiveModal();
    // to do: if successful addition only
    formReset();
  };

  const handleDeleteItem = (item) => {
    // todo: delete from backend
    const updatedItems = clothingItems.filter((i) => i._id !== item._id);
    setClothingItems(updatedItems);
    closeActiveModal();
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
  //#endregion

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
                  onAddBtnClick={handleAddClothesClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          name={addGarmentModal}
          curActiveModal={activeModal}
          onCloseModal={closeActiveModal}
          onAddItem={handleAddItem}
        ></AddItemModal>
        <ItemModal
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          modalName={previewItemModal}
          card={selectedCard}
          onDeleteItem={handleDeleteItem}
        />
      </TemperatureContextUnit.Provider>
    </div>
  );
}

export default App;
