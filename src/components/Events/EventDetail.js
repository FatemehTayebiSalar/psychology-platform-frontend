import React, { useEffect, useState } from 'react';

import styles from './Styles/EventDetail.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const EventDetail = (props) => {
    const params = useParams();
    const id = params.id

    const [detailData , setDetailData] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:5000/events/${id}`)
        .then(response => {
            const data = response.data.data.event
            setDetailData(data)
        }
        ).catch(errors => console.log(errors))
        
    },[])


    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.tableContainer}>
                    <table className={styles.infoTable}  >
                            <thead>
                                <tr>
                                    <th><h2>{detailData.title}</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th >توضیحات رویداد</th>
                                    <td>{detailData.information}</td>
                                </tr>
                                <tr>
                                    <th > برگزار کننده</th>
                                    <td>{detailData.organizer}</td>
                                </tr>
                                <tr>
                                    <th>تاریخ</th>
                                    <td>{detailData.date}</td>
                                </tr>
                                <tr>
                                    <th>آدرس</th>
                                    <td>{detailData.address}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles.costTable}>
                            <tbody>
                                <tr>
                                    <th >هزینه شرکت در رویداد</th>
                                    <td className={styles.cost}> {detailData.price}تومان</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className={styles.reserveBtn}>ثبت نام</button>
                </div>
                <div className={styles.imgContainer}>
                    
                    <img src={detailData.imageURL} alt="episodeImg" />
                    
                </div>  
            </div>
            <hr/>
                
        </div>

    );
};

export default  EventDetail;