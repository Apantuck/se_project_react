import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/icon-user-profile.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="WTWR" className="header__logo" />
      <p className="header__geo-details">DATE, LOCATION</p>
      <button className="header__add-clothes-btn">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">FIRST-NAME LAST-NAME</p>
        <img src={avatar} alt="profile image" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
