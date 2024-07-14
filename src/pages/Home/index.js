import Json from "../../json.json";
import Banner from "./Banner";
import Card from "./Card";

function App() {
  console.log(Json);
  return (
    <main className="kasa-home">
      <Banner />
      <div className="home-list">
        <ul className="apartment-list">
          {Json.map(({ id, cover, title }) => (
            <Card key={id} cover={cover} title={title} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
