export default function LogIn() {
    return (
      <div>
        <form>
            <label>
                Username: 
                <input
                    className="flex username"
                    type="text"
                    placeholder="username"
                />
            </label>
            <br />
            <label>
                Password: 
                <input
                    className="username"
                    type="password"
                placeholder="password"
                />
            </label>
            <br />
            <button type="submit">Log In</button>
        </form>
      </div>
    );
  };
