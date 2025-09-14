import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onCardClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__txt-container">
        <p className="clothes-section__item-label">Your items</p>
        <p className="clothes-section__add-label">+ Add New</p>
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
