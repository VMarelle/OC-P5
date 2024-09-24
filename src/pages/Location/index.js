import Json from "../../data/json.json";
import Location from "../../components/Location";
import Collapse from "../../components/Collapse";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel";
import { Navigate } from "react-router-dom";

function App() {
  console.log(Json);
  const { id } = useParams();

  const item = Json.find((item) => item.id === id);

  if (!item) {
    return <Navigate to="*" />;
  }
  console.log(item);
  return (
    <main className="kasa-home">
      <Carrousel images={item.pictures} />
      <Location />
      <div className="infos-location">
        <div className="desc-location">
          <Collapse title="Description" content={item.description} />
        </div>
        <div className="equipement-list">
          <Collapse title="Équipements" content={item.equipments} />
        </div>
      </div>
    </main>
  );
}

export default App;
