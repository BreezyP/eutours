import React from 'react';
import Card from "./components/Card";
import { IoIosGlobe } from 'react-icons/io';
import { GiCompass, GiNestedHearts } from 'react-icons/gi';
import { FaMapMarkedAlt } from 'react-icons/fa';

const Features = () => {
    let firstCardTitle = "Explore the world";
    let firstCardParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid corporis facilis!";
    let firstCardIcon = <IoIosGlobe className="feature-box__icon"/>;

    let secondCardTitle = "Meet nature";
    let secondCardParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid corporis facilis!";
    let secondCardIcon = <GiCompass className="feature-box__icon"/>;

    let thirdCardTitle = "find your way";
    let thirdCardParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid corporis facilis!";
    let thirdCardIcon = <FaMapMarkedAlt className="feature-box__icon"/>;

    let fourthCardTitle = "live a healthier life";
    let fourthCardParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid corporis facilis!";
    let fourthCardIcon = <GiNestedHearts className="feature-box__icon"/>;



    return(
        <section className="section-features">
            <div className="row">
                <div className="col-1-of-4">
                    <Card title={firstCardTitle} paragraph={firstCardParagraph} icon={firstCardIcon}/>
                </div>
                <div className="col-1-of-4">
                    <Card title={secondCardTitle} paragraph={secondCardParagraph} icon={secondCardIcon}/>
                </div>
                <div className="col-1-of-4">
                    <Card title={thirdCardTitle} paragraph={thirdCardParagraph} icon={thirdCardIcon}/>
                </div>
                <div className="col-1-of-4">
                    <Card title={fourthCardTitle} paragraph={fourthCardParagraph} icon={fourthCardIcon}/>
                </div>
            </div>
        </section>
    );
};

export default Features;