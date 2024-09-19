import React from 'react';
function Pricing() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6 pt-5'>
                    <h1 className='fs-2'> Unbeatable Pricing</h1>
                    <p className='pt-3'>We pioneered the concept of discount broking and price<br></br> transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{ textDecoration: "none" }}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                </div>

                <div className=' col-6 pt-5'>
                    <div className='d-flex flex-row mt-5 justify-content-between text-warning  mx-1' id='pricing'>
                        <h1 className='fs-2'> ₹0<p className='text-secondary fs-6 ' style={{ fontSize: "1%" }} >Free account opening</p>
                        </h1>
                        <h1 className='fs-2'> ₹0<h6 className='text-secondary fs-6'>Free equity delivery</h6></h1>
                        <h1 className='fs-2 '>₹20<h6 className='text-secondary fs-6'>Intraday and F&0</h6></h1>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pricing;