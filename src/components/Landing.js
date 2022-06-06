import React from 'react';
import Banner from "./Banner.js"
import Footer from './Footer.js';
import Items from './Items.js';

const Landing = () => {
    return (
        <div>
            <Banner />
            <Items />
            <Footer />
        </div>
    );
};

export default Landing;