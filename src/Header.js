import React from 'react';
import logo from "./img/logo-white.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';



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
                    <AnchorLink offset='-170' className='btn btn--white btn-animated' href='#tours'>discover our tours </AnchorLink>
                </div>
            </header>
        </div>
    );

};

export default Header;