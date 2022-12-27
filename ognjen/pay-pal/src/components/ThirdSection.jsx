import { useState } from "react"
import Tab1 from "./Tab"
import Tab2 from "./Tab"
import Button from 'react-bootstrap/Button';    

export default function ThirdSection ({children}) {
    const [activeTab, setActiveTab] = useState('ForBuyers')
    const buyers = [
        {
            step: 1,
            img: 'https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/shared/send-receive-no-p2p/paypal_signup.png',
            desc: 'Sign up with just an email address and password.',
            id: 1
        },
        {
            step: 2,
            desc: 'Securely add your cards.',
            img: 'https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/shared/send-receive-no-p2p/add_ways_to_pay.png',
            id: 2
        },
        {
            step: 3,
            desc: 'Use the PayPal button to check out with just an email address and password.',
            img: 'https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/shared/send-receive-no-p2p/watches_world_checkout.png',
            id: 3
        }
    ]
    const sellers = [
        {
            step: 1,
            desc: 'Set up a business account.',
            img: 'https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/shared/send-receive-no-p2p/home/business_account_setup.png',
            id: 4
        },
        {
            step: 2,
            desc: 'Choose the features you want to start with. You can go back, change or add to them later.',
            img: 'https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/shared/send-receive-no-p2p/home/accept_payment_online_features.png',
            id: 5
        },
        {
            step: 3,
            desc: 'Integrate PayPal via a partner, a developer or by yourself.',
            img: 'https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/shared/send-receive-no-p2p/home/paypal_button_code.png',
            id: 6
        }
    ]
    return (
        <div className="section3">
            <h2 className="mt-5 pt-3">PayPal connects buyers and sellers.</h2>
            {/* <div className="d-flex">
                <a href="#" className="" selected onClick={() => {}}>For buyers</a>
                <a href="#" className="" onClick={() => {}}>For sellers</a>
            </div> */}
            <div>
            <ul className="tabLinks d-flex justify-content-center mt-4">
                <li onClick={() => {
                    setActiveTab('ForBuyers')
                }} className={activeTab === 'ForBuyers' ? "active" : 'boldLink'}>For buyers</li>
                <li onClick={() => {
                    setActiveTab('ForSellers')
                }} className={activeTab === 'ForSellers' ? "active" : 'boldLink'}>For sellers</li>
            </ul>
            <div className="d-flex">
                {/* <Tab arr={buyers}></Tab>  */}
                {activeTab === 'ForBuyers' ? <Tab1 arr={buyers}></Tab1> : <Tab2 arr={sellers}></Tab2>}
            </div> 
            </div>
            <Button className='mt-5 py-3 px-5' style={{borderRadius: '30px'}} variant="outline-primary">Learn More</Button>{' '} 
        </div>
    )
}