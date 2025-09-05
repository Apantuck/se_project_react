import { useState, useEffect, use } from "react";
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

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: 999,
    city: "",
    condition: "",
    time: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

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

  // Close modal on "Escape" key press
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    });
  }, []);

  // Fetch weather data on component mount
  useEffect(() => {
    getWeatherData({
      ...coordinates,
      units,
      APIkey,
    }).then((data) => {
      setWeatherData({
        type: data.type,
        temp: data.temp,
        city: data.city,
        condition: data.condition,
        time: data.time,
      });
    });
  }, []);

  return (
    <div className="app">
      <div className="app__content">
        <Header
          weatherData={weatherData}
          onButtonClick={handleAddClothesClick}
        />
        <Main
          clothingItems={clothingItems}
          weatherData={weatherData}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ModalWithForm
        buttText="Add garment"
        titText="New garment"
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
            />
            Hot
          </label>
          <label htmlFor="warm" className="modal__label modal__label_radio">
            <input
              type="radio"
              name="weatherTypeSelector"
              className="modal__input-radio"
              id="warm"
            />
            Warm
          </label>
          <label htmlFor="cold" className="modal__label modal__label_radio">
            <input
              type="radio"
              name="weatherTypeSelector"
              className="modal__input-radio"
              id="cold"
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
    </div>
  );
}

export default App;
