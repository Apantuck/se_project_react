import "./ModalWithForm.css";
import closeIcon from "../../assets/icon-close-default.svg";

function ModalWithForm({
  btnText,
  titleText,
  activeModal,
  closeActiveModal,
  modalName,
  children,
}) {
  return (
    <div
      className={`modal ${activeModal === modalName ? "modal_is-opened" : ""}`}
    >
      <div className="modal__container">
        <h2 className="modal__title">{titleText}</h2>
        <button
          type="button"
          className="modal__btn-close"
          style={{ backgroundImage: `url(${closeIcon})` }}
          onClick={closeActiveModal}
        ></button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__btn-submit">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
