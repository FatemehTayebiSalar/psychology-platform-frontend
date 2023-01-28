import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './Styles/PodcastItem.module.css';




class PodcastItem extends Component {

    
    render() {
        const {narrator , id , coverImage , title} = this.props;

        
        
        return (
            <div className={styles.container}>
                <img src={coverImage} alt="PodcastImage" className={styles.podImg} />
                <h3 className={styles.podTitle}><Link to={`/podcasts/${id}`}>{title}</Link></h3>
                <h5 className={styles.podNarrator}>همراه با {narrator}</h5>
            </div>
        );
    }
}

export default PodcastItem;