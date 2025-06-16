import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScrollWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const updateScrollWidth = () => {
        setScrollWidth(scrollElement.scrollWidth - window.innerWidth);
      };

      updateScrollWidth();
      window.addEventListener('resize', updateScrollWidth);
      
      return () => window.removeEventListener('resize', updateScrollWidth);
    }
  }, [children]);

  return (
    <div ref={containerRef} className="horizontal-scroll-wrapper">
      <div className="horizontal-scroll-sticky">
        <motion.div 
          ref={scrollRef}
          className="horizontal-scroll-content"
          style={{ x }}
        >
          {children}
        </motion.div>
      </div>

      <style jsx>{`
        .horizontal-scroll-wrapper {
          position: relative;
          height: 300vh; /* Adjust based on content */
        }

        .horizontal-scroll-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
        }

        .horizontal-scroll-content {
          display: flex;
          height: 100vh;
          will-change: transform;
        }

        .horizontal-scroll-content > * {
          flex-shrink: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .horizontal-scroll-wrapper {
            height: auto;
          }

          .horizontal-scroll-sticky {
            position: relative;
            height: auto;
          }

          .horizontal-scroll-content {
            flex-direction: column;
            height: auto;
          }

          .horizontal-scroll-content > * {
            width: 100%;
            height: auto;
            min-height: 100vh;
          }
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollWrapper;
