import React from 'react';
function Universe() {
    return (
        <div className='container'>
            <div className='row '>
                <div className='text-center pt-5 mt-5'>
                    <h5>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
                    <h1 className='pt-5 mt-5'>The Zerodha Universe</h1>
                    <p className='mt-4  pb-5'>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className='row d-flex justify-content-evenly  '>
                    <div className='col-4'>
                        <div className='text-center'>
                            <img className=' mt-5' src='media/images/zerodhaFundhouse.png' style={{ width: "60%" }}></img>
                            <p className=' mt-3 text-muted'>Our Asset management venture <br></br> that is creating simple and transparent index <br></br> funds to help you save for your goals.</p>
                        </div>
                        <div className='text-center'>
                            <img className=' mt-5' src='media/images/streakLogo.png' style={{ width: "50%" }}></img>
                            <p className=' mt-3 text-muted'>Systematic trading platform.<br></br> that allows you to create and backtest <br></br> strategies without coding.</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='text-center'>
                            <img className=' mt-5 ' src='media/images/sensibullLogo.svg' style={{ width: "60%" }}></img>
                            <p className=' mt-3 text-muted'>Options trading platform that lets you <br></br> create strategies, analyze positions, and examine <br></br>data points like open interest, FII/DII, and more.</p>
                        </div>
                        <div className='text-center pt-4'>
                            <img className=' mt-5' src='media/images/smallcaseLogo.png' style={{ width: "60%" }}></img>
                            <p className=' mt-3 text-muted'>Thematic investing platform <br></br> that helps you invest in diversified <br></br>baskets of stocks on ETFs.</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='text-center'>
                            <img className=' mt-5' src='media/images/tijori.svg' style={{ width: "48%" }}></img>
                            <p className=' mt-3 text-muted'>Investment research platform <br></br>that offers detailed insights on stocks,<br></br> sectors, supply chains, and more.</p>
                        </div>
                        <div className='text-center'>
                            <img className=' mt-5' src='media/images/dittoLogo.png' style={{ width: "45%" }}></img>
                            <p className=' mt-3 text-muted'>Personalized advice on life<br></br> and health insurance. No spam <br></br> and no mis-selling.</p>
                        </div >
                    </div >
                </div >
                <button className='mt-5 mb-5 btn btn-primary' style={{ width: "12%", margin: "0 auto" }}>Sign up for free</button>
            </div >

        </div >
    );
}

export default Universe;