import Dino from "./components/TextText";
import "./App.css";
import { Pozadina as Background } from "./components/Pozadina";
import { useState } from "react";

function App() {
  const text = "Ovde neki text prosledjen iz parent komponente";
  const [toggle, setToggle] = useState(true);

  const funkcija = () => {
    // alert("Pozvana neka funkcija");
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          change toggle
        </button>
        {toggle ? (
          <Dino callback={funkcija} paragraph={text} />
        ) : (
          <Background>
            <p>qweqwe</p>
          </Background>
        )}
      </header>
    </div>
  );
}

export default App;
