import React, { useEffect, useState } from 'react';

import styles from './Styles/PodcastDetail.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chapter from '../Chapter/Chapter';
import microIcon from '../../images/podcastPage/icons/microIcon.png';
import infoIcon from '../../images/podcastPage/icons/infoIcon.png';
import podChapterIcon from '../../images/podcastPage/icons/podChapters.png'




const PodcastDetail = () => {
    const params = useParams();
    const id = params.id

    const [detailData , setDetailData] = useState({})
    const [chapterData , setChapterData] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/podcasts/${id}`)
        .then(response => {
            const data = response.data.data.podcast
            setDetailData(data)
            setChapterData(data.chapters)
        }
        ).catch(errors => console.log(errors))
        
    },[])


    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <img src={detailData.imageURL} className={styles.mainImg}/>
                <div className={styles.info}>
                    <p className={styles.title}>پادکست {detailData.title}</p>
                    <span className={styles.narrator}>
                        <img src={microIcon} />
                        <p>گوینده : {detailData.narrator}</p>
                    </span>
                    <span className={styles.text}>
                        <img src={infoIcon} />
                        <p>معرفی : {detailData.information}</p>
                    </span>
                    
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.chapterContainer}>
                    <span className={styles.chapterTitle}>
                        <img src={podChapterIcon}/>
                        <p>فصل ها</p>
                    </span>
                    <span className={styles.chapterList}>
                        {chapterData.map((chapter,index) => <Chapter key={index} chapterData={chapter} modelName = "podcast" index={index} ></Chapter>)}   
                    </span>
                    
                </div>
            </div>
            
                
        </div>

    );
};

export default  PodcastDetail;