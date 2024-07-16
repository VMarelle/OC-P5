import "../styles/index.css";
import imgBanner from "../assets/imgBanner.svg";

function Banner() {
  return (
    <div className="home-banner">
      <img src={imgBanner} alt="banner" />
    </div>
  );
}

export default Banner;
