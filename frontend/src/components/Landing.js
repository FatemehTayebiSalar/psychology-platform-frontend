import React from 'react';
// import Banner from "./Banner.js"
import Footer from './Footer.js';
import Categories from './Categories.js';
import MainSlider from './MainSlider.js';

const Landing = () => {
    return (
        <div>
            <MainSlider/>
            <Categories />
            <Footer />
        </div>
    );
};

export default Landing;