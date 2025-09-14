import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";

function Profile({ clothingItems, onCardClick, onAddBtnClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        onAddBtnClick={onAddBtnClick}
      />
    </section>
  );
}

export default Profile;
