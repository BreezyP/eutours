import React from 'react';
import Heading from "./components/Heading";
import Card from "./components/Card";

import seaCardPicture from './img/nat-5.jpg';

const sectionTours = {
    marginTop: '-11rem',
    backgroundColor: '#f7f7f7',
    padding: '25rem 0 50rem 0',
};

const seaCardPic = {
    backgroundImage: `linear-gradient(
                    to right bottom, rgba(255, 185, 0, .55), rgba(255, 119, 48, .55)), url(${seaCardPicture})`
};

const seaCardBack = {
    backgroundImage: `linear-gradient(to right bottom, #ffb900, #ff7730)`,
};

const seaCardTitle = 'The sea explorer';

const seaCardDetails = ['3 day tour', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: easy'];

const seaCardValue = '$297';



const Tours = () => {
    return(
        <section className="section-tours" style={sectionTours}>
            <div className="u-center-text">
                <Heading title="Most popular tours"/>
            </div>

            <div className="row">
                <div className="col-1-of-3">
                    <Card back={seaCardBack} pic={seaCardPic}
                          title={seaCardTitle} details={seaCardDetails}
                          price={seaCardValue}/>
                </div>
                <div className="col-1-of-3">
                    col-1-of-3
                </div>
                <div className="col-1-of-3">
                    col-1-of-3
                </div>
            </div>
        </section>
    );
};

export default Tours;