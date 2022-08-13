import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from "./Item.module.css";




class Item extends Component {

    
    render() {
        const {image , title ,id , size} = this.props;

        const containerStyle = {
            width: size,
            height: size,
            display: "flex",
            position: "relative",
            margin:"10px"
          };
        
        
        return (
            <div style={containerStyle}>
                <img className={styles.imageStyle} src={image} alt="Items" />
                <h3 className={styles.titleStyle}><Link to={`/products/${id}`}>{title}</Link></h3>
            </div>
        );
    }
}

export default Item;