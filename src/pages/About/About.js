import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Education
          </motion.h2>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="education-section">
                <h4>Education</h4>
                <div className="education-timeline">
                  <motion.div 
                    className="education-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="education-icon">🎓</div>
                    <div className="education-content">
                      <h5>CVR College of Engineering, Hyderabad</h5>
                      <p className="degree">B-Tech in Computer Science & Cyber Security</p>
                      <p className="grade">CGPA: 8.69</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="education-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="education-icon">📚</div>
                    <div className="education-content">
                      <h5>Narayana Junior College, Hyderabad</h5>
                      <p className="degree">Intermediate (MPC)</p>
                      <p className="grade">Percentage: 91.5% | May 2023</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="education-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="education-icon">🏫</div>
                    <div className="education-content">
                      <h5>Sai Chaitanya Model School, Hyderabad</h5>
                      <p className="degree">10th Grade</p>
                      <p className="grade">CGPA: 10.0 | May 2021</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-visual" variants={itemVariants}>
              <div className="visual-container">
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;