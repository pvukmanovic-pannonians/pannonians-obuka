import Dino from './components/TextText';
import './App.css';
import {Pozadina as Background, alertiranje } from "./components/Pozadina";

function App() {
  const text = "Ovde neki text prosledjen iz parent komponente";

  const funkcija = () => {
    alert("pozvana neka funkcija");
  };

  return (
    <div className="App">
      <header className="App-header">
         <Dino callback={funkcija}  paragraph={text}/>
         <Dino callback={alertiranje}  paragraph="qweqwe"/>
         <Dino callback={funkcija}  paragraph={123123321}/>
        
        <Background>
         <p>qwqeqwe</p>
         <p>qwqeqwe</p>
         <p>qwqeqwe</p>
        </Background>
      </header>
    </div>
  );
}

export default App;
