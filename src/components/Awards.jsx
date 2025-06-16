import React, { useRef } from 'react';
import { motion, useMotionValue, useDragControls } from 'framer-motion';
import { FiAward, FiStar, FiTarget, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import FloatingCard from './FloatingCard.jsx';

const Awards = () => {
  const scrollRef = useRef(null);
  const dragControls = useDragControls();
  const x = useMotionValue(0);

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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

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

        <div className="awards-container">
          {/* Navigation Buttons */}
          <motion.button
            className="scroll-btn scroll-btn-left"
            onClick={scrollLeft}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <FiChevronLeft />
          </motion.button>

          <motion.button
            className="scroll-btn scroll-btn-right"
            onClick={scrollRight}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <FiChevronRight />
          </motion.button>

          {/* Scrollable Awards Track */}
          <motion.div
            className="awards-track"
            ref={scrollRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="awards-scroll-content"
              drag="x"
              dragControls={dragControls}
              dragConstraints={{ left: -1000, right: 0 }}
              dragElastic={0.1}
              style={{ x }}
            >
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="award-card"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="award-year"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.4,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
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
                        delay: index * 0.1 + 0.5,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                      whileHover={{
                        scale: 1.3,
                        rotate: 15,
                        color: "#6366f1"
                      }}
                      viewport={{ once: true }}
                    >
                      {award.icon}
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      {award.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      {award.description}
                    </motion.p>
                  </div>

                  <motion.div
                    className="award-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="image-placeholder"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 15px 35px rgba(99, 102, 241, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      🏆 Certificate
                    </motion.div>
                  </motion.div>

                  {/* Card Glow Effect */}
                  <motion.div
                    className="card-glow"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <span>← Drag or click arrows to explore →</span>
          </motion.div>
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

        .awards-container {
          position: relative;
          overflow: hidden;
          margin-top: 2rem;
        }

        .scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 50%;
          color: var(--primary-color);
          font-size: 1.2rem;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .scroll-btn:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: var(--primary-color);
          box-shadow: 0 5px 20px rgba(99, 102, 241, 0.3);
        }

        .scroll-btn-left {
          left: 1rem;
        }

        .scroll-btn-right {
          right: 1rem;
        }

        .awards-track {
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 2rem 0;
          cursor: grab;
        }

        .awards-track::-webkit-scrollbar {
          display: none;
        }

        .awards-track:active {
          cursor: grabbing;
        }

        .awards-scroll-content {
          display: flex;
          gap: 2rem;
          padding: 0 4rem;
          width: fit-content;
        }

        .award-card {
          background: var(--background-dark);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
          overflow: hidden;
          min-width: 300px;
          max-width: 300px;
          height: 400px;
          flex-shrink: 0;
          transform-style: preserve-3d;
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
          box-shadow: 0 25px 50px rgba(99, 102, 241, 0.2);
          transform: translateY(-10px) rotateY(5deg);
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
          background: rgba(99, 102, 241, 0.05);
          color: var(--primary-color);
        }

        .card-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
          pointer-events: none;
        }

        .scroll-indicator {
          text-align: center;
          margin-top: 2rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .scroll-indicator span {
          background: rgba(99, 102, 241, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        @media (max-width: 768px) {
          .awards-scroll-content {
            padding: 0 2rem;
            gap: 1.5rem;
          }

          .award-card {
            min-width: 280px;
            max-width: 280px;
            height: 380px;
            padding: 1.5rem;
          }

          .scroll-btn {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .scroll-btn-left {
            left: 0.5rem;
          }

          .scroll-btn-right {
            right: 0.5rem;
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

          .scroll-indicator {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .awards-scroll-content {
            padding: 0 1rem;
            gap: 1rem;
          }

          .award-card {
            min-width: 250px;
            max-width: 250px;
            height: 350px;
            padding: 1rem;
            text-align: center;
          }

          .scroll-btn {
            width: 35px;
            height: 35px;
            font-size: 0.9rem;
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

          .scroll-indicator {
            font-size: 0.75rem;
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Awards;
