import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import capacityIcon from '../../images/Icons/capacity.png';
import registeredIcon from '../../images/Icons/registered.png';
import PersianNumber from '../shared/PersianNumber';
import styles from './Styles/EventsItem.module.css';




class EventItem extends Component {

    
    render() {
        const {image , title ,id , capacity,date} = this.props;

        
        
        return (
            <div className={styles.container}>
                <div className={styles.info}>
                    <img src={image} alt="EventImage" className={styles.eventImg} />
                    <span className={styles.text}>
                        <h4><Link to={`/events/${id}`}>{title}</Link></h4>
                        <p>{date}</p>
                    </span>
                </div>
                
                <div className={styles.icons}>
                    <span className={styles.capacity}>
                        <span><PersianNumber number = {capacity} /></span>
                        <img src={capacityIcon} alt="capacity" /> 
                    </span>
                    <span className={styles.registered}>
                        <span><PersianNumber number = {10} /></span>
                        <img src={registeredIcon} alt="registered" />
                    </span>
                </div>
            </div>
        );
    }
}

export default EventItem;