import React from 'react';
function Hero() {
    return (
        <div className='container'>
            <div className='row text-center  mt-5 pt-5 mb-5 border-bottom'>
                <div className='mt-5 mb-5 '>
                    <h1>Pricing</h1>
                    <h5 className='mt-4 mb-5 pb-5'> Free equity investments and flat ₹20 intraday and F&O trades</h5>
                </div>
            </div>
            <div className='row text-center p-5 border-bottom'>
                <div className='col-4 '>
                    <img src='media/images/pricingEquity.svg' style={{ width: "70%" }}></img>
                    <h1 className='fs-2'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 '>
                    <img src='media/images/intradayTrades.svg' style={{ width: "70%" }}></img>
                    <h1 className='fs-2'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 mb-5 pb-5'>
                    <img src='media/images/pricingEquity.svg' style={{ width: "70%" }} ></img>
                    <h1 className='fs-2'>Free direct MF</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
            </div>
        </div >
    );
}

export default Hero;