import Json from "../../data/json.json";
import BannerAbout from "../../components/BannerAbout";
import Collapse from "../../components/Collapse";
import AboutList from "../../aboutList.json";

function App() {
  console.log(Json);
  return (
    <main className="kasa-home">
      <BannerAbout />
      <div className="about-list">
        <ul className="about-info-list">
          {AboutList.map(({ title, content, index }) => (
            <Collapse title={title} content={content} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
