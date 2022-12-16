import { useEffect, useState } from 'react';
import './App.css';

function validate_mail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function App() {
  const [inputValueName, setInputValueName] = useState();
  const [inputValueLastName, setInputValueLastName] = useState();
  const [inputValueDateOfBirthday, setInputValueDateOfBirthday] = useState();
  const [inputValueGender, setInputValueGender] = useState();
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>Me :)</h1>
       <form
        onSubmit={(event) =>{
          event.preventDefault();
          console.log("Moje ime je:" + inputValueName);
          console.log("Moje prezime je:" + inputValueLastName);
          console.log("Moj datum rodjenja je:" + inputValueDateOfBirthday);
          console.log("Moj pol je:" + inputValueGender);
       }}>

       <label for="name">First name: </label>
       <input 
          type="text"
          id="name"
          placeholder="first name"
          value={inputValueName}
          onChange={(event) => {
            setInputValueName(event.target.value);
          }} 
          style={{fontSize: 40}}
        />
        <br></br>
        <label for="lastName">Last name: </label>
        <input 
          type="text"
          id="lastName"
          placeholder="last name"
          value={inputValueLastName}
          onChange={(event) => {
            setInputValueLastName(event.target.value);
          }} 
          style={{fontSize: 40}}
        />
        <br></br>
        <label for="birthday">Birthday: </label>
        <input 
          type="date"
          id="birthday"
          value={inputValueDateOfBirthday}
          onChange={(event) => {
            setInputValueDateOfBirthday(event.target.value);
          }} 
          style={{fontSize: 40}}
        />
        <br></br>
        <label for="gender">Gender: </label>
        <input 
          type="text"
          id="gender"
          placeholder="male/female"
          value={inputValueGender}
          onChange={(event) => {
            setInputValueGender(event.target.value);
          }} 
          style={{fontSize: 40}}
        />
        <br></br>
        <button style={{fontSize: 40}} type="submit"> Submit</button>
       </form>
      </header>
    </div>
  );
}

export default App;
