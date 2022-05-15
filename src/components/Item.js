import React from 'react';
//import {Link} from 'react-router-dom';
import styles from "./Item.module.css";

const Item = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.image} alt="Items" />
            <h3><a>{props.title}</a></h3>
        </div>
    );
};

export default Item;