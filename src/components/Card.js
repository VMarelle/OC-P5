import "../styles/index.css";

function Card({ title, cover }) {
  return (
    <li className="kasa-apartment-card">
      <img
        className="kasa-apartment-card-cover"
        src={cover}
        alt={`${title} cover`}
      />
      <h2 className="title-card">{title}</h2>
    </li>
  );
}

export default Card;
