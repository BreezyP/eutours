import React from 'react';

const sectionAbout = {
    backgroundColor: '#f7f7f7',
    padding: '25rem 0',
    marginTop: '-20vh',

};

const headingSecondary = {
    fontSize: '3.5rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    backgroundImage: `linear-gradient(to right, #BA45D5, #00A3B4)`,
    display: 'inline-block',
    webkitBackgroundClip: 'text',
    color: 'transparent',
    letterSpacing: '2px',
};

const About = () => {
    return(
        <div>
            <section style={sectionAbout} className="section-about">
                <div className="u-center-text">
                    <h2 style={headingSecondary} className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default About;