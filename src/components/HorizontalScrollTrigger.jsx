import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const HorizontalScrollTrigger = ({ children, sections = [] }) => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isHorizontalMode, setIsHorizontalMode] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate total width needed for horizontal scroll
  const totalWidth = sections.length * 100; // 100vw per section
  
  // Transform vertical scroll to horizontal movement
  const x = useTransform(
    smoothProgress, 
    [0, 1], 
    [0, -(totalWidth - 100)] // Move from 0 to negative total width
  );

  // Progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      
      // Check if we're in the horizontal scroll zone
      const inHorizontalZone = scrollTop >= containerTop && 
                              scrollTop <= containerTop + containerHeight;
      
      setIsHorizontalMode(inHorizontalZone);

      // Calculate current section
      if (inHorizontalZone) {
        const progress = (scrollTop - containerTop) / containerHeight;
        const sectionIndex = Math.floor(progress * sections.length);
        setCurrentSection(Math.max(0, Math.min(sectionIndex, sections.length - 1)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isHorizontalMode) return;

      if (e.key === 'ArrowLeft' && currentSection > 0) {
        const targetSection = currentSection - 1;
        const container = containerRef.current;
        const scrollTarget = container.offsetTop + 
                           (targetSection / sections.length) * container.offsetHeight;
        window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight' && currentSection < sections.length - 1) {
        const targetSection = currentSection + 1;
        const container = containerRef.current;
        const scrollTarget = container.offsetTop + 
                           (targetSection / sections.length) * container.offsetHeight;
        window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isHorizontalMode, currentSection, sections.length]);

  return (
    <div className="horizontal-scroll-trigger" ref={containerRef}>
      {/* Progress indicator */}
      <motion.div className="scroll-progress">
        <motion.div 
          className="progress-bar"
          style={{ width: progressWidth }}
        />
        <div className="progress-text">
          {currentSection + 1} / {sections.length}
        </div>
      </motion.div>

      {/* Section indicators */}
      <div className="section-indicators">
        {sections.map((_, index) => (
          <motion.div
            key={index}
            className={`indicator ${index === currentSection ? 'active' : ''}`}
            animate={{
              scale: index === currentSection ? 1.2 : 1,
              opacity: index === currentSection ? 1 : 0.5
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Horizontal scroll container */}
      <div className="horizontal-container">
        <motion.div 
          className="horizontal-track"
          style={{ x: `${x}vw` }}
        >
          {children}
        </motion.div>
      </div>

      {/* Navigation hints */}
      {isHorizontalMode && (
        <motion.div 
          className="navigation-hints"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="hint">
            <span>← →</span>
            <p>Use arrow keys or scroll to navigate</p>
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .horizontal-scroll-trigger {
          position: relative;
          height: ${sections.length * 100}vh;
          overflow: hidden;
        }

        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1000;
        }

        .progress-bar {
          height: 100%;
          background: var(--gradient-primary);
          transition: width 0.1s ease;
        }

        .progress-text {
          position: absolute;
          top: 10px;
          right: 20px;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .section-indicators {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 1000;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--text-muted);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: var(--primary-color);
          box-shadow: 0 0 10px rgba(0, 102, 255, 0.5);
        }

        .horizontal-container {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
        }

        .horizontal-track {
          display: flex;
          height: 100%;
          will-change: transform;
        }

        .navigation-hints {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
        }

        .hint {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 25px;
          text-align: center;
          border: 1px solid var(--border-color);
        }

        .hint span {
          color: var(--primary-color);
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 5px;
          display: block;
        }

        .hint p {
          color: var(--text-secondary);
          font-size: 0.8rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .horizontal-scroll-trigger {
            height: auto;
          }

          .horizontal-container {
            position: relative;
            height: auto;
          }

          .horizontal-track {
            flex-direction: column;
          }

          .section-indicators,
          .navigation-hints {
            display: none;
          }

          .progress-text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollTrigger;
