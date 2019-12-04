import React from 'react';
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import Stories from "./Stories";
import Booking from "./Booking";
import './sass/main.scss'

const App = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Features/>
            <Tours/>
            <Stories/>
            <Booking/>
        </div>);
};

export default App;