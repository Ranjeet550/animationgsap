import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiBarChart2, FiSmartphone, FiSettings } from 'react-icons/fi';

const Interface = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: <FiUsers />,
      title: 'Powerful Self-Service Tools',
      description: 'Customer self-management for reduced support costs and increased satisfaction.',
      number: '01',
      image: '/images/self-service.webp'
    },
    {
      icon: <FiBarChart2 />,
      title: 'Customizable Dashboards',
      description: 'Tailored information access for optimal efficiency.',
      number: '02',
      image: '/images/dashboard.svg'
    },
    {
      icon: <FiSmartphone />,
      title: 'Intuitive User Interface',
      description: 'Easy navigation and user-friendly workflows for faster business growth.',
      number: '03',
      image: '/images/interface.svg'
    },
    {
      icon: <FiSettings />,
      title: 'Automated Workflows',
      description: 'Streamlined processes and elimination of manual tasks for strategic focus.',
      number: '04',
      image: '/images/workflows.svg'
    }
  ];

  return (
    <section className="interface section">
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
            Empower Your Team And Your Customers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Intuitive Interface and Effortless Self-Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Effortel Mobile Suite is designed and engineered to streamline operations, accelerate revenue growth, and deliver exceptional customer experiences.
          </motion.p>
        </motion.div>

        <div className="interface-content">
          <div className="features-tabs">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`feature-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                viewport={{ once: true }}
                whileHover={{
                  x: 15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="tab-number"
                  animate={{
                    scale: activeTab === index ? 1.1 : 1,
                    boxShadow: activeTab === index
                      ? "0 10px 25px rgba(0, 102, 255, 0.4)"
                      : "0 5px 15px rgba(0, 102, 255, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.number}
                </motion.div>
                <div className="tab-content">
                  <motion.div
                    className="tab-icon"
                    animate={{
                      scale: activeTab === index ? 1.2 : 1,
                      color: activeTab === index ? "#0066ff" : "#888888"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="tab-text">
                    <motion.h3
                      animate={{
                        color: activeTab === index ? "#ffffff" : "#cccccc"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      animate={{
                        opacity: activeTab === index ? 1 : 0.7
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="feature-display"
            key={activeTab}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            <motion.div
              className="display-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="image-placeholder"
                animate={{
                  borderColor: "#0066ff",
                  boxShadow: "0 20px 40px rgba(0, 102, 255, 0.2)"
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 102, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {features[activeTab].title} Preview
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .interface {
          background: var(--background-section);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
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
          margin-bottom: 1.5rem;
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .interface-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .features-tabs {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .feature-tab {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          background: var(--background-dark);
          margin-bottom: 1rem;
          transform-style: preserve-3d;
        }

        .feature-tab:hover,
        .feature-tab.active {
          background: var(--background-section);
          border-color: var(--primary-color);
          box-shadow: 0 15px 30px rgba(0, 102, 255, 0.2);
          transform: translateY(-5px);
        }

        .tab-number {
          background: var(--gradient-primary);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .tab-content {
          display: flex;
          gap: 1rem;
          flex: 1;
        }

        .tab-icon {
          color: var(--primary-color);
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .tab-text h3 {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .tab-text p {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        .feature-display {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
        }

        .display-image {
          width: 100%;
          max-width: 500px;
        }

        .image-placeholder {
          width: 100%;
          height: 350px;
          background: var(--gradient-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          font-size: 1.1rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .feature-tab.active ~ .feature-display .image-placeholder,
        .feature-tab:hover ~ .feature-display .image-placeholder {
          border-color: var(--primary-color);
          background: rgba(0, 102, 255, 0.05);
          color: var(--primary-color);
        }

        @media (max-width: 1024px) {
          .interface-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .feature-display {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .interface-content {
            gap: 2rem;
          }

          .feature-tab {
            padding: 1rem;
            gap: 1rem;
          }

          .tab-content {
            flex-direction: column;
            gap: 0.5rem;
          }

          .tab-icon {
            align-self: flex-start;
          }

          .tab-text h3 {
            font-size: 1.1rem;
          }

          .tab-text p {
            font-size: 0.9rem;
          }

          .image-placeholder {
            height: 250px;
            font-size: 1rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .feature-tab {
            flex-direction: column;
            text-align: center;
          }

          .tab-number {
            align-self: center;
          }

          .tab-content {
            align-items: center;
          }

          .tab-icon {
            align-self: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Interface;
