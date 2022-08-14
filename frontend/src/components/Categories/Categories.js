import React, { Component } from 'react';

import styles from "./Styles/Categories.module.css";
import Category from '../Item';


import Podcast from "../../images/Podcast.png";
import Events from "../../images/Events.png";
import Psychologists from "../../images/Psychologists.png";
import Meditation from "../../images/Meditation.png";
import FreeCategory from './FreeCategory';
import NewestCategory from './NewestCategory';
import MostlikedCategory from './MostlikedCategory';
import PsychologistCategory from './PsychologistCategory';


class Categories extends Component {
    constructor(){
        super();
        this.state={
            firstData:[
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
                
                <h1 className={styles.mainHeader}><hr/>دسته بندی ها</h1>
                <div className={styles.firstCat}>
                    {this.state.firstData.map(item => <Category size={"270px"} id={item.id} key={item.id} image={item.image} title={item.title}/>)}
                </div>
                <FreeCategory />
                <NewestCategory />
                <MostlikedCategory />
                <PsychologistCategory />
                
            </div>
        );
    }
}


export default Categories;