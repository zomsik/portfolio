
import Project from "../Project";
import tower1 from "../../assets/tower1.gif"
import tower2 from "../../assets/tower2.png"
import tower3 from "../../assets/tower3.png"

import stats1 from "../../assets/stats1.gif"
import stats2 from "../../assets/stats2.png"
import stats3 from "../../assets/stats3.png"

import React from 'react';
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Keyboard } from "swiper";


const Projects = (props) => {

    const { t } = useTranslation();

    const project1 = {
        name: "Tower Defense",
        desc: t('descTower'),
        img: [tower1,tower2,tower3]
    }

    const project2 = {
        name: t('titleStatistics'),
        desc: t('descStatistics'),
        img: [stats1, stats2, stats3]
    }


    return (
        <>
        <div id="projects"></div>

        


        

        <Swiper 
        navigation={true}
        pagination={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><Project setActiveSection={props.setActiveSection} project={project1} download="https://drive.google.com/u/0/uc?id=1IBKVeFjtm0g2RhVRkimUMeYg-hYCCnJr&export=download" /></SwiperSlide>
        <SwiperSlide><Project setActiveSection={props.setActiveSection} project={project2} github="https://github.com/zomsik/ReactWebClientApp" live="https://zomsik.github.io/ReactWebClientApp/"/></SwiperSlide>
      </Swiper>

      
        

        </>
    )

}
export default Projects
