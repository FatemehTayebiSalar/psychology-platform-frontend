import React from 'react';
// import Banner from "./Banner.js"
// import Footer from '../Footer.js';
// import Categories from '../Categories/Categories.js';
// import Slider from '../Slider/Slider.js';
import Banner from './Banner.js';
import Services from './Services.js';

const Landing = () => {
    return (
        <div >
            {/* <Slider />
            <Categories /> */}
            <Banner />
            <Services />
        </div>
    );
};

export default Landing;