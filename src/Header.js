import React from 'react';
import './Header.css';
import logo from "./img/logo-white.png";



const Header = () => {

    return(
        <div>
            <header className="header">
                <div className="logo-box">
                    <img src={logo} alt="Logo" className="logo"/>
                </div>
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Outdoors</span>
                        <span className="heading-primary-sub">Is Where life happens</span>
                    </h1>
                </div>
            </header>
        </div>
    );

};

export default Header;