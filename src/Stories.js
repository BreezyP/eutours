import React from 'react';
import Heading from "./components/Heading";
import Story from "./components/Story";
import picOne from './img/smile.jpg';
import picTwo from './img/smile-2.jpg'
import mp4 from './img/video.mp4';
import webm from './img/video.webm';
import AnchorLink from "react-anchor-link-smooth-scroll";


const storyOne = {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
        "Adipisci blanditiis enim esse fugiat id, ipsum, possimus " +
        "quaerat quasi quis rem reprehenderit rerum unde velit vero " +
        "voluptatem! Animi at beatae blanditiis commodi dolores eaque " +
        "eius enim facere impedit itaque iure maxime mollitia nihil odio " +
        "officiis quam, quibusdam quis totam voluptas voluptatibus.",
    pic: picOne,
    name: "Mary Smith",
    heading: "I had the best week ever with my family",
};

const storyTwo = {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
        "Adipisci blanditiis enim esse fugiat id, ipsum, possimus " +
        "quaerat quasi quis rem reprehenderit rerum unde velit vero " +
        "voluptatem! Animi at beatae blanditiis commodi dolores eaque " +
        "eius enim facere impedit itaque iure maxime mollitia nihil odio " +
        "officiis quam, quibusdam quis totam voluptas voluptatibus.",
    pic: picTwo,
    name: "Lillian Rose",
    heading: "WOW! My life is completely different now",
};

const Stories = () => {
    return (
        <section className="section-stories" id="stories">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay="true" muted="true" loop="true">
                    <source src={mp4} type="video/mp4"/>
                    <source src={webm} type="video/webm"/>
                </video>
            </div>

            <div className="u-center-text u-margin-bottom-huge">
                <Heading title="We make people genuinely happy"/>
            </div>

            <div className="row">
                <Story text={storyOne.text} pic={storyOne.pic} name={storyOne.name} heading={storyOne.heading}/>
                <Story text={storyTwo.text} pic={storyTwo.pic} name={storyTwo.name} heading={storyTwo.heading}/>
            </div>
            <div className="u-center-text">
                <AnchorLink style={{marginTop: '5rem'}} className='btn-text' href='#'>Read all stories &rarr;</AnchorLink>
            </div>
        </section>
    );
};

export default Stories;