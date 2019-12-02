import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Card = (props) => {

    const renderDetails = () => {
        const newArr = [];

        props.details.forEach(detail => newArr.push(<li>{detail}</li>));

        return(newArr);
    };

    return (
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture" style={props.pic}/>

                <h4 className="card__heading">
                    <span className="card__heading--span" style={props.back}>
                        {props.title}
                    </span>
                </h4>

                <div className="card__details">
                    <ul>
                        {renderDetails()}
                    </ul>
                </div>
            </div>
            <div className="card__side card__side--back" style={props.back}>
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">{props.price}</p>
                    </div>
                    <AnchorLink style={{marginTop: '1rem'}} className='btn btn-animated' href='#'>Buy it now! </AnchorLink>

                </div>
            </div>
        </div>
    );
};

export default Card;