import React from 'react';
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import Stories from "./Stories";
import Booking from "./Booking";
import Footer from "./Footer";
import Nav from "./Nav";
import Popup from "./Popup";
import './sass/main.scss'

const App = () => {
    return (
        <div>
            <Nav/>
            <Header/>
            <About/>
            <Features/>
            <Tours/>
            <Stories/>
            <Booking/>
            <Footer/>
            <Popup/>
        </div>);
};

export default App;