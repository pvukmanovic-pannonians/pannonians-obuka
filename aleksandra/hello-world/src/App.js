import Dino from './components/TextText';
import './App.css';
import { Background as BackgroundTwo, alertiranje} from "./components/Background";

function App() {

  const paragraph = "Here is some text passed from the parent component."; 

  const funkcija = () => {
    alert("Called some function");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Dino callback= {funkcija} paragraph= {paragraph}/>
        <Dino callback= {funkcija} paragraph= "asdasdasd"/>
        <Dino callback= {funkcija} paragraph= {123123}/>
        <Dino callback= {funkcija} paragraph= {321321}/>

        <BackgroundTwo>
          <p>anything</p>
          <p>anything</p>
          <p>anything</p>
        </BackgroundTwo>
      </header>
    </div>
  );
}

export default App;
