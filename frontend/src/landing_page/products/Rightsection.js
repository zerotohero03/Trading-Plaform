import React from 'react';
function Rightsection({ productName, productDescription, learnMore, imageURL }) {
    return (
        <div className='container '>
            <div className='row '>
                <div className='col-1'></div>
                <div className='col-4 mt-5 pt-5  ' >
                    <div className='row mt-5 pt-5'>
                        <h1 className=' fs-2 mt-5'  >{productName}</h1>
                        <h6 className='mt-4 text-muted mb-4  ' style={{ lineHeight: "2.0" }}>{productDescription}</h6>
                        <a href={learnMore}>Learnmore</a>


                    </div>

                </div>
                <div className='col-1'></div>
                <div className='col-6 ' >
                    <img className='mt-3' src={imageURL} style={{ height: "100%", paddingTop: "10%" }}></img>

                </div>

            </div>
        </div >

    );
}

export default Rightsection;