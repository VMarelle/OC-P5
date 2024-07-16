import "../styles/index.css";

function Card({ id, title, cover }) {
  return (
    <li className="kasa-apartment-card">
      <img
        className="kasa-apartment-card-cover"
        src={cover}
        alt={`${title} cover`}
      />
      {title}
    </li>
  );
}

export default Card;
