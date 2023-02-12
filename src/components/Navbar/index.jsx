import styles from './styles.module.css';
import { useTranslation } from "react-i18next";
import {
    NavbarContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLink,
    OpenLinksButton,
    NavbarLinkExtended,
  } from "./NavbarElements";
  
  import React, { useState  } from 'react';

const Navbar = (props) => {

    const { t, i18n } = useTranslation();

    function changeLanguage() {
            if(i18n.language === "pl") {
                props.setLanguage("en");
            } else {
                props.setLanguage("pl");
            }
        }
    
        const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        
        


        <NavbarContainer extendNavbar={extendNavbar} className={styles.animation}>
            <NavbarInnerContainer>
                <RightContainer>

                    <NavbarLink href="#home" className={`${props.activeSection==="home" ? styles.active : ""}  ` } >{t('home')}</NavbarLink>
                    <NavbarLink href="#projects" className={`${props.activeSection==="projects" ? styles.active : ""}  ` }>{t('projects')}</NavbarLink>
                    <NavbarLink href="#summary" className={`${props.activeSection==="summary" ? styles.active : ""}  ` }>{t('summary')}</NavbarLink>
                    <NavbarLink onClick={changeLanguage}> {t('language')} </NavbarLink>
                    <OpenLinksButton
                            onClick={() => {
                              setExtendNavbar((curr) => !curr);
                         }}>
                            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                    </OpenLinksButton>
                </RightContainer>
            </NavbarInnerContainer>

            {extendNavbar && ( <NavbarExtendedContainer>

                <NavbarLinkExtended href="#home" onClick={() => props.setActiveSection("home")} className={`${props.activeSection==="home" ? styles.active : ""}  ` } >{t('home')}</NavbarLinkExtended>
                <NavbarLinkExtended href="#projects" onClick={() => props.setActiveSection("projects")} className={`${props.activeSection==="projects" ? styles.active : ""}  ` }>{t('projects')}</NavbarLinkExtended>
                <NavbarLinkExtended href="#summary" onClick={() => props.setActiveSection("summary")} className={`${props.activeSection==="summary" ? styles.active : ""}  ` }>{t('summary')}</NavbarLinkExtended>
                <NavbarLinkExtended onClick={changeLanguage}> {t('language')} </NavbarLinkExtended>


                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    
    )

}
export default Navbar
