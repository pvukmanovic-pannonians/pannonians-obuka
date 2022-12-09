import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextText />
      </header>
    </div>
  );
}

export default App;

const TextText = () => {
  const text = "Hello World";

  const [textKomponente, setTextKomponente] = useState(text);

  return (
    <>
      <h1>{textKomponente}</h1>
      <img src="https://media1.giphy.com/media/lTigJvWJwtlchDTXQY/giphy.gif" />
      <button
        onClick={() => {
          setTextKomponente(textKomponente === text ? "Promenjen text" : text);
        }}
        type="button"
        style={{ fontSize: 48 }}
      >
        Change text
      </button>
    </>
  );
};
