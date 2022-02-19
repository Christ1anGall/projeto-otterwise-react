import Banner from "./components/Banner/Banner";
import { DescribeCard } from "./components/DescribeCard";
import todoIMG from "./components/img/todoIMG.svg"
import './components/Banner/Banner.css'



function App() {
  
  return (

    <div >
      
    <Banner imgBanner= {todoIMG} nameBanner="To Do" card="card" >
     
        <DescribeCard />
        
      </Banner>

      </div>
  );
}

export default App;
