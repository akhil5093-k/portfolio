import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const handleViewResume = () => {
    window.open('https://drive.google.com/file/d/1ODPa3CkpkRF4Xyp5Wl7o5ejKpMmHE_1b/view?usp=sharing', '_blank');
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="greeting-text">Hi, I'm Akhil Nayak</span>
          </motion.div>

          <motion.div
            className="tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="tagline-text">Cybersecurity Enthusiast | Computer Science Engineer | Full Stack Developer | Problem Solver</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            A Computer Science & Cybersecurity student passionate about building secure systems, analyzing data, 
            and solving real-world technical problems through code.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={handleViewResume}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span>View Resume</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>

            <motion.button
              className="btn btn-secondary"
              onClick={handleContactMe}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="floating-elements">
            <motion.div
              className="floating-element element-1"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="floating-element element-2"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="floating-element element-3"
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12L12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;