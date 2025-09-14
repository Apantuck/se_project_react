import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onCardClick, onAddBtnClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__txt-container">
        <p className="clothes-section__item-label">Your items</p>
        <button
          type="button"
          className="clothes-section__add-btn"
          onClick={onAddBtnClick}
        >
          + Add New
        </button>
      </div>
      <ul className="clothes-section__cards-list">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
