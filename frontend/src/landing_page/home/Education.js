import React from 'react';
function Education() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row mb-5'>
                <div className='col-6'>
                    <img src='media/images/education.svg' />
                </div>

                <div className='col-6 pt-5'>
                    <h1 className='fs-4'>Free and open market education</h1>
                    <p className='pt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{ textDecoration: "none" }}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    <p className='pt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a className='primary' href='' style={{ textDecoration: "none" }}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>



                </div>
            </div>
        </div>

    );
}

export default Education;
