import React from 'react';
import CardSimple from "./components/CardSimple";
import { IoIosGlobe } from 'react-icons/io';
import { GiCompass, GiNestedHearts } from 'react-icons/gi';
import { FaMapMarkedAlt } from 'react-icons/fa';

const Features = () => {
    const firstCardTitle = "Explore the world";
    const firstCardParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing " +
        "elit. Adipisci, alias aspernatur eos hic iure mollitia!";
    const firstCardIcon = <IoIosGlobe className="feature-box__icon"/>;

    const secondCardTitle = "Meet nature";
    const secondCardParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing " +
        "elit. Ad alias eveniet illo laboriosam odio voluptatem!";
    const secondCardIcon = <GiCompass className="feature-box__icon"/>;

    const thirdCardTitle = "find your way";
    const thirdCardParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing " +
        "elit. Accusamus adipisci consequatur dolore error quae";
    const thirdCardIcon = <FaMapMarkedAlt className="feature-box__icon"/>;

    const fourthCardTitle = "live a healthier life";
    const fourthCardParagraph = "Lorem ipsum dolor sit amet, consectetur adipisicing " +
        "elit. Consequuntur eum iusto, necessitatibus provident soluta";
    const fourthCardIcon = <GiNestedHearts className="feature-box__icon"/>;



    return(
        <section className="section-features" id="features">
            <div className="row">
                <div className="col-1-of-4">
                    <CardSimple title={firstCardTitle} paragraph={firstCardParagraph} icon={firstCardIcon}/>
                </div>
                <div className="col-1-of-4">
                    <CardSimple title={secondCardTitle} paragraph={secondCardParagraph} icon={secondCardIcon}/>
                </div>
                <div className="col-1-of-4">
                    <CardSimple title={thirdCardTitle} paragraph={thirdCardParagraph} icon={thirdCardIcon}/>
                </div>
                <div className="col-1-of-4">
                    <CardSimple title={fourthCardTitle} paragraph={fourthCardParagraph} icon={fourthCardIcon}/>
                </div>
            </div>
        </section>
    );
};

export default Features;