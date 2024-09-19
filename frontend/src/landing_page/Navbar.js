import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div id='whole'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar fixed-top border-b " style={{ backgroundColor: "#fff" }} >
                <Link to="/" >
                    <img src='media/images/zerologo.svg' style={{ height: "10%", width: "60%", marginLeft: "100%" }} /></Link>
                <div className="container-fluid bs-primary " >

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 bs-primary  ">
                        <li class="nav-item  ">
                            <Link class="nav-link active" to="/signup">Sign up</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link active" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/product">Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="support">Support</Link>
                        </li>


                    </ul>


                </div>
            </nav>

        </div>

    );
}

export default Navbar;