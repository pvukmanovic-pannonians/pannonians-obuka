import Dino from "./components/TextText";
import "./App.css";
import { Pozadina as Background, alertiranje } from "./components/Pozadina";

function App() {
  const text = "Ovde neki text prosledjen iz parent komponente";

  const funkcija = () => {
    alert("Pozvana neka funkcija");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Dino callback={funkcija} paragraph={text} />
        <Dino callback={alertiranje} paragraph="asdasdasdds" />
        <Dino callback={funkcija} paragraph={12312321} />
        <Dino callback={funkcija} paragraph={12312321} />

        <Background>
          <p>qweqwe</p>
          <p>qweqwe</p>
          <p>qweqwe</p>
        </Background>
      </header>
    </div>
  );
}

export default App;
