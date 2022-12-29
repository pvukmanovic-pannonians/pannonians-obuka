export default function PanelOne () {
    return(
        <div>
            <p className="text-text">PayPal is for everyone who pays or gets paid.</p>
            <ul className="panelOne-list">
                <li className="panelOne-li">
                    <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/gb/en/home/woman_side_icon.jpeg" 
                         alt="view of the woman"/>
                    <h4>Individuals</h4>
                    <p className="panelOne-text">Find out why we have more than 200M active accounts worldwide.</p>
                    <button className="panelOne-button">Learn More</button>
                </li>
                <li className="panelOne-li">
                    <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/gb/en/home/pos_machine_icon.jpeg"
                         alt="view of the fiscal cash register"/>
                    <h4>Businesses</h4>
                    <p className="panelOne-text">Join more than 7 million businesses around the world offering PayPal.</p>
                    <button className="panelOne-button">Learn More</button>
                </li>
                <li className="panelOne-li">
                    <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/gb/en/home/shopping_bag_icon.jpeg" 
                         alt="view of a business bag"/>
                    <h4>Partners and developers</h4>
                    <p className="panelOne-text">Work with PayPal to offer your customers world class payment solutions.</p>
                    <button className="panelOne-button">Learn More</button>
                </li>
            </ul>
        </div>
    );
}