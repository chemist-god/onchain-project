import React from "react";
import './navbar.css'
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
            <nav  className="navbar">
                <img src={logo} alt="lgo" className="logo"/>
                <div className="desktopMenu">

                </div>
                    <button className="connect-wallet">Connect Wallet</button>
                
            </nav>
    )
}

export default Navbar