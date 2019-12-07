import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {

    const renderLink = (event, link) =>{
        event.preventDefault();
        document.getElementById('navi-toggle').checked = false;
        document.getElementById(link).scrollIntoView({behavior: 'smooth', block: 'center'});
    };

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
                        <a className='navigation__link' onClick={(event) => renderLink(event, 'about')} href='#'>About Eutours</a>
                    </li>
                    <li className="navigation__item">
                        <a className='navigation__link' onClick={(event) => renderLink(event, 'features')} href='#'>Your benefits</a>
                    </li>
                    <li className="navigation__item">
                        <a className='navigation__link' onClick={(event) => renderLink(event, 'tours')} href='#'>Popular tours</a>
                    </li>
                    <li className="navigation__item">
                        <a className='navigation__link' onClick={(event) => renderLink(event, 'stories')} href='#'>Stories</a>
                    </li>
                    <li className="navigation__item">
                        <a className='navigation__link' onClick={(event) => renderLink(event, 'booking')} href='#'>Book Now</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
