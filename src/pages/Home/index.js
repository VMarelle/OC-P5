import Json from "../../json.json";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

function App() {
  console.log(Json);
  return (
    <main className="kasa-home">
      <Banner />
      <div className="home-list">
        <ul className="apartment-list">
          {Json.map(({ id, cover, title }, index) => (
            <Link key={"homeKey" + index} to={`/location/${id}`}>
              <Card key={id} cover={cover} title={title} />
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
