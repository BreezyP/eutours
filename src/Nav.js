import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">
                    &nbsp;
                </span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <AnchorLink className='navigation__link' href='#'>About Eutours</AnchorLink>
                    </li>
                    <li className="navigation__item">
                        <AnchorLink className='navigation__link' href='#'>Your benefits</AnchorLink>
                    </li>
                    <li className="navigation__item">
                        <AnchorLink className='navigation__link' href='#'>Popular tours</AnchorLink>
                    </li>
                    <li className="navigation__item">
                        <AnchorLink className='navigation__link' href='#'>Stories</AnchorLink>
                    </li>
                    <li className="navigation__item">
                        <AnchorLink className='navigation__link' href='#'>Book Now</AnchorLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
