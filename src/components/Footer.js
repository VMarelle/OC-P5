import footerLogo from "../assets/LogoBlanc.svg";
import "../styles/index.css";

function Footer() {
  return (
    <footer className="kasa-footer">
      <img src={footerLogo} alt="kasa" className="kasa-footer-logo" />
      <div className="kasa-footer-elem">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
