import React, {useState , useEffect} from 'react';

import styles from './Styles/Events.module.css';
import axios from 'axios';
import EventsItem from './EventsItem';



const Events = () => {
    const [eventsData , setEventsData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/events")
        .then(response => {
            const data = response.data.data.events
            setEventsData(data)
        }
        ).catch(errors => console.log(errors))
        
    },[])

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>رویدادها</h3>
            <div className={styles.itemContainer}>
                {eventsData.map(item => <EventsItem title={item.title} id={item.id} key={item.id} image={item.imageURL} date={item.date} capacity={item.capacity}/>)}
            </div>
        </div>
    );
};

export default Events;