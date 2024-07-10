import "./App.css";
import Json from "../../json.json";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function App() {
  console.log(Json);
  return (
    <main>
      <Header></Header>
      Accueil
      <Footer></Footer>
    </main>
  );
}

export default App;
