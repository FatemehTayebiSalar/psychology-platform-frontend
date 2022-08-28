import React from 'react';
import styles from './Services.module.css';
import podcast from '../images/servicesImg/podcast.jpg';
import meditation from '../images/servicesImg/meditation.jpg';
import event from '../images/servicesImg/events.jpg';
import {Link} from 'react-router-dom';


const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>خدمات مجموعه</h2> 
                <h2 className={styles.t2}>باوک</h2>
            </div>
            <div className={styles.itemContainer}>
                <div className={styles.item}>
                    <img src={podcast} alt="Items" />
                    <div className={styles.info}>
                        <h3 className={styles.titleStyle}>
                            پادکست
                        </h3>
                        <span className={styles.titleStyle}>
                         جدیدترین پادکست ها را از زبان متخصصین ماهر بشنوید. 
                        </span>
                        <Link to={`/`}></Link>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={event} alt="Items" />
                    <div className={styles.info}>
                        <h3 className={styles.titleStyle}>
                            رویداد ها
                        </h3>
                        <span className={styles.titleStyle}>
                          رویداد هایی تدارک دیده شده که می‌توانید به آن ها بپیوندید.
                        </span>
                        <Link to={`/`}></Link>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={meditation} alt="Items" />
                    <div className={styles.info}>
                        <h3 className={styles.titleStyle}>
                            مدیتیشن
                        </h3>
                        <span className={styles.titleStyle}>
                            با مدیتیشن آرامش را به روح و جسم خود هدایت کنید.
                        </span>
                        <Link to={`/`}></Link>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Services;