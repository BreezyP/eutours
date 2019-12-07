import React from 'react';
import Heading from "./components/Heading";



const Booking = () => {

    return (
        <section className="section-book" id="booking">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <div className="u-margin-bottom-medium">
                            <Heading title="Start booking now"/>
                        </div>
                        <form action="#" className="form">
                            <div className="form__group">
                                <input id="name" type="text" className="form__input" placeholder="Full Name" required="true"/>
                                <label htmlFor="name" className="form__label">Full name</label>
                            </div>

                            <div className="form__group">
                                <input id="email" type="email" className="form__input" placeholder="Email" required="true"/>
                                <label htmlFor="email" className="form__label">Email address</label>
                            </div>

                            <div className="form__group">
                                <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="small" name="size"/>
                                    <label htmlFor="small" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Small tour group</label>
                                </div>

                                <div className="form__radio-group u-margin-bottom-medium">
                                    <input type="radio" className="form__radio-input" id="large" name="size"/>
                                    <label htmlFor="large" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Large tour group</label>
                                </div>


                                <div className="form__group ">
                                    <button className="btn btn--blue">Next step &rarr;</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;