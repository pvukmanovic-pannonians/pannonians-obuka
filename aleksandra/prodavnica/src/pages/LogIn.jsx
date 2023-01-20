import { useState } from "react";
import axios from "axios";
import { addUser } from "../store/features/user";
import  { endpoints } from "../http/client";
import { useDispatch } from "react-redux";

export default function LogIn() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    async function postData () {
        const {data}= await axios.post(endpoints.INDEX, {username:username, password:password});
        dispatch(addUser(data))
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    console.log("Username", { username }, password, { password });

    return (
      <div >
        <form onSubmit={handleSubmit} className="logIn-form">
            <p>Log In</p>
            <label className="logIn-label">
                <input
                    className="logIn-input"
                    type="text"
                    value={username}
                    placeholder="username"
                    onChange={(event) => setUserName(event.target.value)}
                />
            </label>
            <br />
            <label>
                <input
                    className="logIn-input"
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <button 
                    className="logIn-button"
                    onClick={(e) => postData()} 
                    type="submit"> Log In
            </button>
        </form>
      </div>
    );
  };
