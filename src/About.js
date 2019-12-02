import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Heading from "./components/Heading";

import nat1 from './img/nat-1-large.jpg'
import nat2 from './img/nat-2-large.jpg'
import nat3 from './img/nat-3-large.jpg'


const sectionAbout = {
    backgroundColor: '#f7f7f7',
    padding: '25rem 0',
    marginTop: '-20vh',

};

const headingTertiary = {
    fontSize: '2rem',
    fontWeight: 700,
    textTransform: 'uppercase',
};

const About = () => {
    return(
        <div>
            <section style={sectionAbout} className="section-about">
                <div className="u-center-text ">
                    <Heading title="Exciting tours for adventurous people"/>
                </div>

                <div className="row">
                    <div className="col-1-of-2 ">
                        <h3 style={headingTertiary} className="u-margin-bottom-small">You're going to fall in love with nature</h3>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut fuga hic in
                            incidunt, natus perferendis porro rerum ut voluptatibus!</p>

                        <h3 style={headingTertiary} className="u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                            cumque et nostrum, obcaecati perspiciatis porro possimus praesentium
                            provident repudiandae rerum.</p>

                        <AnchorLink className='btn-text' href='#'>Learn more &rarr;</AnchorLink>

                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={nat1} alt="Nature Photo 1" className="composition__photo composition__photo--p1"/>
                            <img src={nat2} alt="Nature Photo 2" className="composition__photo composition__photo--p2"/>
                            <img src={nat3} alt="Nature Photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;