import React from 'react';
function Stats() {
    return (
        <div className='container p-5'>
            <div className='row '>
                <div className='col-6 pt-5 '>
                    <h1 className='pt-5 fs-2 mb-5 '>Trust with Confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='pt-2 text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-4 pt-3'>No spam or gimmicks</h2>
                    <p className='pt-2 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4 pt-3'>The Zerodha universe</h2>
                    <p className='pt-2 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4 pt-3'>Do better with money</h2>
                    <p className='pt-2 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-6 pt-1'>
                    <img className='pt-5' src='media/images/ecosystem.png' alt='stats' style={{ width: "100%" }} />
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{ textDecoration: "none" }}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{ textDecoration: "none" }}>Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Stats;