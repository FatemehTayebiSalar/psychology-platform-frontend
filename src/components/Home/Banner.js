import React from 'react';
import styles from "./Styles/Banner.module.css";
import bannerPsych from "../../images/bannerPsych.jpg";
import bannerPod from "../../images/bannerPod.jpg";
import playIcon from "../../images/Icons/play.png";

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.hL1}>باوک</h1>
                <h1> همراه شما با یاری بهترین و با تجربه ترین</h1>
                <h1 className={styles.hL3}>روانشناسان</h1>
                <div className={styles.detail}>
                    <div className={styles.textDetail}>
                        <h3 className={styles.topics}>سخن &middot; نگاه &middot; شنود</h3>
                        <span>با ما همراه شو و با مهم ترین حواس بخشوده شده به انسان به آرامش روحت نزدیک شو. </span>
                        <span>باوک محیطی امن برای سخن گفتن با انسان هایی متبحر راجع به آنچه درون شما می گذرد.</span>
                        <button>برگزیدن همراه</button>
                    </div>
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