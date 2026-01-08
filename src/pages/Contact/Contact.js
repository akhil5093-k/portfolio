import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      id: 1,
      title: "Email",
      description: "Send me an email and I'll get back to you within 24 hours",
      icon: "📧",
      action: "mailto:akhilnayak509321@gmail.com",
      label: "akhilnayak509321@gmail.com",
      color: "#00ff88"
    },
    {
      id: 2,
      title: "Phone",
      description: "Call me for urgent matters or quick discussions",
      icon: "📱",
      action: "tel:+917569834897",
      label: "+91 75698 34897",
      color: "#00ccff"
    },
    {
      id: 3,
      title: "GitHub",
      description: "Check out my projects and contributions on GitHub",
      icon: "💻",
      action: "https://github.com/akhil5093-k",
      label: "github.com/akhil5093-k",
      color: "#333"
    },
    {
      id: 4,
      title: "Location",
      description: "Based in Hyderabad, India",
      icon: "📍",
      action: "https://maps.google.com/?q=Hyderabad,India",
      label: "Hyderabad, India",
      color: "#ff6b6b"
    }
  ];

  const handleContactClick = (method) => {
    console.log('Contact method clicked:', method.title, method.action);
    
    if (method.title === "Email") {
      // For email, use window.location.href to open default email client
      window.location.href = method.action;
    } else if (method.title === "Phone") {
      // For phone, use window.location.href to initiate call
      window.location.href = method.action;
    } else {
      // For other links (GitHub, Location), open in new tab
      window.open(method.action, '_blank');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>

          <motion.p className="section-subtitle" variants={itemVariants}>
            Ready to start a project or just want to chat? I'd love to hear from you!
          </motion.p>

          <div className="contact-grid">
            {contactMethods.map((method) => (
              <motion.div
                key={method.id}
                className="contact-card"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleContactClick(method)}
              >
                <div className="contact-icon" style={{ background: `linear-gradient(135deg, ${method.color}, ${method.color}80)` }}>
                  {method.icon}
                </div>

                <div className="contact-info">
                  <h3 className="contact-title">{method.title}</h3>
                  <p className="contact-description">{method.description}</p>
                  <div className="contact-label">{method.label}</div>
                </div>

                <div className="contact-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="contact-glow" style={{ background: `radial-gradient(circle, ${method.color}20 0%, transparent 70%)` }}></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="contact-footer"
            variants={itemVariants}
          >
            <div className="footer-content">
              <div className="availability">
                <div className="status-indicator"></div>
                <span>Available for new projects</span>
              </div>
              
              <div className="response-time">
                <span>⏱️ Typical response time: 2-4 hours</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;