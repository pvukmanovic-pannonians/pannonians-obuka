import { useEffect, useState } from "react";

const TextText = ({ paragraph, callback }) => {
  const text = "Hello World";

  const [broj, setBroj] = useState(Math.random() * 100);
  const [textKomponente, setTextKomponente] = useState(text);

  useEffect(() => {
    console.log("dino komponenta renderovana na ekranu");

    return () => {
      console.log("Ovde sada znamo da se dino komponenta takoreci UNMOUNT");
    };
  }, []);

  useEffect(() => {
    console.log("Broj se promenio");
  }, [broj]);

  return (
    <>
      <h1>{textKomponente}</h1>
      <img src="https://media1.giphy.com/media/lTigJvWJwtlchDTXQY/giphy.gif" />
      <button
        onClick={() => {
          setTextKomponente(textKomponente === text ? "Promenjen text" : text);
          callback();
          setBroj(Math.random() * 100);
        }}
        type="button"
        style={{ fontSize: 48 }}
      >
        Change text
      </button>
      <p style={{ backgroundColor: "red", minWidth: 200, minHeight: 20 }}>
        {paragraph}
      </p>
      {broj}
    </>
  );
};

export default TextText;
