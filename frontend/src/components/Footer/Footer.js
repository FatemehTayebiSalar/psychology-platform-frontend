import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css"
import img1 from '../../images/licenses/creative-startup.png';
import img2 from '../../images/licenses/logo-computer.png';
import img3 from '../../images/licenses/logo-electronic.png';
import img4 from '../../images/licenses/logo-validation.png';
import icon1 from '../../images/Icons/instagram.png';
import icon2 from '../../images/Icons/linkedin.png';
import icon3 from '../../images/Icons/facebook.png';

const Footer = () => {
    return (
        <div className={styles.container}>
            <hr />
            <div className={styles.footerItems}>
                <div className={styles.header}>
                    <h1>Logo</h1>
                    <button>بازگشت به بالا</button>
                </div>
                <div className={styles.details}>
                    <div className={styles.info}>
                        <h3>باوک : همراه شما در روزهای دشوار</h3>
                        <p>باوک یک وبسایت یاری دهنده بر پایه علم روانشناسی است که روی ارتباط شما عزیزان با روانشناسان و انتشار کلاس های ویدیـویی و پادکست ها و انواع رویداد های مربوطه متمرکز است. شما می توانید در دسته بندی های متنوعی مثل ورزش در خانه، روانشناسی، توسعه فردی، آشپزی و...، به آیتم های متنوعی دسترسی داشته باشید.</p>
                        <p>تلفن پشتیبانی:02632865344</p>
                    </div>
                    <div className={styles.links}>
                        <h3>لینک های باوک</h3>
                        <Link to={`/`}>تماس با ما</Link >
                        <Link to={`/`}>درباره ی باوک</Link >
                        <Link to={`/`}>قوانین استفاده و حریم شخصی</Link >
                    </div>
                    <div className={styles.license}>
                        <h3>مجوزها</h3>
                        <div className={styles.licenseItem}>
                            <img src={img1} alt="licenseLogo"/>
                            <img src={img2} alt="licenseLogo"/>
                            <img src={img3} alt="licenseLogo"/>
                            <img src={img4} alt="licenseLogo"/>
                        </div>
                        
                    </div>
                    <div className={styles.media}>
                        <h3>با ما همراه باشید</h3>
                        <div className={styles.mediaItem}>
                            <img src={icon1} alt="socialMedia" />
                            <img src={icon2} alt="socialMedia" />
                            <img src={icon3} alt="socialMedia" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;