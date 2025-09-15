import React from "react";
import "./ToggleSwitch.css";
import TemperatureContextUnit from "../../contexts/CurrentTemperatureContextUnit";

function ToggleSwitch({ name }) {
  const tempContext = React.useContext(TemperatureContextUnit);

  const isChecked = () => tempContext.currentTemperatureUnit === "C";

  const getTextClass = (isLeft) => {
    return (
      "toggle-switch__txt" +
      (isLeft && !isChecked()
        ? " toggle-switch__txt_active"
        : !isLeft && isChecked()
        ? " toggle-switch__txt_active"
        : " toggle-switch__txt_inactive")
    );
  };

  return (
    <>
      <input
        type="checkbox"
        id={name}
        className="toggle-switch__checkbox"
        checked={isChecked()}
        onChange={tempContext.handleToggleSwitchChange}
      />
      <label className="toggle-switch__label" htmlFor={name}>
        <span className="toggle-switch__btn"></span>
        <p className={getTextClass(true)}>F</p>
        <p className={getTextClass(false)}>C</p>
      </label>
    </>
  );
}

export default ToggleSwitch;
