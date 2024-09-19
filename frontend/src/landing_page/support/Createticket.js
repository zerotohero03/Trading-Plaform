import React from 'react';
function Createticket() {
    return (
        <div className='container '>
            <div className='row p-5'>
                <div>
                    <h5>To create a ticket, select a relevant topic</h5>
                </div>
                <div className='col-4 p-5'>
                    <div style={{ lineHeight: "2.2" }}>
                        <h5><i class="fa-solid fa-user-plus"></i>   Account Opening</h5>
                        <div className='ms-3 mt-4' style={{ color: "#0092ca" }}>
                            <a>Getting started</a><br></br>
                            <a>Online</a><br></br>
                            <a>Offline</a><br></br>
                            <a>Charges</a><br></br>
                            <a>Company, Partnership and HUF</a><br></br>
                            <a>Non Resident Indian (NRI)</a>
                        </div>
                    </div>
                    <div style={{ lineHeight: "2.2" }}>
                        <h5 className='mt-5'><i class="fa-solid fa-wallet"></i>  Funds</h5>
                        <div className='ms-3 mt-4 ' style={{ color: "#0092ca" }}>
                            <a>Fund withdrawal</a><br></br>
                            <a> Adding funds</a><br></br>
                            <a> Adding bank accounts</a><br></br>
                            <a>eMandates</a>
                        </div>
                    </div>

                </div>
                <div className='col-4 p-5'>
                    <div style={{ lineHeight: "2.2" }}>
                        <h5><i class="fa-solid fa-user"></i>  Your Zerodha Account</h5>
                        <div className='ms-3 mt-4' style={{ color: "#0092ca" }}>
                            <a>Login credentials</a><br></br>
                            <a>Your Profile</a><br></br>
                            <a>Account modification and segment addition</a><br></br>
                            <a>CMR & DP ID</a><br></br>
                            <a>Nomination</a><br></br>
                            <a>Transfer and conversion of shares</a>
                        </div>
                    </div>
                    <div style={{ lineHeight: "2.2" }}>
                        <h5 className='mt-3' ><i class="fa-solid fa-hurricane"></i>  Console</h5>
                        <div className='ms-3 mt-4' style={{ color: "#0092ca" }}>
                            <a>IPO</a><br></br>
                            <a> Portfolio</a><br></br>
                            <a>Funds statement</a><br></br>
                            <a>Profile</a><br></br>
                            <a>Reports</a><br></br>
                            <a> Referral program</a>
                        </div>


                    </div>
                </div>
                <div className='col-4 p-5'>
                    <div style={{ lineHeight: "2.2" }}>
                        <h5 ><i class="fa-regular fa-chart-bar"></i>  Trading and Markets</h5>
                        <div className='ms-3 mt-4' style={{ color: "#0092ca" }}>
                            <a>Trading FAQs</a><br></br>
                            <a>Kite</a><br></br>
                            <a>Margins</a><br></br>
                            <a>Product and order types</a><br></br>
                            <a>Corporate actions</a><br></br>
                            <a>Kite features</a>
                        </div>
                    </div>
                    <div style={{ lineHeight: "2.2" }}>
                        <h5 className='mt-5' ><i class="fa-solid fa-coins"></i>  Coin</h5>
                        <div className='ms-3 mt-4' style={{ color: "#0092ca" }}>
                            <a>Understanding mutual funds and Coin</a><br></br>
                            <a>Coin app</a><br></br>
                            <a>Coin web</a><br></br>
                            <a>Transactions and reports</a><br></br>
                            <a>  National Pension Scheme (NPS)</a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Createticket;