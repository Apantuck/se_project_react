import "./SideBar.css";
import avatar from "../../assets/icon-user-profile.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="profile picture" className="sidebar__img" />
      <p className="sidebar__name">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
