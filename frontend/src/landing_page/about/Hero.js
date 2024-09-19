import React from 'react';
function Hero() {
    return (
        <div className='container ' style={{ marginTop: "10%" }}>
            <div className='row text-center fs-4 '>
                <h3>We pioneered the discount broking model in India.<br></br>
                    Now, we are breaking ground with our technology.
                </h3>
            </div>
            <div className='row border-top pt-5 mt-5 mb-5'>
                <div className='col-2'></div>
                <div className='col-4 mt-3 text-muted ' style={{ lineHeight: "1.9" }}>
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                    <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>

                </div>
                <div className='col-4 mt-3 text-muted ' style={{ lineHeight: "1.9" }}>
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
                </div>
                <div className='col-2'></div>

            </div>
            <div className='container pb-5'>
                <h1 className=' mb-5 fs-2 ms-5' style={{ paddingLeft: "47%" }}> People</h1>
                <div className='row '>
                    <div className='col-2'></div>
                    <div className='col-4 '>
                        <img className="rounded-circle ms-1" src='media\images\nithinKamath.jpg' style={{ width: "70%" }}></img>
                        <h3 className='text-muted mt-4 ms-5'>Nithin Kamath</h3>
                        <h6 className='text-muted mt-4 ' style={{ marginLeft: "20%" }}>Founder, CEO</h6>
                    </div>
                    <div className='col-4 me-5 '>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on Homepage / TradingQnA / Twitter</p>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>

        </div>
    );
}

export default Hero;