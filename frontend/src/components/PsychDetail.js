import React from 'react';

import PsychData from './PsychData.js';
import styles from './PsychDetail.module.css'


const PsychDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <img src={PsychData[1].image} />
                <div className={styles.tableContainer}>
                    <table className={styles.infoTable}  >
                            <thead>
                                <tr>
                                    <th><h2>{PsychData[1].name}</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th >تحصیلات</th>
                                    <td>{PsychData[1].degree}</td>
                                </tr>
                                <tr>
                                    <th > تخصص</th>
                                    <td>{PsychData[1].degree}</td>
                                </tr>
                                <tr>
                                    <th>آدرس</th>
                                    <td>{PsychData[1].address}</td>
                                </tr>
                                <tr>
                                    <th>شماره تلفن</th>
                                    <td>{PsychData[1].phoneNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.costTable}>
                            <tbody>
                                <tr>
                                    <th >هزینه ی هر جلسه</th>
                                    <td className={styles.cost}> {PsychData[1].visitAmount}تومان</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className={styles.reserveBtn}>رزرو وقت</button>
                </div>  
            </div>
            <hr/>
            <div className={styles.reservation}>
                <h2>رزرو وقت مشاوره</h2>

            </div>
                
        </div>

    );
};

export default PsychDetail;