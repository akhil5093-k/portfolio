import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="logo-text">Akhil Nayak</span>
          <span className="logo-accent">.</span>
        </motion.div>
        
        <motion.div
          className="loading-spinner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="spinner"></div>
        </motion.div>
        
        <motion.p
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;