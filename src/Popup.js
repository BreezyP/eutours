import React from 'react';
import ReactDOM from 'react-dom';
import photoOne from './img/nat-8.jpg';
import photoTwo from './img/nat-9.jpg';
import Heading from "./components/Heading";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Popup = (props) => {

    return ReactDOM.createPortal(
        <div className="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src={photoOne} alt="Tour photo" className="popup__img"/>
                    <img src={photoTwo} alt="Tour photo" className="popup__img"/>

                </div>
                <div className="popup__right">
                    <a href='#' onClick={props.onClick} className="popup__close">&times;</a>
                    <div className="u-margin-bottom-medium">
                        <Heading title="Start booking now"/>
                    </div>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p className="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi assumenda deserunt ea, iste natus nihil odio odit, perspiciatis, quae repellendus reprehenderit tempora veritatis? Accusamus adipisci deserunt dolor excepturi laboriosam non, quibusdam reiciendis temporibus totam vitae. At delectus, dicta enim, facilis maiores maxime modi odio odit optio, placeat porro possimus sit vero! Accusamus at, aut dignissimos doloremque harum id illo itaque minima nam nihil, numquam obcaecati optio praesentium quod tempora veritatis voluptas, voluptates. Atque dignissimos dolore ea est eveniet expedita explicabo fugit in, natus necessitatibus sed soluta totam veritatis vero voluptates. Aperiam autem ex ipsam, iste minus pariatur quos tempora?
                    </p>
                    <AnchorLink className='btn btn--blue' href='#'>Book now</AnchorLink>

                </div>
            </div>
        </div>,
        document.querySelector('#popup')
    );
};

export default Popup;