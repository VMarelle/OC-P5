import { useParams } from "react-router-dom";
import Json from "../json.json";
import Rating from "./Rating";

const Location = () => {
  const { id } = useParams();

  const item = Json.find((item) => item.id === id);

  return (
    <div className="location-infos">
      <div>
        <h2 className="location-title">{item.title} </h2>
        <p className="location-location">{item.location}</p>
      </div>
      <ul className="tags">
        {item.tags.map((item, index) => (
          <li key={"locationLi" + index}>{item}</li>
        ))}
      </ul>
      <div className="host">
        <p>{item.host.name}</p>
        <img src={item.host.picture} alt={item.title} />
      </div>
      <div className="rating">
        <Rating rating={item.rating} />
      </div>
    </div>
  );
};

export default Location;
