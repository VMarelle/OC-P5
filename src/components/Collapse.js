import { useState } from "react";
import openArrow from "../assets/open.png";
import closeArrow from "../assets/close.png";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="info-bar">
      <h2>{title} </h2>
      <button className="toggle-button" onClick={() => setIsOpen(false)}>
        <img src={closeArrow} alt="close-arrow" />
      </button>
      <p>{content} </p>
    </div>
  ) : (
    <div className="info-bar">
      <h2>{title} </h2>
      <button className="toggle-button" onClick={() => setIsOpen(true)}>
        <img src={openArrow} alt="open-arrow" />
      </button>
    </div>
  );
}

export default Collapse;
