import React from 'react';
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import './sass/main.scss'

const App = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Features/>
            <Tours/>
        </div>);
};

export default App;