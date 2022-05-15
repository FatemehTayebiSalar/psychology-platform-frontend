import React ,{useState} from 'react';
import styles from "./Items.module.css";
import Item from './Item';

import Podcast from "../images/Podcast.png";
import Events from "../images/Events.png";
import Psychologists from "../images/Psychologists.png";
import Meditation from "../images/Meditation.png";

const Items = () => {
    const [data , setData] = useState(
        {id:1,image:Podcast,title:"گوش کنیم"},
        {id:2,image:Meditation, title:"آرام شویم"},
        {id:3,image:Psychologists, title:"حرف بزنیم" },
        {id:4,image:Events, title:"شرکت کنیم" })
        
    return (
        <div className={styles.container}>
               {setData(item => <Item key={data.id} id={data.id} image={data.image} title={data.title}/>)}
        </div>
    );
};

export default Items;