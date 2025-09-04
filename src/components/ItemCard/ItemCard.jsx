import "./ItemCard.css";

function ItemCard(props) {
  return (
    <li className="card">
      <p className="card__title">{props.name}</p>
      <img src={props.link} alt={props.name} className="card__img" />
    </li>
  );
}

export default ItemCard;
