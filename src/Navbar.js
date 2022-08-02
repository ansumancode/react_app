import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../src/images/logo.svg';

export default function Navbar() {

    return (
        <>
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className='col-10 mx-auto'>

                        <nav className="navbar navbar-expand-lg bg-white">
                            <div className="container-fluid">

                                <img src={logo} className="navbar-brand" alt="logo" style={{ width: "100px" }} />
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/About" className="nav-link" >About</NavLink>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

