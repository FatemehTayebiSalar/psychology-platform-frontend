import React from 'react';
import Item from '../Item';
import NewestData from './CatData/PsychoCatData';
import styles from './Styles/PsychoCat.module.css'


const PsychologistCategory = () => {
    return (
        <div className={styles.container}>
            { <h1>متخصصین باوک</h1> }
            <div className={styles.itemContainer}>
                {NewestData.map(item => <Item size={"200px"} id={item.id} key={item.id} image={item.image} title={item.title}/>)}
            </div>
        </div>
    );
};

export default PsychologistCategory;