import React, {useState} from 'react';
import './Slider.css';
import BtnSlider from './BtnSlider';
import slideContent from './SlideContent';
import PersianDate from '../../shared/persianDate';


export default function Slider() {
    
    const currentWeek = new PersianDate()
    const previousWeek = new PersianDate(currentWeek.getTime() - (7 * 24 * 60 * 60 * 1000))
    const nextWeek = new PersianDate(currentWeek.getTime() + (7 * 24 * 60 * 60 * 1000))

    const dataSlider = [previousWeek,currentWeek,nextWeek]

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((item,index) => {
                return (
                    <div
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <slideContent date={item}></slideContent>
                    </div>
                )
            })}
    
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: dataSlider.length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(dataSlider.length - index)}
                    className={slideIndex === dataSlider.length - index ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}