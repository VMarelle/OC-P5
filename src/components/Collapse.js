import { useState } from "react";
import openArrow from "../assets/open.png";
import closeArrow from "../assets/close.png";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = () => {
    if (typeof content === "string") {
      return <p>{content}</p>;
    } else {
      return (
        <ul>
          {content.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    }
  };

  return isOpen ? (
    <div className="info-bar-open">
      <h2>{title} </h2>
      <button className="toggle-button" onClick={() => setIsOpen(false)}>
        <img src={closeArrow} alt="close-arrow" />
      </button>
      <div className="desc">{renderContent()}</div>
    </div>
  ) : (
    <div className="info-bar">
      <h2>{title} </h2>
      <button className="toggle-button" onClick={() => setIsOpen(true)}>
        <img src={openArrow} alt="open-arrow" />
      </button>
      <div className="desc"></div>
    </div>
  );
}

export default Collapse;
