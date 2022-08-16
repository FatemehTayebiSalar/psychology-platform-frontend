import React from 'react';
import Item from './Item';
import PsychData from './PsychData.js';
import styles from './Psychologists.module.css'


const Psychologits = () => {
    return (
        <div className={styles.container}>
            <h1>درمانگران</h1>
            <div className={styles.itemContainer}>
                {PsychData.map(item => <Item size={"250px"} id={item.id} key={item.id} image={item.image} title={item.name}/>)}
            </div>
        </div>
    );
};

export default Psychologits;