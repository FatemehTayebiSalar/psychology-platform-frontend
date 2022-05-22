import React, { Component } from 'react';

import styles from "./Items.module.css";
import Card from './Item';


import Podcast from "../images/Podcast.png";
import Events from "../images/Events.png";
import Psychologists from "../images/Psychologists.png";
import Meditation from "../images/Meditation.png";

class Items extends Component {
    constructor(){
        super();
        this.state={
            Data:[
                {id:1,image:Podcast,title:"گوش کنیم"},
                {id:2,image:Meditation, title:"آرام شویم"},
                {id:3,image:Psychologists, title:"حرف بزنیم" },
                {id:4,image:Events, title:"شرکت کنیم" }
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
               {this.state.Data.map(item => <Card id={item.id} key={item.id} image={item.image} title={item.title}/>)}
            </div>
        );
    }
}

export default Items;