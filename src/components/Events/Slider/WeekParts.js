import React, { Component } from 'react';
import styles from "./weekParts.module.css";

class WeekParts extends Component {
    render() {
        const {dateNumber , dayName } = this.props;
        return (
            <div className={styles.container}>
                <span className={styles.date}>{dateNumber}</span>
                <span className={styles.day}>{dayName}</span>
            </div>
        );
    }
}

export default WeekParts;