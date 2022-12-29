export default function Footer({}) {
  return (
    <footer className="footer">
      <div class="footer-top">
        <ul class="footer-list">
          <li>Help and Contact</li>
          <li>Fees</li>
          <li>Security</li>
          <li>Features</li>
          <li>Shop</li>
          <li>Feedback</li>
        </ul>
        <img src="https://cdn-icons-png.flaticon.com/512/5373/5373290.png" />
      </div>
      <div class="footer-bottom">
        <ul className="footer-bottom list one">
          <li>About</li>
          <li>Newsroom</li>
          <li>Jobs</li>
          <li>Developers</li>
        </ul>
        <ul className="footer-bottom list two">
          <li> © 1999–2022 All rights reserved.</li>
          <li> Accessibility</li>
          <li>Privacy</li>
          <li>Legal</li>
        </ul>

        <p>
          PayPal Pte. Ltd. (“3PL”) has applied for a license under the Singapore
          Payment Services Act (“PS Act”) with the Monetary Authority of
          Singapore. During this statutory transitional period, 3PL is operating
          under an
          <br></br> exemption from holding a license and is allowed to continue
          to provide specific payment services.
        </p>
      </div>
    </footer>
  );
}
