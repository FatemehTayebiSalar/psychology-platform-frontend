import React from 'react';
// import Banner from "./Banner.js"
import Footer from './Footer.js';
import Items from './Items.js';
import Slider from './Slider/Slider.js';

const Landing = () => {
    return (
        <div>
            <Slider/>
            <Items />
            <Footer />
        </div>
    );
};

export default Landing;