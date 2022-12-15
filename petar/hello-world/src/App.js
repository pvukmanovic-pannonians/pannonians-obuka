import { useState, useRef, useMemo, useCallback } from "react";
import "./App.css";

// function validate_mail(mail) {
//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
//     return true;
//   }
//   return false;
// }

function App() {
  const inputField = useRef();
  const [brojevi, setBrojevi] = useState([]);
  const [nesto, setNesto] = useState(false);

  const sortirano = useMemo(() => {
    console.log("memoizovana funkcija se izvrsava", brojevi);
    return [...brojevi].sort((a, b) => a - b);
  }, [brojevi]);

  const sortiranoKrozCallback = useCallback(() => {
    console.log("useCallback se izvrsava", brojevi);
    return [...brojevi].sort((a, b) => a - b);
  }, [brojevi]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memoization</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setBrojevi([...brojevi, parseInt(inputField.current.value)]);
          }}
        >
          <input ref={inputField} type="text" />
          <input type="submit" />
        </form>
        {nesto ? "true" : "false"}
        {sortirano.map((broj) => (
          <div key={broj}>{broj}</div>
        ))}
        <button
          onClick={() => {
            setNesto(!nesto);
          }}
        >
          Promeni nesto
        </button>
        <button
          onClick={() => {
            console.log(sortiranoKrozCallback());
          }}
        >
          pozovi callback
        </button>
      </header>
    </div>
  );
}

export default App;

// function Forma({ setInputValue, isMailValid, inputValue, submittable }) {
//   return (
//     <form
//       style={{ display: "flex", flexDirection: "column" }}
//       onSubmit={(event) => {
//         event.preventDefault();
//         console.log("moja mail adresa je: " + inputValue);
//       }}
//     >
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(event) => {
//           setInputValue(event.target.value);
//         }}
//         style={{ fontSize: 40 }}
//       />
//       {!isMailValid && inputValue && inputValue.length !== 0 && (
//         <span style={{ color: "red" }}>Your mail is not valid</span>
//       )}
//       <button disabled={!submittable} style={{ fontSize: 30 }} type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }
