export default function Footer({children}) {
    return (
        <div className=" py-5 px-3 pb-3">
            <div className="d-flex align-items-center">
                <ul style={{textDecoration: 'none', listStyle: 'none', color: '#666666', fontWeight: 'bold'}} className="d-flex ps-0">
                    <li className="pe-2">Help and Contact</li>
                    <li className="px-1">Fees</li>
                    <li className="px-1">Security</li>
                    <li className="px-1">Features</li>
                    <li className="px-1">Shop</li>
                    <li className="px-1">Feedback</li>
                </ul>
            </div>
            <hr style={{borderBottom: '1px solid #d8d8d8', marginTop: '-10px'}} />
            <div className="d-flex justify-content-between">
                <ul style={{textDecoration: 'none', listStyle: 'none', color: '#666666', fontSize: '12px', cursor: 'pointer'}} className="d-flex ps-0">
                    <li className="pe-2">About</li>
                    <li className="px-1">Newsroom</li>
                    <li className="px-1">Jobs</li>
                    <li className="px-1">Developers</li>
                </ul>
                <ul style={{textDecoration: 'none', listStyle: 'none', color: '#666666', fontSize: '12px'}} className="d-flex">
                    <li className="px-1">© 1999–2022 All rights reserved.</li>
                    <li className="px-1">Accessibility</li>
                    <li className="px-1">Privacy</li>
                    <li className="ps-2">Legal</li>
                </ul>
            </div>
            <p style={{fontSize: '12px', color: '#2c2e2f'}}>PayPal Pte. Ltd. (“3PL”) has applied for a license under the Singapore Payment Services Act (“PS Act”) with the Monetary Authority of Singapore. During this statutory transitional period, 3PL is operating under an exemption from holding a license and is allowed to continue to provide specific payment services.</p>
        </div>
    )
}