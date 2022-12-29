export default function Navbar() {
    return (
      <div className="nav">
        <ul className="navbar">
          <li className="navbar-logo">
            <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
                 alt="PayPal logo"/>
          </li>
          <li className="navbar-menu">PERSONAL</li>
          <li className="navbar-menu">BUSINESS</li>
          <li className="navbar-menu">PARTNERS AND DEVELOPERS</li>
        </ul>
        <ul className="navbar-buttons">
          <li><button className="nav-button-one">Log In</button></li>
          <li><button className="nav-button-two">Sign Up</button></li>
        </ul>
      </div>
    );
  }