import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const ScrollTriggeredGrid = ({ 
  children, 
  className = "",
  columns = 3,
  gap = "2rem",
  staggerDelay = 0.1,
  animationType = "cascade",
  intensity = 1
}) => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { 
    margin: "-100px 0px -100px 0px",
    once: false 
  });

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"]
  });

  // Grid-level parallax effects
  const gridY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const gridScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  // Animation variants for different types
  const getAnimationVariants = (index) => {
    const baseDelay = index * staggerDelay;
    
    switch (animationType) {
      case "cascade":
        return {
          initial: { 
            opacity: 0, 
            y: 100, 
            scale: 0.8,
            rotateX: 15 
          },
          animate: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            rotateX: 0 
          },
          transition: {
            duration: 0.8,
            delay: baseDelay,
            ease: [0.6, -0.05, 0.01, 0.99]
          }
        };
      
      case "wave":
        return {
          initial: { 
            opacity: 0, 
            y: 50 + Math.sin(index * 0.5) * 30,
            x: Math.cos(index * 0.5) * 20,
            scale: 0.9 
          },
          animate: { 
            opacity: 1, 
            y: 0, 
            x: 0,
            scale: 1 
          },
          transition: {
            duration: 0.6,
            delay: baseDelay,
            ease: "easeOut"
          }
        };
      
      case "spiral":
        const angle = (index * 45) * (Math.PI / 180);
        return {
          initial: { 
            opacity: 0, 
            x: Math.cos(angle) * 100,
            y: Math.sin(angle) * 100,
            scale: 0.5,
            rotate: angle * (180 / Math.PI)
          },
          animate: { 
            opacity: 1, 
            x: 0, 
            y: 0,
            scale: 1,
            rotate: 0
          },
          transition: {
            duration: 1,
            delay: baseDelay,
            ease: [0.6, -0.05, 0.01, 0.99]
          }
        };
      
      default:
        return {
          initial: { opacity: 0, y: 50, scale: 0.9 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.6, delay: baseDelay }
        };
    }
  };

  return (
    <motion.div
      ref={gridRef}
      className={`scroll-triggered-grid ${className}`}
      style={{
        y: gridY,
        scale: gridScale,
        opacity: gridOpacity
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Grid Background Effect */}
      <motion.div 
        className="grid-background"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(0, 102, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(0, 102, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(0, 102, 255, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Grid Lines */}
      <div className="grid-lines">
        {[...Array(columns + 1)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="grid-line vertical"
            style={{ left: `${(i / columns) * 100}%` }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleY: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
        {[...Array(Math.ceil(React.Children.count(children) / columns) + 1)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="grid-line horizontal"
            style={{ top: `${i * 33.33}%` }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleX: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Grid Items */}
      <div className="grid-items">
        {React.Children.map(children, (child, index) => {
          const variants = getAnimationVariants(index);
          
          return (
            <motion.div
              key={index}
              className="grid-item"
              initial={variants.initial}
              animate={isInView ? variants.animate : variants.initial}
              transition={variants.transition}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Floating Animation */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotateZ: [0, 0.5, 0]
                }}
                transition={{
                  duration: 4 + (index % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              >
                {child}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <style jsx>{`
        .scroll-triggered-grid {
          position: relative;
          width: 100%;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .grid-background {
          position: absolute;
          top: -50px;
          left: -50px;
          right: -50px;
          bottom: -50px;
          z-index: 1;
          pointer-events: none;
        }

        .grid-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          pointer-events: none;
        }

        .grid-line {
          position: absolute;
          background: linear-gradient(
            to right,
            transparent,
            rgba(0, 102, 255, 0.3),
            transparent
          );
        }

        .grid-line.vertical {
          width: 1px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(0, 102, 255, 0.3),
            transparent
          );
        }

        .grid-line.horizontal {
          width: 100%;
          height: 1px;
        }

        .grid-items {
          display: grid;
          grid-template-columns: repeat(${columns}, 1fr);
          gap: ${gap};
          position: relative;
          z-index: 3;
        }

        .grid-item {
          transform-style: preserve-3d;
        }

        @media (max-width: 1024px) {
          .grid-items {
            grid-template-columns: repeat(${Math.max(2, columns - 1)}, 1fr);
          }
        }

        @media (max-width: 768px) {
          .grid-items {
            grid-template-columns: repeat(${Math.max(1, columns - 2)}, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .grid-items {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .grid-lines,
          .grid-background {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ScrollTriggeredGrid;
