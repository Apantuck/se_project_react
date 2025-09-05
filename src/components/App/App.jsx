import { useState, useEffect } from "react";
import "./App.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { defaultClothingItems } from "../../utils/clothingItems.js";
import { addGarmentModal, previewItemModal } from "../../utils/constants.js";
import { use } from "react";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({ type: "warm" });
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

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    });
  }, []);

  return (
    <div className="app">
      <div className="app__content">
        <Header onButtonClick={handleAddClothesClick} />
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
          />
        </label>
        <label htmlFor="imageURL" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="imageURL"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-btns">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_radio">
            <input type="radio" className="modal__input-radio" id="hot" />
            Hot
          </label>
          <label htmlFor="warm" className="modal__label modal__label_radio">
            <input type="radio" className="modal__input-radio" id="warm" />
            Warm
          </label>
          <label htmlFor="cold" className="modal__label modal__label_radio">
            <input type="radio" className="modal__input-radio" id="cold" />
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
