import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Certificates from './pages/Certificates/Certificates';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll spy effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </motion.main>

      <ScrollToTop />
    </div>
  );
}

export default App;