import React from 'react';
import Item from './Item';
import PsychData from './PsychData.js';
import styles from './Psychologists.module.css'


const PsychDetail = () => {
    return (
        <div className={styles.container}>
            <h1>{PsychData[1].name}</h1>
            <div className={styles.DetailContainer}>
                <img src={PSychData[1].image} />
                <div className={styles.info}>

                </div>
            </div>
        </div>
    );
};

export default PsychDetail;