import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hangman Game (GUI Application)",
      description: "A comprehensive interactive Hangman game built with Python and Tkinter, featuring an intuitive graphical user interface, dynamic word selection, and engaging gameplay mechanics. The application demonstrates advanced GUI programming concepts, game state management, and user experience design principles.",
      technologies: ["Python", "Tkinter", "GUI Development", "Game Logic", "Object-Oriented Programming", "Event Handling"],
      category: "Desktop Application",
      image: "🎮",
      githubUrl: "https://github.com/akhil5093-k/hangman",
      features: [
        "Interactive GUI-based Hangman game with modern Tkinter interface",
        "Dynamic word database with multiple difficulty levels and categories",
        "Real-time visual feedback with hangman drawing progression",
        "Comprehensive scoring system with streak bonuses and high scores",
        "Smart hint system providing contextual clues without revealing answers",
        "Customizable game settings including difficulty, word length, and themes",
        "Sound effects and visual animations for enhanced user engagement",
        "Save/load game functionality with persistent user statistics",
        "Multi-language support with expandable word dictionaries",
        "Responsive design optimized for different screen resolutions",
        "Error handling and input validation for robust gameplay experience",
        "Performance optimization with efficient memory management"
      ]
    },
    {
      id: 2,
      title: "Quiz Competition Web Application (Full Stack)",
      description: "A sophisticated full-stack quiz competition platform designed for educational institutions and competitive environments. Built with modern web technologies, featuring real-time functionality, comprehensive user management, and scalable architecture. The application supports multiple quiz formats, automated scoring, and detailed analytics for both participants and administrators.",
      technologies: ["React.js", "Node.js", "Express.js", "Firebase Firestore", "Axios", "JWT Authentication", "Socket.io", "Material-UI", "Chart.js"],
      category: "Full Stack Web App",
      image: "🏆",
      githubUrl: "https://github.com/akhil5093-k/cyberhunt-quiz",
      liveUrl: "https://deploy-teal-ten.vercel.app/",
      features: [
        "Comprehensive quiz management with 20+ MCQ questions and randomization algorithms",
        "Advanced 20-minute countdown timer with auto-submit and warning notifications",
        "Real-time leaderboard system displaying top performers with live score updates",
        "Fully responsive design optimized for mobile, tablet, and desktop platforms",
        "Robust RESTful API architecture with Firebase Firestore integration",
        "Secure user authentication and authorization using JWT tokens",
        "Auto-refresh system preventing data loss during network interruptions",
        "Advanced question bank management with category-based filtering",
        "Detailed analytics dashboard showing performance metrics and trends",
        "Multi-level admin panel for quiz creation, user management, and monitoring",
        "Real-time notifications and alerts for quiz events and updates",
        "Automated certificate generation for quiz completion and achievements",
        "Export functionality for results in multiple formats (PDF, Excel, CSV)",
        "Progressive Web App (PWA) capabilities for offline functionality",
        "Load balancing and caching strategies for optimal performance",
        "Comprehensive logging and monitoring system for debugging and analytics"
      ]
    },
    {
      id: 3,
      title: "HabitFlow - Advanced Habit Tracking App",
      description: "A comprehensive, production-ready habit tracking application built with React, JavaScript, and Firebase. Features advanced analytics, OTP verification, dark mode, and much more! This full-stack application demonstrates modern web development practices with real-time data synchronization, secure authentication, and beautiful user interface design.",
      technologies: ["React 18", "JavaScript (ES6+)", "Firebase", "Tailwind CSS", "EmailJS", "Vite", "Lucide React", "React Hot Toast"],
      category: "Full Stack Web App",
      image: "📈",
      githubUrl: "https://github.com/akhil5093-k/habit-tracker.git",
      liveUrl: "https://habit-tracker-omega-seven.vercel.app/",
      features: [
        "Secure Firebase Authentication with email/password and OTP verification",
        "Professional email templates sent from habitflow5093@gmail.com",
        "13 comprehensive habit categories: Health, Fitness, Learning, Work, Mindfulness",
        "Advanced habit templates for quick setup and goal setting with custom units",
        "Smart sorting and filtering by creation date, streak length, and categories",
        "Comprehensive analytics dashboard with charts and progress tracking",
        "Achievement system with badges for milestones and consistency rewards",
        "Weekly progress charts and visual completion rate tracking",
        "Streak monitoring with daily streaks and personal best records",
        "Full dark/light theme support with system preference detection",
        "Responsive design perfect for desktop, tablet, and mobile devices",
        "Export/Import functionality for data backup and restoration",
        "Real-time synchronization across all devices with offline support",
        "Toast notifications for instant user feedback and loading states",
        "Modern UI with gradients, shadows, and smooth animations",
        "Data privacy and security with user-only access controls"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={projectVariants}>
            Featured Projects
          </motion.h2>

          <motion.p className="section-subtitle" variants={projectVariants}>
            A showcase of my recent work in cybersecurity and web development
          </motion.p>

          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={projectVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <div className="project-icon">{project.image}</div>
                  <div className="project-category">{project.category}</div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <motion.button
                      className="btn-project btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      View Details
                    </motion.button>
                    {project.liveUrl && (
                      <motion.button
                        className="btn-project btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        Live Demo
                      </motion.button>
                    )}
                  </div>
                </div>

                <div className="project-glow"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;