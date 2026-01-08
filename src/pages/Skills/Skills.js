import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const allSkills = [
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PL/SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Git/GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Data Structures & Algorithms", logo: "🧩" },
    { name: "Computer Networking", logo: "🌐" },
    { name: "Operating Systems", logo: "💻" },
    { name: "Problem Solving", logo: "🔧" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={skillVariants}>
            Skills & Technologies
          </motion.h2>

          <motion.p className="section-subtitle" variants={skillVariants}>
            Technical skills and technologies I work with
          </motion.p>

          <div className="skills-timeline">
            <div className="timeline-line"></div>
            {allSkills.map((skill, index) => (
              <motion.div
                key={index}
                className={`skill-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                variants={skillVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="skill-content">
                  <div className="skill-logo">
                    {skill.logo.startsWith('http') ? (
                      <img src={skill.logo} alt={skill.name} className="skill-icon" />
                    ) : (
                      <span className="skill-emoji">{skill.logo}</span>
                    )}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="timeline-dot"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;