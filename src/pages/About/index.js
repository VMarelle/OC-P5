import Json from "../../json.json";
import BannerAbout from "../../components/BannerAbout";
import Collapse from "../../components/Collapse";
import AboutList from "../../aboutList.json";

function App() {
  console.log(Json);
  return (
    <main>
      <BannerAbout />
      <div className="about-list">
        <ul className="about-info-list">
          {AboutList.map(({ title, content }) => (
            <Collapse title={title} content={content} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
