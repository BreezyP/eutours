import React from 'react';
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import './sass/main.scss'

const App = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Features/>
        </div>);
};

export default App;