import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from "./Item.module.css";




class Item extends Component {

    
    render() {
        
        const {image , title ,id} = this.props;
        return (
            <div className={styles.container}>
                <img src={image} alt="Items" />
                <h3><Link to={`/products/${id}`}>{title}</Link></h3>
            </div>
        );
    }
}

export default Item;