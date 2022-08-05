import React from 'react';
import styles from "./Banner.module.css";
import banner from "../images/banner.png";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="Banner" />
            <div className={styles.textContainer}>

                <h1>اسم سایت</h1>
                <p>
                    توضیح راجع به  <span>محتویات سایت</span>
                </p>
            </div>
            
            
        </div>
    );
};

export default Banner;