import Json from "../../data/json.json";

import errorLogo from "../../assets/images/404.svg";
import { Link } from "react-router-dom";

function App() {
  console.log(Json);
  return (
    <main className="error-page">
      <img src={errorLogo} alt="Error Logo"></img>
      <p>
        Oups! La page que{" "}
        <span className="break">vous demandez n'existe pas.</span>
      </p>

      <Link to={""}>Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default App;
