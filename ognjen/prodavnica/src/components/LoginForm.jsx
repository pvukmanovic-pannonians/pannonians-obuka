import { useState } from "react";
export default function LoginForm () {
    const [errorMessages, setErrorMessage] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errorMessage = (name) => {
        name === errorMessage.name && (<div className="error">{errorMessage.message}</div>)
    }
    const usersDatabase = []
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
    const handleLogin = async (event) => {
        event.preventDefault()

        const { uname, pass } = document.forms[0]
        const userData = usersDatabase.find(user => user.username === uname.value)
        
        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessage({name: 'pass', message: errors.pass})
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
                    <input type="text" name="uname" className="formInputField"/>
                    {errorMessage('uname')}
                </div>
                <div className="formSection">
                    <label>Password</label>
                    <input type="passowrd" name="pass" className="formInputField" />
                    {errorMessage('pass')}
                </div>
                <div className="">
                    <input type="submit" className="submitButton" />
                </div>
            </form>}
        </div>
    )
}