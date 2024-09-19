import React from 'react';
function Leftsection({ imageURL, productName, productDescription, tryDemo, learnMore, appStore, googleStore }) {
    return (
        <div className='container pt-5 mt-5'>
            <div className="row ">

                <div className='col-6 ' >
                    <img className='ms-5 ps-5' src={imageURL} alt='kite' style={{ width: "90%" }}></img>
                </div>
                <div className='col-2'></div>
                <div className='col-4 pe-5 mt-4 ' >
                    <h1 className='mt-3 fs-2'>{productName}</h1>
                    <h6 className='text-muted mt-3 ' style={{ lineHeight: "2.0" }}>{productDescription}</h6>
                    <div className='mt-4'>
                        <a href={tryDemo} >tryDemo</a>
                        <a className='ms-5' href={learnMore} >learnMore</a>
                    </div>
                    <div className='mt-4'>
                        <a href={appStore} ><img src='media\images\appstoreBadge.svg'></img></a>
                        <a className='ms-5' href={googleStore} ><img src='media\images\googlePlayBadge.svg'></img></a>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Leftsection;