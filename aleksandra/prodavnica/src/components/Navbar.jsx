import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <div className="nav">
        <ul className="navbar">
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/LogIn"> Log In </Link></li>
        </ul>
      </div>
    );
};
