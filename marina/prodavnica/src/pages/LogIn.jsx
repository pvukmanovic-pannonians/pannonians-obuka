import { useState } from "react";
import {useNavigate}  from "react-router-dom";
import axios from "axios";
import { addUser } from "../store/features/user";
import { endpoints } from "../http/client";
import { useDispatch, useSelector } from "react-redux";


export default function LogIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const users = useSelector((state) => state.user)
  console.log('lista usera', users)

  async function postData() {
    await axios.post(endpoints.INDEX, {
      username: username,
      password: password,
    }).then((response) => dispatch(addUser(response.data)));
    if(users)
    navigate('/store');
    else alert('user is not registered')
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  console.log("Username", { username }, password, { password });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          className="flex username"
          type="text"
          value={username}
          placeholder="username"
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          className="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button onClick={(e) => postData()} type="submit">
        Login
      </button>
    </form>
  );
}
