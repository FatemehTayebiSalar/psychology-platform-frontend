import React from 'react';
import Item from '../Item';
import NewestData from './CatData/LikedCatData';
import styles from './Styles/LikedCat.module.css'


const MostlikedCategory = () => {
    return (
        <div className={styles.container}>
            { <h1> بر اساس علاقه ی شما </h1> }
            <div className={styles.itemContainer}>
                {NewestData.map(item => <Item size={"200px"} id={item.id} key={item.id} image={item.image} title={item.title}/>)}
            </div>
        </div>
    );
};

export default MostlikedCategory;