import { useState } from "react";
import "./App.css";

function App() {
  const [inputValueName, setInputValueName] = useState();
  const [inputValueLastName, setInputValueLastName] = useState();
  const [inputValueDateOfBirthday, setInputValueDateOfBirthday] = useState();
  const [gender, setGender] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("First name:" + inputValueName);
            console.log("Last name:" + inputValueLastName);
            console.log("Birth date:" + inputValueDateOfBirthday);
            console.log("Gender: " + gender);
          }}
        >
          <input
            type="text"
            id="name"
            placeholder="first name"
            value={inputValueName}
            onChange={(event) => {
              setInputValueName(event.target.value);
            }}
            style={{ fontSize: 20 }}
          />
          <br></br>
          <input
            type="text"
            id="lastName"
            placeholder="last name"
            value={inputValueLastName}
            onChange={(event) => {
              setInputValueLastName(event.target.value);
            }}
            style={{ fontSize: 20 }}
          />
          <br></br>
          <input
            type="date"
            id="birthday"
            value={inputValueDateOfBirthday}
            onChange={(event) => {
              setInputValueDateOfBirthday(event.target.value);
            }}
            style={{ fontSize: 20 }}
          />
          <br></br>
          <div>
            <h3>My gender</h3>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />
            male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => setGender(e.target.value)}
            />
            female
            <input
              type="radio"
              name="gender"
              value="other :)"
              onChange={(e) => setGender(e.target.value)}
            />
            other
          </div>
          <br></br>
          <button
            style={{ fontSize: 40, color: "black", background: "purple" }}
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
