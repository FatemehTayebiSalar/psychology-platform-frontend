import React, { useState } from 'react';
import createSliderContentData from '../../shared/createSliderData';
import WeekParts from './WeekParts';

const SlideContent = () => {
    const result = createSliderContentData();
    const [data , setData] = useState([result[0] , result[1]])
    
    return (
        
        <div>

            {data.map(item => <WeekParts dateNumber = {item.dateNumber} dayName = {item.dayName}/>)}
            
        </div>
    );
};



export default SlideContent;