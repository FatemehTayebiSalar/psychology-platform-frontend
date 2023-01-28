import React, { useEffect, useState } from 'react'
import styles from './Carousel.module.css';

const Carousel = (props) => {
    const {children} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    useEffect(() => {
        setLength(children.length)
    }, [children])

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
                {
                currentIndex > 0 &&
                <button onClick={prev} className={styles.leftArrow}>
                    &gt;
                </button>
                }
                <div className={styles.carouselContentWrapper}>
                    <div className={styles.carouselContent} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                {
                    currentIndex < (length - 1) &&
                    <button onClick={next} className={styles.rightArrow}>
                        &lt;
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel