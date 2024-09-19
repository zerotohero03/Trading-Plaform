import React from 'react';
function Team() {
    return (
        <div className='container  >'>
            <div className='row d-flex justify-content-evenly ' >

                <div className='col-2 mt-5 mb-5 '>
                    <img className='rounded-circle ' src='media/images/Nikhil cfo.jpg' style={{ width: "90%" }}></img>
                    <h3 className='text-muted pt-2  fs-4 text-center me-3'>Nikhil Kamath</h3>
                    <h6 className='text-muted fs-6 text-center me-3' >Co-founder & CFO</h6>
                    <div class="btn-group ms-5">
                        <button class="btn dropdown-toggle text-center text-muted ms-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Bio
                        </button>
                        <ul class="dropdown-menu " >
                            <li>  Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.
                            </li>

                        </ul>

                    </div>
                    <div className='mt-5 pt-4'>

                        <img className='rounded-circle ' src='media/images/hanan.jpg' style={{ width: "90%" }}></img>
                        <h3 className='text-muted pt-2  fs-4 text-center me-3'>Hanan Delvi</h3>
                        <h6 className='text-muted fs-6 text-center  me-3 '>CCO</h6>
                        <div class="btn-group ms-5">
                            <button class="btn btn-sm dropdown-toggle text-center text-muted ms-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Bio
                            </button>
                            <ul class="dropdown-menu">
                                <li>  We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className='mt-5 pt-2'>
                        <img className='rounded-circle ' src='media/images/Austin.jpg' style={{ width: "90%" }}></img>
                        <h3 className='text-muted pt-2  fs-4 text-center me-3'>Austin Prakesh</h3>
                        <h6 className='text-muted fs-6 text-center  me-3 '>Director Strategy</h6>
                        <div class="btn-group ms-5">
                            <button class="btn btn-sm dropdown-toggle text-center text-muted ms-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Bio
                            </button>
                            <ul class="dropdown-menu">
                                <li> Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.
                                </li>

                            </ul>

                        </div>
                    </div>


                </div>
                <div className='col-2 mt-5'>
                    <img className='rounded-circle ' src='media/images/kailash.jpg' style={{ width: "90%" }}></img>
                    <h3 className='text-muted pt-2  fs-4  text-center  me-3'>Dr. Kailash Nadh</h3>
                    <h6 className='text-muted fs-6 text-center  me-3'>CTO</h6>
                    <div class="btn-group ms-5">
                        <button class="btn btn-sm dropdown-toggle text-center text-muted ms-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Bio
                        </button>
                        <ul class="dropdown-menu">
                            <li>  Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.
                            </li>

                        </ul>

                    </div>
                    <div className='mt-4'>

                        <img className='rounded-circle mt-5' src='media/images/seema.jpg' style={{ width: "90%" }}></img>
                        <h3 className='text-muted pt-2  fs-4 text-center  me-3'>Seema Patil</h3>
                        <h6 className='text-muted fs-6 text-center  me-3'>Director</h6>
                        <div class="btn-group ms-5">
                            <button class="btn btn-sm dropdown-toggle text-center text-muted ms-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Bio
                            </button>
                            <ul class="dropdown-menu">
                                <li>  Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>
                <div className='col-2 mt-5 '>
                    <img className='rounded-circle ' src='media/images/venu.jpg' style={{ width: "90%" }}></img>
                    <h3 className='text-muted pt-2  fs-4 text-center  me-3'>Venu Madhav</h3>
                    <h6 className='text-muted fs-6 text-center  me-3'>COO</h6>
                    <div class="btn-group ms-5">
                        <button class="btn btn-sm dropdown-toggle text-center text-muted ms-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Bio
                        </button>
                        <ul class="dropdown-menu">
                            <li>  Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.
                            </li>

                        </ul>

                    </div>
                    <div className='mt-5 pt-4'>

                        <img className='rounded-circle ' src='media/images/karthik.jpg' style={{ width: "90%" }}></img>
                        <h3 className='text-muted pt-2  fs-4 text-center  '>Karthik Rangappa</h3>
                        <h6 className='text-muted fs-6 text-center  me-3'>Chief of education</h6>
                        <div class="btn-group ms-5 ">
                            <button class="btn btn-sm dropdown-toggle text-center text-muted  ms-3  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Bio
                            </button>
                            <ul class="dropdown-menu">
                                <li>  Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
                                </li>

                            </ul>

                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
}

export default Team;