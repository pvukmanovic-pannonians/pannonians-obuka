export default function Footer() {
    return (
      <footer className="footer">
        <div> 
          <ul className="footer-list">
            <li className="footer-list-item">Help and Contact</li>
            <li className="footer-list-item">Fees</li>
            <li className="footer-list-item">Security</li>
            <li className="footer-list-item">Features</li>
            <li className="footer-list-item">Shop</li>
            <li className="footer-list-item">Feedback</li>
            <li className="footer-list-item-flag">
              <img className="footer-image" src="https://cdn-icons-png.flaticon.com/512/5373/5373290.png" 
                                            alt="Flag of country"/>
            </li>
          </ul>
          <hr className="footer-hr"></hr>
          <ul className="footer-list-second">
            <li className="footer-list-item-second">About</li>
            <li className="footer-list-item-second">Newsrooms</li>
            <li className="footer-list-item-second">Jobs</li>
            <li className="footer-list-item-second">Developers</li>
            <li className="footer-list-item-second-text">
              <p>©1999-{new Date().getFullYear()} All rights reserved.</p>
            </li>
            <li className="footer-list-item-second">Accessibility</li>
            <li className="footer-list-item-second">Privacy</li>
            <li className="footer-list-item-second">Legal</li>
          </ul>  
          <p className="footer-text">PayPal Pte. Ltd. (“3PL”) has applied for a license under the Singapore Payment Services 
            Act (“PS Act”) with the Monetary Authority of Singapore. During this statutory 
            transitional period, 3PL is operating under an exemption from holding a license 
            and is allowed to continue to provide specific payment services.
          </p>
        </div>
      </footer>
    );
  }
  