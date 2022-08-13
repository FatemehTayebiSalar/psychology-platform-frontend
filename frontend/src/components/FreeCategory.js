import React from 'react';
import Item from './Item';
import Free1 from '../images/freeCat/yoga.jpg';
import Free2 from '../images/freeCat/podcastfree.jpg';
import Free3 from '../images/freeCat/podcastfree2.jpg';
import Free4 from '../images/freeCat/videofree.jpg';
import styles from './FreeCategory.module.css'


const FreeCategory = () => {
    return (
        <div className={styles.container}>
            { <h1>آیتم های رایگان</h1> }
            <div className={styles.itemContainer}>
                <Item className={styles.item1} size={"630px"} image={Free1} id={1} title={"یوگا آشتانکا"}/>
                <Item className={styles.item2} size={"630px"} image={Free2} id={2} title={"عیبی ندارد اگر حالت خوش نیست"}/>
                <Item className={styles.item3} size={"630px"} image={Free3} id={3} title={"هشت گام توسعه فردی"}/>
                <Item className={styles.item4} size={"630px"} image={Free4} id={4} title={"به رنگ زندگی "}/>
            </div>
        </div>
    );
};

export default FreeCategory;