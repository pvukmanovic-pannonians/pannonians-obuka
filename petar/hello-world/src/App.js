import { useState, useEffect } from "react";
import "./App.css";

function validate_mail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function App() {
  const [inputValue, setInputValue] = useState();
  const [submittable, setSubmittable] = useState(false);
  const [isMailValid, setIsMailValid] = useState(true);

  useEffect(() => {
    if (validate_mail(inputValue)) {
      setSubmittable(true);
      setIsMailValid(true);
    } else {
      setSubmittable(false);
      setIsMailValid(false);
    }
  }, [inputValue]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Two way data binding</h1>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(event) => {
            event.preventDefault();
            console.log("moja mail adresa je: " + inputValue);
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            style={{ fontSize: 40 }}
          />
          {!isMailValid && inputValue && inputValue.length !== 0 && (
            <span style={{ color: "red" }}>Your mail is not valid</span>
          )}
          <button
            disabled={!submittable}
            style={{ fontSize: 30 }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
