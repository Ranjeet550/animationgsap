import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator.jsx';

const EnhancedHorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring animation for better performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -scrollWidth]);

  // Progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const updateScrollWidth = () => {
        const totalWidth = scrollElement.scrollWidth - window.innerWidth;
        setScrollWidth(totalWidth);
      };

      updateScrollWidth();
      window.addEventListener('resize', updateScrollWidth);
      
      return () => window.removeEventListener('resize', updateScrollWidth);
    }
  }, [children]);

  // Track current section based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const totalSections = React.Children.count(children);
      const sectionIndex = Math.floor(progress * totalSections);
      setCurrentSection(Math.max(0, Math.min(sectionIndex, totalSections - 1)));
      setIsInView(progress > 0.05 && progress < 0.95);
    });

    return unsubscribe;
  }, [scrollYProgress, children]);

  // Section navigation
  const navigateToSection = (index) => {
    const container = containerRef.current;
    if (container) {
      const totalSections = React.Children.count(children);
      const targetProgress = index / totalSections;
      const targetScroll = container.offsetTop + 
                          (targetProgress * container.offsetHeight);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="enhanced-horizontal-scroll">
      {/* Progress Bar */}
      <motion.div 
        className="scroll-progress-bar"
        style={{ 
          scaleX: progressWidth,
          opacity: isInView ? 1 : 0
        }}
      />

      {/* Section Indicators */}
      <motion.div 
        className="section-indicators"
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {React.Children.map(children, (_, index) => (
          <motion.button
            key={index}
            className={`indicator ${index === currentSection ? 'active' : ''}`}
            onClick={() => navigateToSection(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              backgroundColor: index === currentSection ? '#0066ff' : 'rgba(255,255,255,0.3)',
              scale: index === currentSection ? 1.2 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="indicator-number">{index + 1}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator
        isVisible={currentSection === 0 && isInView}
        direction="horizontal"
      />

      {/* Sticky Container */}
      <div className="horizontal-sticky">
        <motion.div 
          ref={scrollRef}
          className="horizontal-content"
          style={{ x }}
        >
          {React.Children.map(children, (child, index) => (
            <motion.div
              key={index}
              className="horizontal-section"
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{
                opacity: index === currentSection ? 1 : 0.7,
                scale: index === currentSection ? 1 : 0.95,
                filter: index === currentSection ? 'blur(0px)' : 'blur(1px)'
              }}
              transition={{ duration: 0.5 }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .enhanced-horizontal-scroll {
          position: relative;
          height: 400vh; /* Adjust based on number of sections */
        }

        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #0066ff, #00ccff);
          transform-origin: left;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 102, 255, 0.3);
        }

        .section-indicators {
          position: fixed;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 1000;
        }

        .indicator {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .indicator:hover {
          border-color: #0066ff;
          box-shadow: 0 5px 15px rgba(0, 102, 255, 0.3);
        }

        .indicator.active {
          border-color: #0066ff;
          box-shadow: 0 10px 25px rgba(0, 102, 255, 0.5);
        }

        .indicator-number {
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          z-index: 2;
        }

        .navigation-hints {
          position: fixed;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
        }

        .hint-content {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(15px);
          padding: 15px 25px;
          border-radius: 30px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .scroll-icon {
          color: #0066ff;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .hint-content p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin: 0;
        }

        .horizontal-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
        }

        .horizontal-content {
          display: flex;
          height: 100vh;
          will-change: transform;
        }

        .horizontal-section {
          flex-shrink: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        @media (max-width: 768px) {
          .enhanced-horizontal-scroll {
            height: auto;
          }

          .horizontal-sticky {
            position: relative;
            height: auto;
          }

          .horizontal-content {
            flex-direction: column;
            height: auto;
          }

          .horizontal-section {
            width: 100%;
            height: auto;
            min-height: 100vh;
          }

          .section-indicators {
            right: 15px;
            gap: 10px;
          }

          .indicator {
            width: 40px;
            height: 40px;
          }

          .indicator-number {
            font-size: 0.8rem;
          }

          .navigation-hints {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default EnhancedHorizontalScroll;
