import React from 'react';
import Item from '../Item';
import NewestData from './CatData/NewCatData';
import styles from './Styles/NewestCat.module.css'


const NewestCategory = () => {
    return (
        <div className={styles.container}>
            { <h1>جدیدترین آیتم ها</h1> }
            <div className={styles.itemContainer}>
                {NewestData.map(item => <Item size={"200px"} id={item.id} key={item.id} image={item.image} title={item.title}/>)}
            </div>
        </div>
    );
};

export default NewestCategory;