import React, {useState , useEffect} from 'react';

import styles from './Styles/Videos.module.css';
import axios from 'axios';
import videoBanner1 from '../../images/videoPage/videoBanner1.jpg'

import videoBanner2 from '../../images/videoPage/videoBanner2.jpg';
import videoBanner3 from '../../images/videoPage/videoBanner3.jpg';
import playIcon from '../../images/videoPage/icons/playIcon.png';
import yootubeIcon from '../../images/videoPage/icons/youtubeIcon.png';
import vimeoIcon from '../../images/videoPage/icons/vimeoIcon.png';
import VideoEpisodes from './VideoEpisdes';
import VideoItem from './VideoItem';





const Videos = () => {
    const [videosData , setVideosData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/videos")
        .then(response => {
            const data = response.data.data.videos
            setVideosData(data)
        }
        ).catch(errors => console.log(errors))
        
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.bannerVideo}>
                <div className={styles.recentInfo}>
                    <h1 className={styles.hL1}>باوک</h1>
                    <h1 className={styles.hL3}>ویدیوها</h1>
                    <span className={styles.newEpisode}>
                        <h4> جدیدترین قسمت ویدیو رادیو راه منتشر شد</h4>
                        <span>در این قسمت با مجتبی شکوری همراه خواهیم شد و "نامه به پدر" را می شنویم </span>
                        <button className={styles.playButton}>
                            <span>پخش</span>
                            <img src={playIcon} alt="playIcon"></img>
                        </button>
                    </span>
                     
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.videoImg}>
                        <img src={videoBanner1}  alt="VideoBanner" /> 
                    </div>
                    
                    <div className={styles.imgs}>
                        <img src={videoBanner2} className={styles.imgcol1} alt="VideoBanner" /> 
                        <img src={videoBanner3} className={styles.imgcol2} alt="VideoBanner" /> 
                    </div>
                </div>
            </div>
            <div className={styles.dataContainer}>
                <div className={styles.icons}>
                    <span className={styles.youtube}>
                        <span>YouTube</span>
                        <img src={yootubeIcon} alt="youtubeIcon"></img>
                    </span>
                    <span className={styles.vimeo}>
                        <span>Vimeo</span>
                        <img src={vimeoIcon} alt="vimeoIcon"></img>
                    </span>
                </div>
                <span className={styles.title}>جدید ترین و محبوب ترین ویدیو ها</span>
                <div className={styles.newEpisodeDetail}>
                    <VideoEpisodes className={styles.newEpisode} />
                </div>
                <div className={styles.itemContainer}>
                    {videosData.map(item => <VideoItem title={item.title} id={item.id} key={item.id} coverImage={item.imageURL} narrator={item.coach}/>)}
                </div>
            </div>
            
        </div>
    );
};

export default Videos;