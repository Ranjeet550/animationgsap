import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiTarget } from 'react-icons/fi';
import FloatingCard from './FloatingCard.jsx';

const Awards = () => {
  const awards = [
    {
      year: '2024',
      title: 'Best Software Development Company',
      description: 'Awarded for excellence in custom software development and innovative solutions',
      icon: <FiTarget />,
      image: '/images/award-2024-software.webp'
    },
    {
      year: '2024',
      title: 'Top Web Development Agency',
      description: 'Recognizing outstanding web development services and client satisfaction',
      icon: <FiStar />,
      image: '/images/award-web-dev.webp'
    },
    {
      year: '2023',
      title: 'Innovation in Mobile App Development',
      description: 'Honoring excellence in mobile application development and user experience',
      icon: <FiAward />,
      image: '/images/award-mobile-innovation.png'
    },
    {
      year: '2023',
      title: 'Best UI/UX Design Studio',
      description: 'Recognizing exceptional design capabilities and user-centered approach',
      icon: <FiTarget />,
      image: '/images/award-design-studio.png'
    },
    {
      year: '2022',
      title: 'Enterprise Software Excellence',
      description: 'Awarded for delivering robust enterprise-grade software solutions',
      icon: <FiAward />,
      image: '/images/award-enterprise-2022.png'
    },
    {
      year: '2022',
      title: 'Client Satisfaction Award',
      description: 'Recognizing outstanding client service and project delivery excellence',
      icon: <FiStar />,
      image: '/images/award-client-satisfaction.png'
    }
  ];

  return (
    <section className="awards section">
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
            Industry Recognition and Awards
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Recognized for Excellence in Software Development
          </motion.h2>
        </motion.div>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <FloatingCard
              key={index}
              className="award-card-wrapper"
              delay={index * 0.2}
              direction={index % 3 === 0 ? "up" : index % 3 === 1 ? "left" : "right"}
              intensity={1.3}
              index={index}
              rotateOnHover={true}
              glowEffect={true}
            >
              <motion.div
                className="award-year"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15 + 0.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                whileHover={{ scale: 1.2 }}
                viewport={{ once: true }}
              >
                <span>{award.year}</span>
              </motion.div>

              <div className="award-content">
                <motion.div
                  className="award-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15 + 0.3,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  whileHover={{
                    scale: 1.4,
                    rotate: 20,
                    color: "#0066ff"
                  }}
                  viewport={{ once: true }}
                >
                  {award.icon}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {award.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {award.description}
                </motion.p>
              </div>

              <motion.div
                className="award-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="image-placeholder"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(0, 102, 255, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Award Certificate
                </motion.div>
              </motion.div>
            </FloatingCard>
          ))}
        </div>
      </div>

      <style jsx>{`
        .awards {
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
          margin-bottom: 0;
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .award-card {
          background: var(--background-dark);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .award-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .award-card:hover::before {
          transform: scaleX(1);
        }

        .award-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 15px 40px rgba(0, 102, 255, 0.15);
        }

        .award-year {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--gradient-primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .award-content {
          padding-top: 1rem;
        }

        .award-icon {
          color: var(--primary-color);
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .award-content h3 {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .award-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        .award-image {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder {
          width: 100%;
          height: 80px;
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

        .award-card:hover .image-placeholder {
          border-color: var(--primary-color);
          background: rgba(0, 102, 255, 0.05);
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .awards-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }

          .award-card {
            padding: 1.5rem;
          }

          .award-year {
            position: static;
            align-self: flex-start;
            margin-bottom: 0.5rem;
          }

          .award-content {
            padding-top: 0;
          }

          .award-icon {
            font-size: 1.8rem;
          }

          .award-content h3 {
            font-size: 1.1rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .awards-grid {
            grid-template-columns: 1fr;
          }

          .award-card {
            padding: 1rem;
            text-align: center;
          }

          .award-year {
            align-self: center;
          }

          .award-content h3 {
            font-size: 1rem;
          }

          .award-content p {
            font-size: 0.9rem;
          }

          .image-placeholder {
            height: 60px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Awards;
