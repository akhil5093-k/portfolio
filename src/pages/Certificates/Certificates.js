import React from 'react';
import { motion } from 'framer-motion';
import './Certificates.css';

const Certificates = () => {
  console.log('Certificates component is rendering');
  
  const certificates = [
    {
      id: 1,
      title: "Cyber Security Virtual Internship",
      issuer: "EduSkills (AICTE & Palo Alto Networks)",
      date: "April 2025 – June 2025",
      description: "Completed comprehensive virtual internship covering real-world cybersecurity challenges, threat detection, network security, and risk mitigation with hands-on security best practices.",
      image: "🔒",
      skills: ["Cyber Security Fundamentals", "Fundamentals of Cloud Security", "Fundamentals of SOC", "Network Security Fundamentals"],
      credentialId: "EDUSKILLS-CYBER-2025-001",
      file: "https://drive.google.com/file/d/1FRmiOhO6KihqpUJpK4M3TSHFCYZg0kkx/view?usp=sharing"
    },
    {
      id: 2,
      title: "Zero Trust Cloud Security Virtual Internship",
      issuer: "Zscaler (Supported by EduSkills & AICTE)",
      date: "October 2025 – December 2025",
      description: "Completed 10-week virtual internship focused on Zero Trust Cloud Security, learning core Zero Trust architecture principles, secure access models, and modern enterprise cloud security challenges.",
      image: "☁️",
      skills: ["Zero Trust Architecture", "Cloud Security", "Identity-based Access", "Network Protection"],
      credentialId: "ZSCALER-ZT-2025-002",
      file: "https://drive.google.com/file/d/1CkGM3uwXskxYHYGzcyCzcVExydLauEOL/view?usp=sharing"
    },
    {
      id: 3,
      title: "Database Programming with SQL",
      issuer: "Oracle Academy",
      date: "Completed: 24 December 2024",
      description: "Successfully completed Oracle Academy's Database Programming with SQL course, gaining hands-on experience in writing and optimizing SQL queries, relational database design, and data manipulation.",
      image: "🗄️",
      skills: ["SQL Programming", "Database Design", "Query Optimization", "Data Manipulation"],
      credentialId: "ORACLE-SQL-2024-003",
      file: "https://drive.google.com/file/d/1ccOpJ4yQkl6cBu2hcP2wynKgEdaU2Khi/view?usp=sharing"
    },
    {
      id: 4,
      title: "Google Skill Boost – Gen AI Study Jams",
      issuer: "Google",
      date: "September 2024 – October 2024",
      description: "Explored Generative AI tools and gained hands-on experience with Google AI platforms, learning about modern AI technologies and their practical applications.",
      image: "🤖",
      skills: ["Generative AI", "Google AI Tools", "AI Platforms", "Machine Learning"],
      credentialId: "GOOGLE-AI-2024-004",
      file: "https://drive.google.com/file/d/1j1HgshHnMHH0sirXNen-0vtfkYWexMO0/view?usp=sharing"
    },
    {
      id: 5,
      title: "TCS iON Career Edge – IT Industry Overview",
      issuer: "TCS iON",
      date: "2024",
      description: "Completed comprehensive program covering IT industry overview, career development strategies, and essential skills for transitioning into the technology sector.",
      image: "💼",
      skills: ["IT Industry Knowledge", "Career Development", "Technology Transition", "Industry Skills"],
      credentialId: "TCS-ION-2024-005",
      file: "https://drive.google.com/file/d/1DrW52mTPtwKkRyfMLvIj2mGRZwrLiquE/view?usp=sharing"
    },
    {
      id: 6,
      title: "Red Hat Training: Getting Started with Linux Fundamentals",
      issuer: "Red Hat, Inc.",
      date: "December 18, 2025",
      description: "Successfully attended and completed the Red Hat Training: Getting Started with Linux Fundamentals (RH104 – RHA), Version 9.1. This course provided foundational knowledge of Linux operating systems, including essential command-line usage, system navigation, file management, and core Linux concepts aligned with industry standards.",
      image: "🐧",
      skills: ["Linux Operating Systems", "Command-Line Interface", "System Navigation", "File Management", "Linux Fundamentals"],
      credentialId: "REDHAT-LINUX-2025-006",
      file: "https://drive.google.com/file/d/1G7e0GBlOidhcfH-63ppPlhI4zxNEPLoQ/view?usp=sharing"
    }
  ];

  const handleCertificateClick = (certificate) => {
    // Open the Google Drive link in a new tab
    window.open(certificate.file, '_blank');
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

  const certificateVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <div className="certificates-content">
          <h2 className="section-title">
            Certificates & Achievements
          </h2>

          <p className="section-subtitle">
            Certifications and achievements that validate my expertise
          </p>

          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="certificate-card"
              >
                <div className="certificate-header">
                  <div className="certificate-date">{certificate.date}</div>
                </div>

                <div className="certificate-content">
                  <h3 className="certificate-title">{certificate.title}</h3>
                  <p className="certificate-issuer">Issued by {certificate.issuer}</p>
                  <p className="certificate-description">{certificate.description}</p>

                  <div className="certificate-skills">
                    <h4>Skills Covered:</h4>
                    <div className="skills-tags">
                      {certificate.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="certificate-credential">
                    <span className="credential-label">Credential ID:</span>
                    <span className="credential-id">{certificate.credentialId}</span>
                  </div>

                  <div className="certificate-actions">
                    <button
                      className="btn-view-certificate"
                      onClick={() => handleCertificateClick(certificate)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      View Certificate
                    </button>
                  </div>
                </div>

                <div className="certificate-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;