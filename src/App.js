
import './App.css';
import Main from './components/Main';
import Projects from './components/Projects';
import Summary from './components/Summary';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const App = () => {

  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  const [language, setLanguage] = useState(localStorage.getItem("WiejakPortfolioLng") || "en");

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("WiejakPortfolioLng", language);
  }, [language]);

  return (
    <div className="App">
        <Navbar language={language} setLanguage={setLanguage} activeSection={activeSection} setActiveSection={setActiveSection} />
        <Main setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Summary setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
