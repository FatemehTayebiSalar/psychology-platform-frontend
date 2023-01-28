import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './Styles/PodcastItem.module.css';




class PodcastItem extends Component {

    
    render() {
        const {narrator , id , coverImage , title} = this.props;

        
        
        return (
            <div className={styles.container}>
                <img src={coverImage} alt="PodcastImage" className={styles.podImg} />
                <span className={styles.podTitle}><Link to={`/podcasts/${id}`}>{title}</Link></span>
                <span className={styles.podNarrator}>همراه با {narrator}</span>
            </div>
        );
    }
}

export default PodcastItem;