export default function Navbar({}) {
  return (
    <div className="nav">
      <ul>
        <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png" />
        <li>
          <li>PERSONAL</li>
          <li>BUSINESS</li>
          <li>PARTNERS AND DEVELOPERS</li>
        </li>
        <button class="navbar-btn login-btn login">Log In</button>
        <button class="navbar-btn signup-btn signup">Sign Up</button>
      </ul>
    </div>
  );
}
