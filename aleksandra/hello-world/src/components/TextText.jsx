import { useEffect, useState } from "react";

const TextText = ({ paragraph, callback}) => {

    const text = "Hello World!!";
  
    const [number, setNumber] = useState(Math.random() * 100);
  
    const [textKomponente, setTextKomponente] = useState(text);

    useEffect(() => {
      console.log("Dino komponenta renederovana na ekranu ;)");


      return () => {
        console.log("Dino komponenta se takoreci UNMOUNT!");
      }
    }, []); 
  
    useEffect(() => {
      console.log("Number se promenio ;)");
    }, [number]); 
  
    return (
      <>
        <h1>{textKomponente}</h1>
        <img alt="dino" src="https://media3.giphy.com/media/zvmq0xAIu6htyg30VU/giphy.gif"/>
        <button 
          onClick={() => {
            setTextKomponente(textKomponente === text ? "Changed text" : text)
            callback();
            setNumber(Math.random() * 100);
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