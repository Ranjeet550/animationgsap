import React from 'react';
import { motion } from 'framer-motion';
import { FiWifi, FiShield, FiTrendingUp, FiUsers, FiSettings, FiZap, FiGlobe, FiDatabase } from 'react-icons/fi';
import FloatingCard from './FloatingCard.jsx';

const FloatingServices = () => {
  const services = [
    {
      id: 1,
      icon: <FiGlobe />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
      color: "#6366f1"
    },
    {
      id: 2,
      icon: <FiWifi />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      color: "#8b5cf6"
    },
    {
      id: 3,
      icon: <FiDatabase />,
      title: "Backend Systems",
      description: "Scalable server-side architecture and APIs",
      color: "#06b6d4"
    },
    {
      id: 4,
      icon: <FiUsers />,
      title: "UI/UX Design",
      description: "Beautiful, user-centered design experiences",
      color: "#10b981"
    },
    {
      id: 5,
      icon: <FiShield />,
      title: "Security Solutions",
      description: "Enterprise-grade security and data protection",
      color: "#f59e0b"
    },
    {
      id: 6,
      icon: <FiZap />,
      title: "Performance Optimization",
      description: "Speed and performance enhancement services",
      color: "#ef4444"
    },
    {
      id: 7,
      icon: <FiSettings />,
      title: "DevOps & Deployment",
      description: "Automated deployment and infrastructure management",
      color: "#8b5cf6"
    },
    {
      id: 8,
      icon: <FiTrendingUp />,
      title: "Analytics & Insights",
      description: "Data analytics and business intelligence solutions",
      color: "#06b6d4"
    }
  ];

  return (
    <section className="floating-services section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Core Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive Software Development Solutions
          </motion.h2>
        </motion.div>

        <div className="services-container">
          <motion.div 
            className="services-track"
            animate={{ x: [0, -280 * services.length] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set */}
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0],
                  rotateX: [0, 3, 0]
                }}
                transition={{
                  y: { 
                    duration: 5 + (index % 3), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.4
                  },
                  rotateY: { 
                    duration: 7 + (index % 2), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.6
                  },
                  rotateX: { 
                    duration: 6 + (index % 4), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.8
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -30,
                  rotateY: 10,
                  rotateX: 5,
                  z: 150,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                style={{ '--service-color': service.color }}
              >
                <motion.div 
                  className="service-icon"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  {service.icon}
                </motion.div>
                
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  <motion.div 
                    className="service-glow"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {services.map((service, index) => (
              <motion.div 
                key={`duplicate-${service.id}`}
                className="service-card"
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0],
                  rotateX: [0, 3, 0]
                }}
                transition={{
                  y: { 
                    duration: 5 + (index % 3), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.4 + 3
                  },
                  rotateY: { 
                    duration: 7 + (index % 2), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.6 + 3
                  },
                  rotateX: { 
                    duration: 6 + (index % 4), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.8 + 3
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -30,
                  rotateY: 10,
                  rotateX: 5,
                  z: 150,
                  transition: { duration: 0.3 }
                }}
                style={{ '--service-color': service.color }}
              >
                <motion.div 
                  className="service-icon"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  {service.icon}
                </motion.div>
                
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  <motion.div 
                    className="service-glow"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .floating-services {
          background: var(--background-dark);
          overflow: hidden;
          position: relative;
        }

        .floating-services::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(0, 102, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(0, 102, 255, 0.06) 0%, transparent 50%);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }

        .section-subtitle {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          display: block;
        }

        .section-header h2 {
          color: var(--text-primary);
          margin-bottom: 0;
        }

        .services-container {
          position: relative;
          overflow: hidden;
          mask: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .services-track {
          display: flex;
          gap: 2rem;
          width: fit-content;
        }

        .service-card {
          flex-shrink: 0;
          width: 260px;
          height: 300px;
          background: var(--background-section);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
        }

        .service-card:hover {
          border-color: var(--service-color);
          box-shadow: 0 25px 50px rgba(0, 102, 255, 0.2);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: var(--gradient-primary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .service-content {
          position: relative;
          z-index: 2;
        }

        .service-content h3 {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .service-content p {
          color: var(--text-secondary);
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .service-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--service-color) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .service-card {
            width: 220px;
            height: 280px;
            padding: 1.5rem;
          }

          .service-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .services-track {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FloatingServices;
