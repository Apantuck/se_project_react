import "./ModalWithForm.css";
import closeIcon from "../../assets/icon-close-default.svg";

function ModalWithForm({
  btnText,
  title,
  isActive,
  closeActiveModal,
  handleSubmit,
  children,
}) {
  return (
    <div className={`modal ${isActive ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__btn-close"
          style={{ backgroundImage: `url(${closeIcon})` }}
          onClick={closeActiveModal}
        ></button>
        <form className="modal__form" onSubmit={handleSubmit}>
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
