import React from 'react';
function Hero() {
    return (
        <div style={{ backgroundColor: "#387ed1", color: "white" }}>
            <div className='container p-5'>
                <div className='row p-5 mt-3' >
                    <div className='col-6 mb-3'>
                        <h4  >Support Portal</h4>
                        <h5 className='mt-5'>Search for an answer or browse help topics to create a<br></br> ticket</h5>
                        <div className='mt-5'>
                            <form action="">
                                <div class="input-group mb-4">
                                    <input type="search" placeholder="Eg:How do i activate F&O,why my order getting rejected..." aria-describedby="button-addon5" class="form-control"></input>
                                    <div class="input-group-append">
                                        <button id="button-addon5" type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='d-flex justify-content-between mt-5'>
                            <h6 style={{ textDecoration: "underline", textUnderlineOffset: "50%" }}>Track account opening</h6>
                            <h6 style={{ textDecoration: "underline", textUnderlineOffset: "50%" }} >Track segment activation</h6>
                            <h6 style={{ textDecoration: "underline", textUnderlineOffset: "50%" }} > Intraday margins</h6>


                        </div>
                        <div className='mt-5' style={{ textDecoration: "underline", textUnderlineOffset: "50%" }}>
                            <h6  >Kite user manual</h6>
                        </div>

                    </div>
                    <div className='col-6 ps-5'>
                        <h6 style={{ textDecoration: "underline", textUnderlineOffset: "50%", textAlign: "right" }} >Track tickets</h6>
                        <h5 className='mt-5 ms-4'>Featured</h5>
                        <p className='mt-3 ms-4'>Due to the settlement holiday on Monday, your account<br></br> balance will not include the following credits on 16<br></br> September, 2024:</p>
                        <div className=''>
                            <ul style={{ textAlign: "left" }}>
                                <li>Intraday profits made in the Equity segment on Sept<br></br> 13, 2024.</li>
                                <li>Credits from trades made in NFO, Currency, and<br></br> Commodity derivatives on Sept 13, 2024. This will<br></br> include options premium credits, futures M2M profits,<br></br> etc. Read more.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;