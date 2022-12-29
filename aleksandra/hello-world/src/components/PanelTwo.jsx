export default function PanelTwo () {
    return(
        <div className="panelTwo">
            <p className="panelTwo-text-text">PayPal connects buyers and sellers.</p>
            <div className="panelTwo-content">
                <ul className="panelTwo-list1">
                    <li className="panelTwo-li1">For buyers</li>
                    <li className="panelTwo-li1a">For sellers</li>
                </ul>
                <ul className="panelTwo-list2">
                    <li className="panelTwo-li2">
                        <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/shared/send-receive-no-p2p/paypal_signup.png" 
                             alt="xxx"/>
                        <p className="panelTwo-text">Sign up with just an email address and password.</p>
                    </li>
                    <li className="panelTwo-li2">
                        <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/shared/send-receive-no-p2p/add_ways_to_pay.png"
                             alt="xxx"/>
                        <p className="panelTwo-text">Securely add your cards.</p>
                    </li>
                    <li className="panelTwo-li2">
                        <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/shared/send-receive-no-p2p/watches_world_checkout.png" 
                             alt="xxx"/>
                        <p className="panelTwo-text">Use the PayPal button to check out with just an email address and password.</p>
                    </li>
                </ul>
                <button className="panelTwo-button">Learn More</button>
            </div>
        </div>
    );
}