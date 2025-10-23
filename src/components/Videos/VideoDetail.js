import React, { useEffect, useState } from 'react';

import styles from './Styles/VideoDetail.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chapter from '../Chapter/Chapter';
import microIcon from '../../images/podcastPage/icons/microIcon.png';
import infoIcon from '../../images/podcastPage/icons/infoIcon.png';
import podChapterIcon from '../../images/podcastPage/icons/podChapters.png'




const VideoDetail = () => {
    const params = useParams();
    const id = params.id

    const [detailData , setDetailData] = useState({})
    const [chapterData , setChapterData] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/videos/${id}`)
        .then(response => {
            const data = response.data.data.video
            setDetailData(data)
            setChapterData(data.chapters)
        }
        ).catch(errors => console.log(errors))
        
    },[])


    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <img src={detailData.imageURL} className={styles.mainImg} alt="videoImage"/>
                <div className={styles.info}>
                    <p className={styles.title}>ویدیو {detailData.title}</p>
                    <span className={styles.coach}>
                        <img src={microIcon} alt="microIcon"/>
                        <p>سرپرست ویدیو : {detailData.coach}</p>
                    </span>
                    <span className={styles.text}>
                        <img src={infoIcon} alt="infoIcon"/>
                        <p>معرفی : {detailData.information}</p>
                    </span>
                    
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.chapterContainer}>
                    <span className={styles.chapterTitle}>
                        <img src={podChapterIcon} alt="chapterIcon"/>
                        <p>فصل ها</p>
                    </span>
                    <span className={styles.chapterList}>
                        {chapterData.map((chapter,index) => <Chapter key={index} chapterData={chapter} modelName = "video" index={index} ></Chapter>)}   
                    </span>
                    
                </div>
            </div>
            
                
        </div>

    );
};

export default  VideoDetail;