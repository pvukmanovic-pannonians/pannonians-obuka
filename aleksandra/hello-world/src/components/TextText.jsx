import { useState } from "react";

const TextText = ({ paragraph, callback}) => {

    const text = "Hello World!!";
  
    const [number, setNumber] = useState(Math.random() * 100);
  
    const [textKomponente, setTextKomponente] = useState(text);
  
    return (
      <>
        <h1>{textKomponente}</h1>
        <img alt="dino" src="https://media3.giphy.com/media/zvmq0xAIu6htyg30VU/giphy.gif"/>
        <button 
          onClick={() => {
            setTextKomponente(textKomponente === text ? "Changed text" : text)
            callback();
          }} 
          type="button" 
          style={{fontSize:48}}
        >
          Change text
        </button>
        <p style={{ backgroundColor: "red", minWidth: 200, minHeight: 20 }}>
          {paragraph}
        </p>
        {number}
      </>
    );
  }; 

  export default TextText;