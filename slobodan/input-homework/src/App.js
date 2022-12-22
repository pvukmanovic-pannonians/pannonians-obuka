import { useEffect, useState } from "react";
import "./App.css";

function App() {
  /* Pravim use state za submitable i isImputValid i objekat koji prihvata
      trazene parametre */

  const [submittable, setSubmitable] = useState(false);
  const [isImputValid, setisImputValid] = useState(true);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
  });
  // Pravim use efect da setujem parametre koji vrse proveru da li je imput validan //
  useEffect(() => {
    if (
      person.firstName !== "" &&
      person.lastName !== "" &&
      person.dateOfBirth !== ""
    ) {
      setSubmitable(true);
      setisImputValid(true);
    } else {
      setSubmitable(false);
      setisImputValid(false);
    }
  }, [person]);
  // Funkcija koju cu iskoristit da setujem datum da moze da bude samo u proslosti //
  var disabledDates = () => {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    return yyyy + "-" + mm + "-" + dd;
  };
  /* Sledi ubacivanje imputa za svaki property person-a, takodje je ubacen 
jedan span koji ce nestati kad je forma uredno popunjena */
  return (
    <div className="App">
      <header className="App-header">
        <h1>Input information</h1>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(person);
          }}
        >
          {!isImputValid && (
            <span style={{ color: "red" }}>Please enter all informations</span>
          )}
          <br></br>
          <input
            type="text"
            id="firstName"
            placeholder="first name"
            value={person.firstName}
            onChange={(e) => {
              setPerson({
                ...person,
                firstName: e.target.value,
              });
            }}
            style={{ fontSize: 20 }}
          />
          <br></br>
          <input
            type="text"
            id="lastName"
            placeholder="last name"
            value={person.lastName}
            onChange={(e) => {
              setPerson({
                ...person,
                lastName: e.target.value,
              });
            }}
            style={{ fontSize: 20 }}
          />
          <br></br>
          date of birth
          <br></br>
          <input
            type="date"
            id="dateOfBirth"
            placeholder="date of birth"
            value={person.dateOfBirth}
            max={disabledDates()}
            onChange={(e) => {
              setPerson({
                ...person,
                dateOfBirth: e.target.value,
              });
            }}
            style={{ fontSize: 20 }}
          />
          <br></br>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked
              onChange={(e) => {
                setPerson({
                  ...person,
                  gender: "male",
                });
              }}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              male
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={(e) => {
                setPerson({
                  ...person,
                  gender: "female",
                });
              }}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              female
            </label>
            <div>
              <button
                disabled={!submittable}
                style={{ fontSize: 30, marginTop: 20 }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
