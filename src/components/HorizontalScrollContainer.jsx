import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const HorizontalScrollContainer = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform scroll progress to horizontal movement
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-100%"]);
  
  // Parallax effects for background elements
  const backgroundX = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set up horizontal scroll behavior
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // Already horizontal scrolling, allow it
        return;
      }
      
      // Convert vertical scroll to horizontal
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className={`horizontal-scroll-wrapper ${className}`} ref={containerRef}>
      {/* Background parallax layer */}
      <motion.div 
        className="scroll-background"
        style={{ 
          x: backgroundX,
          opacity: backgroundOpacity
        }}
      />
      
      {/* Main content layer */}
      <motion.div 
        className="horizontal-content"
        style={{ x }}
      >
        {children}
      </motion.div>

      <style jsx>{`
        .horizontal-scroll-wrapper {
          position: relative;
          height: 100vh;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .horizontal-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        .scroll-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 102, 255, 0.05) 0%, transparent 50%),
            linear-gradient(45deg, transparent 30%, rgba(0, 102, 255, 0.03) 50%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .horizontal-content {
          display: flex;
          height: 100%;
          width: fit-content;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .horizontal-scroll-wrapper {
            height: auto;
            overflow-x: auto;
            overflow-y: visible;
          }
          
          .horizontal-content {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollContainer;
