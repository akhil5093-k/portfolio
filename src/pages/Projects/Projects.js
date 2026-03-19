import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Online Secure Voting System",
      description: "A production-ready, full-stack secure online voting platform built with React, Node.js, Express, and Firebase. Features cryptographic vote anonymity, two-factor authentication, real-time results, and a comprehensive admin dashboard — designed for university elections, organizational voting, and community polls.",
      technologies: ["React 18", "Context API", "Tailwind CSS", "Node.js", "Express", "Firebase", "JWT", "OTP Verification", "bcrypt", "Nodemailer", "Axios", "Vercel"],
      category: "Full Stack Web App",
      image: "🗳️",
      githubUrl: "https://github.com/akhil5093-k/secure-voting-system",
      features: [
        "Anonymous voting with cryptographic separation of voter identity and vote choice",
        "Two-factor authentication with OTP verification for secure vote casting",
        "All votes encrypted before storage in Firebase — no plaintext data",
        "Fraud prevention with one-vote-per-user enforcement, duplicate detection, and audit trails",
        "Real-time vote counting and live results display",
        "Email confirmations with verification hashes for every submitted vote",
        "Election management: create, update, and monitor elections from admin panel",
        "User management: activate/deactivate voters, view participation statistics",
        "Analytics dashboard with detailed voting analytics and turnout data",
        "Configurable results visibility — admin controls when results go public",
        "JWT-based authentication with refresh tokens and role-based access control",
        "Rate limiting and brute force protection via helmet and CORS policies",
        "Fully responsive design optimized for desktop, tablet, and mobile",
        "Nodemailer SMTP integration for OTP and confirmation emails",
        "Deployed on Vercel with Firebase backend for scalable cloud infrastructure"
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