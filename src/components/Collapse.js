import { useState } from "react";
import openArrow from "../assets/images/up.svg";
import closeArrow from "../assets/images/down.svg";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = () => {
    if (typeof content === "string") {
      return <p>{content}</p>;
    } else {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={"collapseLi" + index}>{item}</li>
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
