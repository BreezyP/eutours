import React from 'react';

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

const Heading = (props) => {

    return(
        <div>
            <h2 style={headingSecondary} className="heading-secondary u-margin-bottom-large">
                {props.title}
            </h2>
        </div>
    );

};

export default Heading;