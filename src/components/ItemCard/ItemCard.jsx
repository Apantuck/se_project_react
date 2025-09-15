import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <p className="card__title">{item.name}</p>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__img"
        onClick={handleCardClick}
      />
    </li>
  );
}

export default ItemCard;
