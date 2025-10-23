import React, {useState , useEffect} from 'react';
import Item from '../Item.js';
import styles from './Styles/Psychologists.module.css';
import axios from 'axios';


const Psychologits = () => {
    const [psychsData , setPsychsData] = useState([{id: "" , name : "" , degree : "" , imageURL : ""}])

    useEffect(()=>{
        axios.get("http://localhost:5000/psychologists")
        .then(response => {
            const data = response.data.data.psychologists
            setPsychsData(data)
        }
        ).catch(errors => console.log(errors))
        
    },[])

    return (
        <div className={styles.container}>
            <h1>درمانگران</h1>
            <div className={styles.itemContainer}>
                {psychsData.map(item => <Item size={"250px"} id={item.id} key={item.id} image={item.imageURL} title={item.name}/>)}
            </div>
        </div>
    );
};

export default Psychologits;