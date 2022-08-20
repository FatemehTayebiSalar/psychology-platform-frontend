import React from 'react';
import styles from "./Banner.module.css";
import bannerPsych from "../images/bannerPsych.jpg";
import bannerPod from "../images/bannerPod.jpg";
import playIcon from "../images/Icons/play.png";

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.hL1}>باوک</h2>
                <h2>همراه شما با یاری بهترین</h2>
                <h2 className={styles.hL3}>روانشناسان</h2>
                <div className={styles.detail}>
                    <span>We live in a world of knitting hhvgkhkjhgkhjgkjhgkhgkjhgjkhg</span>
                    <div className={styles.podImgContainer}>
                        <img src={playIcon} className={styles.playImg} alt="Banner" />
                        <img src={bannerPod} className={styles.podcastImg} alt="Banner" />       
                    </div>
                </div>
            </div>
            <img src={bannerPsych} alt="Banner" className={styles.psychImg}/>
        </div>
    );
};

export default Banner;