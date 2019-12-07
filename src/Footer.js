import React from 'react';
import logo from './img/logo-green-2x.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="Full logo" className="footer__logo"/>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <AnchorLink className='footer__link' href='#'>Company</AnchorLink>
                            </li>
                            <li className="footer__item">
                                <AnchorLink className='footer__link' href='#'>Contact us</AnchorLink>
                            </li>
                            <li className="footer__item">
                                <AnchorLink className='footer__link' href='#'>Careers</AnchorLink>
                            </li>
                            <li className="footer__item">
                                <AnchorLink className='footer__link' href='#'>Privacy Policy</AnchorLink>
                            </li>
                            <li className="footer__item">
                                <AnchorLink className='footer__link' href='#'>Terms</AnchorLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Distinctio laborum maiores necessitatibus qui similique! Accusamus itaque quam quo
                        voluptas voluptates? A accusantium aut beatae consectetur eligendi eveniet nemo, sunt.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;