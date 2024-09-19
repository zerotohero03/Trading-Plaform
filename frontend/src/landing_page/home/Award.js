import React from 'react';
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mt-4 pt-1'>
                    <img src='media/images/largestBroker.svg' />

                </div>
                <div className='col-6 mt-5 '>
                    <h1 className='pb-3 fs-2'>largest stock broker in india</h1>
                    <p className='pt-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in.</p>
                    <div className='row'>
                        <div className='col-6 pt-3'>
                            <ul>
                                <li className='pt-3'>Future and Option </li>
                                <li className='pt-3'>Commodity and derivatives</li>
                                <li className='pt-3'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6 pt-3'>
                            <ul>
                                <li className='pt-3'>Stocks and IPOs</li>
                                <li className='pt-3'>DirectMutual funds</li>
                                <li className='pt-3'>Bonds and Goverment reg. bodies  </li>
                            </ul>

                        </div>

                    </div>
                </div>

            </div>
            <img className=' row text-center mt-5 p-5 ml-5' src='media/images/presslogos.png' alt='logo' style={{ width: "60%", margin: "0 auto" }} />
        </div>
    );
}

export default Awards;
