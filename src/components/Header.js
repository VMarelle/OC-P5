import "../styles/index.css";
import headerLogo from "../assets/LogoOrangeBig.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="kasa-header">
      <img src={headerLogo} alt="kasa" className="kasa-header-logo" />
      <nav>
        <ul>
          <a href="">Accueil</a>

          <a href="">A propos</a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
