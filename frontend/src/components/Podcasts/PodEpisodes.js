import bannerPod from "../../images/bannerPod.jpg";
import playIcon from '../../images/podcastPage/icons/playEpisodeIcon.png';
import styles from './Styles/PodEpisode.module.css';
import ReactAudioPlayer from 'react-audio-player'


import React, { Component } from 'react';

class PodEpisodes extends Component {
    constructor(props){
        super(props) 
        this.state = {isShown : false }
    }

    clickHandler = () =>{
        this.setState({isShown: true});
    };
    render() {
        const {title,text,fileURL} = this.props;
        return (
            <div className={styles.container}>
                <span className={styles.imgContainer}>
                    <img src = {bannerPod} alt = "EpisodeImg"></img>
                    <span className={styles.detail}>
                        <span className={styles.time}>12:00</span>
                        <img src={playIcon} className={styles.playIcon} onClick={this.clickHandler}></img>
                    </span>
                </span>
                
                
                <div className = {styles.episodeInfo}>
                    <span className = {styles.episodeNarrator}>مجتبی شکوری</span>
                    <span className = {styles.episodeTitle}>{title}</span>
                    <span className = {styles.episodeText}>{text} </span>
                    {this.state.isShown && (
                         <ReactAudioPlayer className={styles.player} src={fileURL} controls autoPlay/>
                    )}
                </div>

               
            </div>
        );
    }
}

export default PodEpisodes;