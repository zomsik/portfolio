
import './App.css';
import Main from './components/Main';
import Projects from './components/Projects';
import Summary from './components/Summary';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { animateScroll } from 'react-scroll';


const App = () => {

  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  const [language, setLanguage] = useState(localStorage.getItem("WiejakPortfolioLng") || "en");

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("WiejakPortfolioLng", language);
  }, [language]);

  const projectsId = document.getElementById('projects');

  function preventDefault(event) {
    event.preventDefault();
  }

  useEffect(() => {
    document.getElementById("app").focus();
    document.addEventListener("keydown", preventDefault, { passive: false });

    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('mousewheel', preventDefault, { passive: false });
    window.addEventListener('DOMMouseScroll', preventDefault, { passive: false });
  },[]);

  const handleScroll = (event) => {

    if(event.deltaY>0)
    {
      if (activeSection==="home") {
        window.scrollTo({
          top: projectsId.getBoundingClientRect().top + window.pageYOffset,
          behavior: "smooth"
        });
      } else if (activeSection==="projects") {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      }

    } else {

      if (activeSection==="projects") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else if (activeSection==="summary") {
        window.scrollTo({
          top: projectsId.getBoundingClientRect().top + window.pageYOffset,
          behavior: "smooth"
        });
      }

    }
  };

  const handleKeybordScroll = (event) => {

    if(event.key === "s" || event.key === "ArrowDown")
    {
      if (activeSection==="home") {
        window.scrollTo({
          top: projectsId.getBoundingClientRect().top + window.pageYOffset,
          behavior: "smooth"
        });

      } else if (activeSection==="projects") {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      }

    } else if (event.key === "w" || event.key === "ArrowUp"){

      if (activeSection==="projects") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else if (activeSection==="summary") {
        window.scrollTo({
          top: projectsId.getBoundingClientRect().top + window.pageYOffset,
          behavior: "smooth"
        });
      }

    }
  };


  return (
    <div id="app" tabIndex="0" onKeyDown={handleKeybordScroll} onWheel={handleScroll} className="App">
        <Navbar language={language} setLanguage={setLanguage} activeSection={activeSection} setActiveSection={setActiveSection} />
        <Main setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Summary setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
