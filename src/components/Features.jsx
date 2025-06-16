import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiGlobe, FiLayers } from 'react-icons/fi';
import FloatingCard from './FloatingCard.jsx';

const Features = () => {
  const features = [
    {
      icon: <FiCode />,
      title: 'Development',
      subtitle: 'Custom Software Development',
      description: 'Full-stack development solutions tailored to your business needs with cutting-edge technologies.',
      image: '/images/development.png'
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile',
      subtitle: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      image: '/images/mobile.svg'
    },
    {
      icon: <FiGlobe />,
      title: 'Web',
      subtitle: 'Web Applications',
      description: 'Responsive, scalable web applications built with modern frameworks and best practices.',
      image: '/images/web.svg'
    },
    {
      icon: <FiLayers />,
      title: 'Design',
      subtitle: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user engagement and drive business growth.',
      image: '/images/design.svg'
    }
  ];

  return (
    <section className="features section">
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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Innovation, Quality, and Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive Software Solutions
          </motion.h2>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FloatingCard
              key={index}
              className="feature-card-wrapper"
              delay={index * 0.2}
              direction={index % 2 === 0 ? "left" : "right"}
              intensity={1.2}
              index={index}
            >
              <div className="feature-content">
                <div className="feature-header">
                  <motion.div
                    className="feature-icon"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.3,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      boxShadow: "0 15px 30px rgba(0, 102, 255, 0.4)"
                    }}
                    viewport={{ once: true }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="feature-text">
                    <motion.h4
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {feature.title}
                    </motion.h4>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {feature.subtitle}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  className="feature-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="image-placeholder"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 15px 35px rgba(0, 102, 255, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title} Visualization
                  </motion.div>
                </motion.div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features {
          background: var(--background-dark);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: var(--background-section);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .feature-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 10px 30px rgba(0, 102, 255, 0.1);
        }

        .feature-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .feature-header {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .feature-icon {
          background: var(--gradient-primary);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .feature-text h4 {
          color: var(--primary-color);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .feature-text h3 {
          color: var(--text-primary);
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .feature-text p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0;
        }

        .feature-image {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 150px;
        }

        .image-placeholder {
          width: 100%;
          height: 120px;
          background: var(--gradient-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          font-size: 0.9rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .feature-card:hover .image-placeholder {
          border-color: var(--primary-color);
          background: rgba(0, 102, 255, 0.05);
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .feature-card {
            padding: 1.5rem;
          }

          .feature-header {
            flex-direction: column;
            text-align: center;
          }

          .feature-icon {
            align-self: center;
          }

          .section-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .feature-card {
            padding: 1rem;
          }

          .feature-text h3 {
            font-size: 1.1rem;
          }

          .feature-text p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
