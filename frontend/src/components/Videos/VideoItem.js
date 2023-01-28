import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './Styles/VideoItem.module.css';




class VideoItem extends Component {

    
    render() {
        const {coach , id , coverImage , title} = this.props;

        
        
        return (
            <div className={styles.container}>
                <img src={coverImage} alt="VideoImage" className={styles.videoImg} />
                <span className={styles.videoTitle}><Link to={`/videos/${id}`}>{title}</Link></span>
                <span className={styles.videoCoach}>همراه با {coach}</span>
            </div>
        );
    }
}

export default VideoItem;