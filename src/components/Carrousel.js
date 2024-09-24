import { useState } from "react";
import previousArrow from "../assets/images/previous.svg";
import nextArrow from "../assets/images/next.svg";

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel">
      <button className="prevBtn" onClick={previousImage}>
        <img className="" src={previousArrow} alt="previous-arrow" />
      </button>
      <img
        className="pictures"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      <button className="nextBtn" onClick={nextImage}>
        <img src={nextArrow} alt="next-arrow" />
      </button>
    </div>
  );
};

export default Carrousel;
