import React from 'react';

function Hero() {
    return (
        <div className='Container p-5 mb-5'>
            <div className='row text-center' >
                <img src='media/images/heroimage1.png' alt='heroimage' className='mb-5' style={{ width: "100%", height: "20%" }} />
                <h1 className='fs-2'>Invest in everything</h1>
                <p className='mb-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='mt-2 btn btn-primary' style={{ width: "10%", margin: "0 auto" }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;