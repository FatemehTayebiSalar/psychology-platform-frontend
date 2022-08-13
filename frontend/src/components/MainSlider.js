import mainSlider from './Slider/mainSlider'

import React from 'react';
import Slider from './Slider/Slider';

const MainSlider = () => {
    return (
        <div>
            <Slider dataSlider = {mainSlider}/>
        </div>
    );
};

export default MainSlider;