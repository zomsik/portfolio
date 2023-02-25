import { Link } from "react-router-dom"
import { Image } from 'react-bootstrap';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import frontImage from "../../assets/frontImage.jpg"
import backImage from "../../assets/backImage.jpg"

import ReactCardFlip from 'react-card-flip';


const Main = (props) => {

    const { t } = useTranslation();

    const [visible, isVisible] = useInView({
        /* Optional options */
        triggerOnce: false,
        rootMargin: '0px 0px',
      })

    useEffect(() => {
        if (isVisible) {
            props.setActiveSection("home");
        }


    }, [isVisible])

    const [isFlipped, setFlipImage] = useState(false);

    /*
    useEffect(() => {
         const flipAction = setInterval(() => setFlipImage(!isFlipped), 15000);
        return () => {
            clearInterval(flipAction);
        };
      });
    */



    return (
        <>
         <div ref={visible} id="home"></div>
    <div className={styles.outerContainer}>
   
        <div className={styles.innerContainer}>
            <div className={styles.left}>

            <ReactCardFlip isFlipped={isFlipped} infinite={true} flipSpeedFrontToBack={2} flipSpeedBackToFront={2}  >

            <Image onClick={() => {setFlipImage(!isFlipped)}} className={styles.image} src={frontImage} />
      
            <Image onClick={() => {setFlipImage(!isFlipped)}} className={styles.image} src={backImage}  /> 
   

            </ReactCardFlip>

            
            

            <div className={styles.icons}>
                <Link to="https://github.com/zomsik" target="_blank"> <Image src={require('../../assets/github.png')} className={styles.icon} /></Link>
                <Link to="https://www.linkedin.com/in/tomasz-wiejak/" target="_blank"> <Image src={require('../../assets/linkedin.png')} className={styles.icon} /></Link>
                <a href='mailto:tomaszwiejak00@gmail.com'> <Image src={require('../../assets/mail.png')} className={styles.icon} /></a> 
            </div>
            </div>
        



        <div className={styles.right}>
        <div className={styles.title}>{t('welcome')}</div>
        <br></br>
        <div className={styles.desc}>{t('descWelcome')}</div>
        
        </div>

       

        <div className={styles.scrollPanel}>
        <a href="#projects"> <Image src={require('../../assets/arrow.png')} className={styles.scroll} /></a>
        </div>
        </div>
    </div>
    </>
    )

}
export default Main
