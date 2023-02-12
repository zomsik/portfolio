import { Link } from "react-router-dom"
import { Image } from 'react-bootstrap';
import styles from './styles.module.css';
import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'react-i18next';
import Scratch from "../Scratch";

const Summary = (props) => {

    const { t } = useTranslation();

    const [visible, isVisible] = useInView({
        triggerOnce: false,
        rootMargin: '0px 0px',
      })

    useEffect(() => {
        if (isVisible) {
            props.setActiveSection("summary");
        }
    }, [isVisible])

            

    return (
        <>
        <div id="summary"></div>
        <div  className={styles.outerContainer}>     
        <div  className={styles.innerContainer}>

            <div className={styles.left}>
                <div className={styles.desc}>{t('descSummary')}</div>

                <div className={styles.cv1Container}>
                    <div className={styles.cvText}>{t('descCV1')}</div>
                    <div className={styles.cvButtons}>
                    <Link to="./portfolio/cvs/Tomasz Wiejak CV.pdf" target="_blank" download> <Image src={require('../../assets/downloadWide.png')} className={styles.icon} /></Link> 
                    <Link to="./portfolio/cvs/Tomasz Wiejak CV.pdf" target="_blank" > <Image src={require('../../assets/ViewWide.png')} className={styles.icon} /></Link>
                    </div>
                </div>


                <div className={styles.cv2Container}>
                    <div className={styles.cvText}>{t('descCV2')}</div>
                    <div ref={visible} className={styles.cvButtons}>
                    <Link to="./portfolio/cvs/Tomasz Wiejak CV_EN.pdf" target="_blank" download> <Image src={require('../../assets/downloadWide.png')} className={styles.icon} /></Link> 
                    <Link to="./portfolio/cvs/Tomasz Wiejak CV_EN.pdf" target="_blank" > <Image src={require('../../assets/ViewWide.png')} className={styles.icon} /></Link>
                    </div>
                </div>

            </div>

            <div className={styles.right}>
                <div className={styles.scratchContainer}>
                        <div className={styles.scratch}>
                            <Scratch/>
                        </div>
                        <Image src={require('../../assets/stack.png')} className={styles.underImage} />
                </div>
            </div>
        </div>
        </div>
        </>
    )

}
export default Summary
