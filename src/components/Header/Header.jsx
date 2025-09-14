import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/icon-user-profile.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ weatherData, onButtonClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="WTWR" className="header__logo" />
      </Link>
      <p className="header__geo-details">
        {currentDate}, {weatherData?.city}
      </p>
      <ToggleSwitch name="temperature-unit-toggle" />
      <button
        type="button"
        className="header__add-clothes-btn"
        onClick={onButtonClick}
      >
        + Add clothes
      </button>
      <Link to="/profile" className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="profile image" className="header__avatar" />
      </Link>
    </header>
  );
}

export default Header;
