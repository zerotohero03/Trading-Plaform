import React from 'react';
function Footer() {
    return (
        <footer style={{ backgroundColor: "#F8F8F8" }}>
            <div className='container border-top mt-5 ' >
                <div className='row mt-5 p-5'>
                    <div className='col-3 ' >
                        <img src='media/images/logo.svg' style={{ width: "40%" }} />
                        <p className='mt-2 text-muted'><i class="fa-regular fa-copyright"></i>  2010 - 2024, <br></br>Zerodha Broking Ltd.<br></br>

                            All rights reserved.</p>

                        <i class="fa-brands fa-x-twitter "></i>
                        <i class="fa-brands fa-facebook  mx-5 mb-3 " style={{ height: "10%" }}></i>
                        <i class="fa-brands fa-instagram mx-4 mt-2"></i>
                        <i class="fa-brands fa-linkedin mx-4 mt-4"></i><br></br>
                        <div className=''></div>
                        <i class="fa-brands fa-youtube mx-4 mt-2">
                        </i><i class="fa-brands fa-square-whatsapp mx-4"></i>
                        <i class="fa-brands fa-telegram mx-4"></i>


                    </div>
                    <div className='col-3 '>
                        <h2 className='fs-3'>Company</h2>
                        <p className='mt-3'>About</p>
                        <p>Products</p>
                        <p>Pricing</p>
                        <p>Referral programme</p>
                        <p>Careers</p>
                        <p>Zerodha.tech</p>
                        <p>Press & media</p>
                        <p>Zerodha Cares(CSR)</p>

                    </div>
                    <div className='col-3 '>
                        <h1 className='fs-3'>Support</h1>
                        <p className='mt-3'>Contact us</p>
                        <p>Support portal</p>
                        <p>Z-Connect blog</p>
                        <p> List of charges</p>
                        <p>Downloads & resources</p>
                        <p>Videos</p>
                        <p>Market overview</p>
                        <p>How to file a complaint?</p>
                        <p> Status of your complaints</p>
                    </div>
                    <div className='col-3'>
                        <h1 className='fs-3'>Accounts</h1>
                        <p className='mt-3'>Open an account</p>
                        <p> Fund transfer</p>
                    </div>
                    <p className='footer-paragraph text-muted'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF <br></br> <br></br>


                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances<br></br><br></br>

                        Smart Online Dispute Resolution | Grievances Redressal Mechanism<br></br><br></br>

                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br></br><br></br>

                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br></br><br></br>

                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.<br></br><br></br></p>

                </div>
                <div className='col d-flex justify-content-evenly ' id='footer-links'>
                    <p>NSE</p>
                    <p>BSE​</p>
                    <p>MCX</p>
                    <p>Terms and condition</p>
                    <p>Policies and procedures</p>
                    <p>Privacy Policies</p>
                    <p>Disclosure</p>
                    <p>for investor's attention</p>
                    <p>Investor charter</p>

                </div>

            </div>
        </footer>
    );
}

export default Footer;