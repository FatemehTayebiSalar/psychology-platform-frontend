import bannerPod from "../../images/bannerPod.jpg";
import playIcon from '../../images/podcastPage/icons/playEpisodeIcon.png';
import styles from './Styles/VideoEpisode.module.css';
import ReactVideoPlayer from 'react-player';


import React, { Component } from 'react';

class VideoEpisodes extends Component {
    render() {
        const {title,text,fileURL} = this.props;
        return (
            <div className={styles.container}>
                <div className = {styles.episodeTitle}>
                    <span >{title}</span>
                </div>
                <div className={styles.playerContainer}>
                    <ReactVideoPlayer className={styles.player} url={fileURL} controls width={"100%"}/>
                </div>
            
                <div className = {styles.episodeInfo}>
                    <span className = {styles.episodeCoach}>مجتبی شکوری</span>
                    
                    <span className = {styles.episodeText}>{text} </span>
    
                </div>

               
            </div>
        );
    }
}

export default VideoEpisodes;