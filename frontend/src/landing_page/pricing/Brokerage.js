import React from 'react';
function Brokerage() {
    return (
        <div className='Container p-5 mb-5 '>
            <div className='row text-center' >

                <h1 className='fs-2 mt-5'>Open a Zerodha account</h1>
                <p className='mb-2 mt-3 '>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='mt-3 btn btn-primary ' style={{ width: "10%", margin: "0 auto" }}>Sign up for free</button>
            </div>
            <div className='row text-center p-5 mt-5'>
                <div className='col-6 mt-5 pt-5'>
                    <h4 style={{ color: "#53a8b6" }}>Brokerage Calculator</h4>
                    <ul className='text-muted ms-5 mt-5' style={{ textAlign: "left", fontSize: "75%", lineHeight: "2.0" }}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>

                </div>
                <div className='col-6 pt-5 mt-5'>
                    <h4 style={{ color: "#53a8b6" }}>List of Charges</h4>

                </div>
            </div>
        </div>
    );
}

export default Brokerage;