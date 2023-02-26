import { Link } from "react-router-dom"
import { Image } from 'react-bootstrap';
import styles from './styles.module.css';
import space from "../../assets/space.png";
import { useInView } from "react-intersection-observer";
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

import React, { useEffect } from 'react';


const Project = (props) => { 

        const bigImage = (number) => {return `
        <div style="
            display: flex;
            place-content: center;
            flex-direction: column;
         height: 100%;
        ">
          <img style='height: 100%; width: 100%; object-fit: contain'  src="${props.project.img[number]}" />
        </div>
        `}
        

        const [visibleProjects, isVisibleProjects] = useInView({
            triggerOnce: false,
            rootMargin: '0px 0px',
          })
    
        useEffect(() => {
            if (isVisibleProjects) {
                props.setActiveSection("projects");
            }
        }, [isVisibleProjects])
    


    return (
        <>
        <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
        <div className={styles.left}>
        <div className={styles.title}>{props.project.name}</div>
        <br></br>
        <div className={styles.desc}>{props.project.desc}</div>
        

        <div ref={visibleProjects} className={styles.icons}>
        {props.github ? <Link to={props.github} target="_blank"> <Image src={require('../../assets/github2.png')} className={styles.icon} /></Link> : ""}
        {props.download ? <Link to={props.download} target="_blank" > <Image src={require('../../assets/download2.png')} className={styles.icon} /></Link> : ""}
        {props.live ? <Link to={props.live} target="_blank"> <Image src={require('../../assets/lupa.png')} className={styles.icon} /></Link> : ""}
        </div>




        </div>
        <div className={styles.right}>
        <Gallery options={{ showHideOpacity: true, counter: false }}>

        {Array.from(
        { length: props.project.img.length },
        (_, i) => (

        <Item key={"item"+i} html={bigImage(i)}>
        {({ ref, open }) => (
         
        <Image key={"image"+i} ref={ref} src={props.project.img[i]} onClick={(e) => {e.preventDefault(); open(e)}} className={`${styles.image} ${i%2===0 ? styles.leftImage : styles.rightImage} ${i===0 ? styles.topImage : ''} ${i===props.project.img.length-1 ? styles.bottomImage : ''} ` }      />
      
        )}
        </Item>

        )
        )}
        </Gallery>
        </div>


        {props.space ?

            <div className={styles.spacePanel}>
            <Image src={space} className={styles.space} />
            </div> : <></>
        }
        </div>
        </div>
        </>
    )

}
export default Project
