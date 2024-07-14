import "../../styles/index.css";
import imgBanner from "../../assets/imgBanner.svg";

function Banner() {
  return (
    <div className="home-banner">
      <img src={imgBanner} alt="banner" />
      <span>Chez vous, partout ailleurs</span>
    </div>
  );
}

export default Banner;
