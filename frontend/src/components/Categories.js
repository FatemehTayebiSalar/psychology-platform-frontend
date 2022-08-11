import React, { Component } from 'react';

import styles from "./Categories.module.css";
import Card from './Item';


import Podcast from "../images/Podcast.png";
import Events from "../images/Events.png";
import Psychologists from "../images/Psychologists.png";
import Meditation from "../images/Meditation.png";


class Categories extends Component {
    constructor(){
        super();
        this.state={
            Data:[
                {id:1,image:Podcast,title:"تربیت مغز"},
                {id:2,image:Meditation, title:"باشگاه"},
                {id:3,image:Psychologists, title:"آرامش روح" },
                {id:4,image:Events, title:"دسته جمعی" }
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


export default Categories;