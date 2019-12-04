import React from 'react';


const Story = (props) => {
    return (
        <div className="story">
            <figure className="story__shape">
                <img src={props.pic} className="story__image"/>
                <figcaption className="story__caption">
                    {props.name}
                </figcaption>
            </figure>
            <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                    {props.heading}
                </h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Story;