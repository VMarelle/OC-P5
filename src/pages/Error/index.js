import Json from "../../json.json";
import "../../styles/index.css";
import errorLogo from "../../assets/404.svg";
import { Link } from "react-router-dom";

function App() {
  console.log(Json);
  return (
    <main className="error-page">
      <img src={errorLogo} alt="Error Logo"></img>
      <p>Oups ! La page que vous demandez n'existe pas.</p>

      <Link to={""}>Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default App;
