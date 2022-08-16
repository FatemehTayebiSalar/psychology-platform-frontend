import React from 'react';

import PsychData from './PsychData.js';
import styles from './PsychDetail.module.css'


const PsychDetail = (props) => {
    const id = props.match.params.id;
    return (
        <div className={styles.container}>
            {/* <h1>{PsychData[id].name}</h1>
            <div className={styles.DetailContainer}>
                <img src={PsychData[id].image} />
                <div className={styles.info}>
                    <div>
                        <h4>تحصیلات: </h4>
                        <h4>PsychData[id].degree</h4>
                    </div>
                </div>
            </div> */}

            
            
        </div>

    );
};

export default PsychDetail;