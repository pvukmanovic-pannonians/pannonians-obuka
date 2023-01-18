import { useState } from "react";
import { useSelector } from "react-redux"
import axios from 'axios'
import { useDispatch } from "react-redux";
import { currentUser } from "../store/features/users";

export default function LoginForm () {
    const [errorMessages, setErrorMessage] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()
    const dispatch = useDispatch()

    const renderErrorMessage = (name) => {
        name === errorMessages.name && (<div className="error">{errorMessages.message}</div>)
    }
    const usersDatabase = useSelector(state => state.users.users)
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
    const handleLogin = async (event) => {
        event.preventDefault()

        const { uname, password } = document.forms[0]
        console.log('event', event.target);
        const userData = usersDatabase.find(user => user.username === uname.value)
        dispatch(currentUser(userData))
        await axios.post('https://dummyjson.com/auth/login', {
            username: userName,
            password: userPassword
        })
        
        if (userData) {
            if (userData.password !== password.value) {
                setErrorMessage({name: 'password', message: errors.pass})
            } else {
                setIsSubmitted(true)
            }
        } else {
            setErrorMessage({name: 'uname', message: errors.uname})
        }
    }

    return  (
        <div className="Form">
            {isSubmitted ? <div>User succesfully loged in</div> :  <form className="loginForm" onSubmit={handleLogin}>
                <div className="formSection">
                    <label>Username</label>
                    <input type="text" name="uname" value={userName} onChange={e => setUserName(e.target.value)} className="formInputField" required/>
                    {renderErrorMessage('uname')}
                </div>
                <div className="formSection">
                    <label>Password</label>
                    <input type="password" name="password" value={userPassword} onChange={e => setUserPassword(e.target.value)} className="formInputField"  required/>
                    {renderErrorMessage('password')}
                </div>
                <div className="">
                    <input type="submit" className="submitButton" />
                </div>
            </form>}
        </div>
    )
}