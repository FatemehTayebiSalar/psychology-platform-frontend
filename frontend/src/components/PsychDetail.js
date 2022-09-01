import React from 'react';

import PsychData from './PsychData.js';
import styles from './PsychDetail.module.css';
import { Link } from 'react-router-dom';


const PsychDetail = () => {
    return (
        <div className={styles.container}>
            <p>پروفایل درمانگر</p>
            <div className={styles.head}>
                <div className={styles.tableContainer}>
                    <table className={styles.infoTable}  >
                            <thead>
                                <tr>
                                    <th><h2>{PsychData[2].name}</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th >تحصیلات</th>
                                    <td>{PsychData[2].degree}</td>
                                </tr>
                                <tr>
                                    <th > تخصص</th>
                                    <td>{PsychData[2].degree}</td>
                                </tr>
                                <tr>
                                    <th>آدرس</th>
                                    <td>{PsychData[2].address}</td>
                                </tr>
                                <tr>
                                    <th>شماره تلفن</th>
                                    <td>{PsychData[2].phoneNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.costTable}>
                            <tbody>
                                <tr>
                                    <th >هزینه ی هر جلسه</th>
                                    <td className={styles.cost}> {PsychData[2].visitAmount}تومان</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className={styles.reserveBtn}>رزرو وقت</button>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.mainImg}>
                        <span>{PsychData[2].name}</span>
                        <img src={PsychData[2].image}  />
                    </div>
                    <div className={styles.arrows}>

                            <span className={styles.right}>
                                <span/>
                                <i><Link to={`/psychs`} className={styles.rightArrow} /></i>
                            </span>
                
                            <span className={styles.left}>
                                <span/>
                                <i><Link to={`/psychs`} className={styles.leftArrow} /></i>
                            </span>
                    </div>
                    <img src={PsychData[3].image} className={styles.nextImg} />
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