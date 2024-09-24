import imgBanner from "../assets/images/imgBanner.svg";

function Banner() {
  return (
    <div className="home-banner">
      <img src={imgBanner} alt="banner" />
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
