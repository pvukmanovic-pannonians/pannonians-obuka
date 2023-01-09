export default function FourthSection ({children}) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center py-5 blue">
            <h2 className="pb-4 pt-2">Join 200M active PayPal accounts worldwide.</h2>
            <div className="d-flex flex-row px-5 mt-4 py-4">
                <div className="col-6 px-2">
                    <h3>Safer and protected</h3>
                    <p>Shop with peace of mind. We don’t share your full financial information with sellers. And PayPal Buyer Protection covers your eligible purchases if they don’t show up or match their description.</p>
                    <a href="#" className="section4-links">More about security</a>
                </div>
                <div className="col-6 px-2">
                    <h3>Mostly free, always upfront</h3>
                    <p>It’s free to open a PayPal account and buy something using PayPal unless it involves a currency conversion. There may be fees for other transactions.</p>
                    <a href="#" className="mt-auto section4-links">More about fees</a>
                </div>
            </div>
        </div>  
    )
}