import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";
import closeIcon from "../../assets/icon-close-light.svg";

function ItemModal({ activeModal, closeActiveModal, modalName, card }) {
  return (
    <div
      className={`modal ${activeModal === modalName ? "modal_is-opened" : ""}`}
    >
      <div className="modal__container modal__container_item">
        <button
          type="button"
          className="modal__btn-close"
          style={{ backgroundImage: `url(${closeIcon})` }}
          onClick={closeActiveModal}
        ></button>
        <img src={card?.link} alt={card?.name} className="modal__item-image" />
        <div className="modal__item-info-container">
          <h2 className="modal__title modal__title_item">{card?.name}</h2>
          <p className="modal__text modal__text_item">
            Weather: {card?.weather}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
