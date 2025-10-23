import React, { useEffect, useState } from 'react';

import styles from './Styles/PsychDetail.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const PsychDetail = (props) => {
    const params = useParams();
    const id = params.id

    const [detailData , setDetailData] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:5000/psychologists/${id}`)
        .then(response => {
            const data = response.data.data.psychologist
            setDetailData(data)
        }
        ).catch(errors => console.log(errors))
        
    },[])


    return (
        <div className={styles.container}>
            <p>پروفایل درمانگر</p>
            <div className={styles.head}>
                <div className={styles.tableContainer}>
                    <table className={styles.infoTable}  >
                            <thead>
                                <tr>
                                    <th><h2>{detailData.name}</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th >تحصیلات</th>
                                    <td>{detailData.degree}</td>
                                </tr>
                                <tr>
                                    <th>آدرس</th>
                                    <td>{detailData.address}</td>
                                </tr>
                                <tr>
                                    <th>شماره تلفن</th>
                                    <td>{detailData.phoneNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.costTable}>
                            <tbody>
                                <tr>
                                    <th >هزینه ی هر جلسه</th>
                                    <td className={styles.cost}> {detailData.visitAmount}تومان</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className={styles.reserveBtn}>رزرو وقت</button>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.mainImg}>
                        <span>{detailData.name}</span>
                        <img src={detailData.imageURL}  alt="currentImg"/>
                    </div>
                    
                    <img src={detailData.imageURL} className={styles.nextImg} alt="nextImg"/>
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