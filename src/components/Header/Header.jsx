import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/icon-user-profile.png";

function Header({ weatherData, onButtonClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="WTWR" className="header__logo" />
      <p className="header__geo-details">
        {currentDate}, {weatherData?.city}
      </p>
      <button
        type="button"
        className="header__add-clothes-btn"
        onClick={onButtonClick}
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="profile image" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
