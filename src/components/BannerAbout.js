import "../styles/index.css";
import imgBanner from "../assets/imgBannerAbout.svg";

function BannerAbout() {
  return (
    <div className="about-banner">
      <img src={imgBanner} alt="banner" />
    </div>
  );
}

export default BannerAbout;
