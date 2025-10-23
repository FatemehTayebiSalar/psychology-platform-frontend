
import EpisodeModal from './EpisodeModal';
import styles from './Styles/Chapter.module.css'
import React, { Component } from 'react';
import PersianNumber from '../shared/PersianNumber';
import closeIcon from '../../images/Icons/closeIcon.png';
import styled from 'styled-components';

const Div =styled.div`
    
    cursor:pointer;
    display:flex;
    flex-direction:row;
    align-self:center;
    
    span {
        display: flex;
        width: 20px;
        height: 20px;
        border-top: 5px solid rgb(1, 61, 1);
        border-right: 5px solid rgb(1, 61, 1);
        transition: all 0.3s linear; 
        transform: ${props =>props.showEpisode ? "rotate(-225deg)" : "rotate(-135deg)"}
    }
`;



class Chapter extends Component {
    constructor(props){
        super(props) 
        this.state = {showEpisode : false , showModal : false}
    }

    clickHandler = () =>{
        this.setState({showEpisode:!this.state.showEpisode});
    };

    modalClickHandler = () => {
        this.setState({showModal:true});
    }

    modalCloseHandler = () => {
        this.setState({showModal:false});
    }
    
    render() {
        const {chapterData , modelName , index} = this.props
        return (
            <div className={styles.container}>
                <div className={styles.chapterDetail}>
                    <span className = {styles.arrow}>
                        <Div showEpisode={this.state.showEpisode} onClick={this.clickHandler} >
                            <span></span>
                        </Div>
                    </span>
                    <span className={styles.info}>
                        <span className={styles.col1}>
                            <span className={styles.title}>{chapterData.title} :</span>
                            <span className={styles.text}>{chapterData.text}</span>
                        </span>
                        <span className={styles.col2}>
                         <PersianNumber number = {chapterData.episodes.length} /> قسمت
                        </span>
                        
                    </span>
                    
                </div>
                {this.state.showEpisode && (
                <div className={styles.episodeContainer}>
                    {chapterData.episodes.map((episode,index) =>
                        <div>
                            <span className={styles.episodeItem} key={index} onClick={this.modalClickHandler}>قسمت <PersianNumber number = {index+1} /> </span>
                            {this.state.showModal && (
                                <span className={styles.episodeModal}>
                                    <img src={closeIcon} onClick={this.modalCloseHandler} className={styles.closeIcon}/>
                                    <EpisodeModal data={episode} modelName={modelName}/>
                                </span> 
                                
                            )}
                        </div>
                    )}
                </div>
                )}
            </div>
        );
    }
}

export default Chapter;

