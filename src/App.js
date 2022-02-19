
import Banner from "./components/Banner/Banner";
import { DescribeCard } from "./components/DescribeCard";
import todoIMG from "./components/img/todoIMG.svg";
import "./components/Banner/Banner.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1> Kanban</h1>
      <div className="Kanban">
        <Banner imgBanner={todoIMG} nameBanner="To Do" card="card" />
         

        <Banner nameBanner="To Do" />
      </div>
    </div>
  );

}

export default App;
