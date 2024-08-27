import "../styles/index.css";
import headerLogo from "../assets/LogoOrangeBig.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="kasa-header">
      <img src={headerLogo} alt="kasa" className="kasa-header-logo" />
      <nav>
        <ul>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            A propos
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
