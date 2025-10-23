import React, {useState , useEffect} from 'react';

import styles from './Styles/Podcasts.module.css';
import axios from 'axios';
import podBanner1 from '../../images/podcastPage/podcastBanner1.jpg';
import podBanner2 from '../../images/podcastPage/podcastBanner2.jpg';
import podBanner3 from '../../images/podcastPage/podcastBanner3.jpg';
import playIcon from '../../images/podcastPage/icons/playIcon(white).png';
import googleIcon from '../../images/podcastPage/icons/googlePod.png';
import appleIcon from '../../images/podcastPage/icons/applePod.png';
import PodcastItem from './PodcastItem';
import PodEpisode from './PodEpisodes';





const Podcasts = () => {
    const [podcastsData , setPodcastsData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/podcasts")
        .then(response => {
            const data = response.data.data.podcasts
            setPodcastsData(data)
        }
        ).catch(errors => console.log(errors))
        
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.bannerPodcast}>
                <div className={styles.recentInfo}>
                    <h1 className={styles.hL1}>باوک</h1>
                    <h1 className={styles.hL3}>پادکست ها</h1>
                    <span className={styles.newEpisode}>
                        <h4> جدیدترین قسمت پادکست رادیو راه منتشر شد</h4>
                        <span>در این قسمت با مجتبی شکوری همراه خواهیم شد و "نامه به پدر" را می شنویم </span>
                        <button className={styles.playButton}>
                            <span>پخش</span>
                            <img src={playIcon} alt="playIcon"></img>
                        </button>
                    </span>
                     
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.podcastImg}>
                        <img src={podBanner1}  alt="PodcastBanner" /> 
                    </div>
                    
                    <div className={styles.imgs}>
                        <img src={podBanner2} className={styles.imgcol1} alt="PodcastBanner" /> 
                        <img src={podBanner3} className={styles.imgcol2} alt="PodcastBanner" /> 
                    </div>
                </div>
            </div>
            <div className={styles.dataContainer}>
                <div className={styles.icons}>
                    <span className={styles.googlePod}>
                        <span>Google Podcasts</span>
                        <img src={googleIcon} alt="googleIcon"></img>
                    </span>
                    <span className={styles.applePod}>
                        <span>Apple Podcasts</span>
                        <img src={appleIcon} alt="appleIcon"></img>
                    </span>
                </div>
                <span className={styles.title}>جدید ترین و محبوب ترین پادکست ها</span>
                <div className={styles.newEpisodeDetail}>
                    <PodEpisode />
                </div>
                <div></div>
                <div className={styles.itemContainer}>
                    {podcastsData.map(item => <PodcastItem title={item.title} id={item.id} key={item.id} coverImage={item.imageURL} narrator={item.narrator}/>)}
                </div>
            </div>
            
        </div>
    );
};

export default Podcasts;