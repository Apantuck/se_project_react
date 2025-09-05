import "./ModalWithForm.css";
import closeIcon from "../../assets/icon-close-default.svg";

function ModalWithForm({ buttText, titText, children }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <h2 className="modal__title">{titText}</h2>
        <button
          type="button"
          className="modal__btn-close"
          style={{ backgroundImage: `url(${closeIcon})` }}
        ></button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__btn-submit">
            {buttText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
