
export default function Footer() {
    return (
      <footer className="footer">
        <div> 
          <ul className="footer-list">
            <li className="footer-list-first">This is my first application of this type, please understand...</li>
            <li className="footer-list-item-flag">
              <img className="footer-image" src="https://cdn-icons-png.flaticon.com/512/5373/5373290.png" 
                                            alt="Flag of country"/>
            </li>
          </ul>
          <hr className="footer-hr"></hr>
          <ul className="footer-list-second">
            <li className="footer-list-item-second">Made by NaNa</li>
            <li className="footer-list-item-second-text">
              <p>©{new Date().getFullYear()} All rights reserved.</p>
            </li>
          </ul>
        </div>
      </footer>
    );
  }