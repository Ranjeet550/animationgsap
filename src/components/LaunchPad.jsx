import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiTarget, FiTrendingUp, FiShield, FiHeadphones, FiSettings } from 'react-icons/fi';
import FloatingCard from './FloatingCard.jsx';

const LaunchPad = () => {
  const features = [
    {
      icon: <FiZap />,
      title: 'Rapid Development',
      description: 'Fast project delivery with agile methodologies and modern development practices.',
      image: '/images/development.svg'
    },
    {
      icon: <FiTarget />,
      title: 'Strategic Planning',
      description: 'Comprehensive project planning from concept to deployment with clear milestones.',
      image: '/images/planning.svg'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Scalable Architecture',
      description: 'Future-proof solutions that grow with your business and adapt to changing needs.',
      image: '/images/scalability.svg'
    },
    {
      icon: <FiShield />,
      title: 'Security First',
      description: 'Enterprise-grade security measures and best practices built into every solution.',
      image: '/images/security.svg'
    },
    {
      icon: <FiHeadphones />,
      title: 'Ongoing Support',
      description: 'Dedicated support team ensuring your applications run smoothly 24/7.',
      image: '/images/support.svg'
    },
    {
      icon: <FiSettings />,
      title: 'Custom Solutions',
      description: 'Tailored software solutions designed specifically for your unique business requirements.',
      image: '/images/custom.svg'
    }
  ];

  return (
    <section className="launchpad section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Development Solutions – Accelerate Your Growth
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From Concept to Launch: Building Your Digital Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            DEV SPHERE's comprehensive development solutions provide everything you need to transform your ideas into powerful, scalable software applications that drive business success.
          </motion.p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FloatingCard
              key={index}
              className="launchpad-card-wrapper"
              delay={index * 0.15}
              direction={index % 4 === 0 ? "up" : index % 4 === 1 ? "right" : index % 4 === 2 ? "down" : "left"}
              intensity={1.5}
              index={index}
              rotateOnHover={true}
              glowEffect={true}
            >
              <motion.div
                className="feature-icon"
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.3,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 15,
                  boxShadow: "0 20px 40px rgba(0, 102, 255, 0.5)"
                }}
                viewport={{ once: true }}
              >
                {feature.icon}
              </motion.div>

              <div className="feature-content">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
              </div>

              <motion.div
                className="feature-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="image-placeholder"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 102, 255, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.title} Visual
                </motion.div>
              </motion.div>
            </FloatingCard>
          ))}
        </div>
      </div>

      <style jsx>{`
        .launchpad {
          background: var(--background-dark);
          position: relative;
        }

        .launchpad::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(0, 102, 255, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 900px;
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: var(--background-section);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .feature-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 15px 40px rgba(0, 102, 255, 0.15);
        }

        .feature-icon {
          background: var(--gradient-primary);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          align-self: flex-start;
        }

        .feature-content h3 {
          color: var(--text-primary);
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .feature-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0;
        }

        .feature-image {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: auto;
        }

        .image-placeholder {
          width: 100%;
          height: 120px;
          background: var(--gradient-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
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

          .feature-icon {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }

          .feature-content h3 {
            font-size: 1.2rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .section-header p {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .feature-card {
            padding: 1rem;
            text-align: center;
          }

          .feature-icon {
            align-self: center;
            width: 45px;
            height: 45px;
            font-size: 1.3rem;
          }

          .feature-content h3 {
            font-size: 1.1rem;
          }

          .feature-content p {
            font-size: 0.9rem;
          }

          .image-placeholder {
            height: 100px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default LaunchPad;
