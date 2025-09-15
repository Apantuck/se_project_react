import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

function AddItemModal({ name, curActiveModal, onAddItem, onCloseModal }) {
  const { values, handleChange, handleReset } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddItem(values, handleReset);
  };

  return (
    <ModalWithForm
      btnText="Add garment"
      title="New garment"
      isActive={curActiveModal === name}
      closeActiveModal={onCloseModal}
      handleSubmit={handleFormSubmit}
    >
      <label className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          name="imageUrl"
          value={values.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_radio">
          <input
            type="radio"
            name="weather"
            className="modal__input-radio"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
          />
          Hot
        </label>
        <label className="modal__label modal__label_radio">
          <input
            type="radio"
            name="weather"
            className="modal__input-radio"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          Warm
        </label>
        <label className="modal__label modal__label_radio">
          <input
            type="radio"
            name="weather"
            className="modal__input-radio"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
