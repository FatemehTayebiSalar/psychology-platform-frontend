import React from 'react';
import Item from '../Item';
import Data from './CatData/FreeCatData';
import styles from './Styles/FreeCategory.module.css'


const FreeCategory = () => {
    return (
        <div className={styles.container}>
            { <h1>آیتم های رایگان</h1> }
            <div className={styles.itemContainer}>
                {Data.map(item => <Item size={"560px"} id={item.id} key={item.id} image={item.image} title={item.title}/>)}
            </div>
        </div>
    );
};

export default FreeCategory;