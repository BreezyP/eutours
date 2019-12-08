import React from 'react';

const headingSecondary = {

};

const Heading = (props) => {

    return(
        <div>
            <h2 style={headingSecondary} className="heading-secondary">
                {props.title}
            </h2>
        </div>
    );

};

export default Heading;