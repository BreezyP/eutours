import React from 'react';

const CardSimple = (props) => {
    return(
        <div className="feature-box">
            {props.icon}
            <h3 className="heading-tertiary u-margin-bottom-small">{props.title}</h3>
            <p className="feature-box__text">
                {props.paragraph}
            </p>
        </div>
    );
};

export default CardSimple;