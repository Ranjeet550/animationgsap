import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const HorizontalScrollSection = ({ 
  children, 
  className = "",
  width = "100vw",
  triggerOffset = 0.3,
  parallaxIntensity = 0.5
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    margin: "-20% 0px -20% 0px",
    once: false 
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Horizontal movement based on scroll
  const x = useTransform(
    scrollYProgress, 
    [0, triggerOffset, 1 - triggerOffset, 1], 
    ["-100%", "0%", "0%", "100%"]
  );

  // Parallax effects
  const backgroundX = useTransform(
    scrollYProgress, 
    [0, 1], 
    [`${-50 * parallaxIntensity}%`, `${50 * parallaxIntensity}%`]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, triggerOffset, 1 - triggerOffset, 1],
    [0.8, 1, 1, 0.8]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, triggerOffset, 1 - triggerOffset, 1],
    [0, 1, 1, 0]
  );

  const rotateY = useTransform(
    scrollYProgress,
    [0, triggerOffset, 1 - triggerOffset, 1],
    [-15, 0, 0, 15]
  );

  return (
    <motion.section 
      ref={sectionRef}
      className={`horizontal-scroll-section ${className}`}
      style={{ 
        x,
        scale,
        opacity,
        rotateY,
        width
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isInView ? 1 : 0.3,
        transition: { duration: 0.6 }
      }}
    >
      {/* Background parallax layer */}
      <motion.div 
        className="section-background"
        style={{ x: backgroundX }}
      />
      
      {/* Content */}
      <div className="section-content">
        {children}
      </div>

      <style jsx>{`
        .horizontal-scroll-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .section-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 120%;
          height: 100%;
          background: 
            radial-gradient(circle at 30% 40%, rgba(0, 102, 255, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 70% 60%, rgba(0, 102, 255, 0.05) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
        }

        .section-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        @media (max-width: 768px) {
          .horizontal-scroll-section {
            min-height: auto;
            padding: 3rem 0;
          }
          
          .section-content {
            padding: 0 1rem;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default HorizontalScrollSection;
