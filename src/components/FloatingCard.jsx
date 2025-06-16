import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const FloatingCard = ({ 
  children, 
  className = "",
  delay = 0,
  direction = "up",
  intensity = 1,
  rotateOnHover = true,
  glowEffect = true,
  parallaxEffect = true,
  index = 0
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    margin: "-100px 0px -100px 0px",
    once: false 
  });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms based on scroll
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [50 * intensity, -50 * intensity]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [5, 0, -5]
  );

  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-3, 0, 3]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  // Direction-based initial positions
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -100, y: 0, rotateY: -15 };
      case "right":
        return { x: 100, y: 0, rotateY: 15 };
      case "up":
        return { x: 0, y: 100, rotateX: 15 };
      case "down":
        return { x: 0, y: -100, rotateX: -15 };
      default:
        return { x: 0, y: 50, scale: 0.8 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      ref={cardRef}
      className={`floating-card ${className}`}
      initial={{
        opacity: 0,
        scale: 0.8,
        ...initialPos
      }}
      animate={{
        opacity: isInView ? 1 : 0.3,
        scale: isInView ? 1 : 0.9,
        x: isInView ? 0 : initialPos.x * 0.5,
        y: isInView ? 0 : initialPos.y * 0.5,
        rotateX: isInView ? 0 : initialPos.rotateX || 0,
        rotateY: isInView ? 0 : initialPos.rotateY || 0
      }}
      transition={{
        duration: 0.8,
        delay: delay + index * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      style={{
        y: parallaxEffect ? y : 0,
        rotateX: parallaxEffect ? rotateX : 0,
        rotateY: parallaxEffect ? rotateY : 0,
        scale: parallaxEffect ? scale : 1,
        opacity: parallaxEffect ? opacity : 1
      }}
      whileHover={{
        scale: 1.05,
        rotateY: rotateOnHover ? 5 : 0,
        rotateX: rotateOnHover ? 3 : 0,
        z: 50,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Floating Animation */}
      <motion.div
        className="card-float-container"
        animate={{
          y: [0, -10, 0],
          rotateZ: [0, 1, 0, -1, 0]
        }}
        transition={{
          duration: 4 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5
        }}
      >
        {/* Glow Effect */}
        {glowEffect && (
          <motion.div
            className="card-glow"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3
            }}
          />
        )}

        {/* Card Content */}
        <div className="card-content">
          {children}
        </div>

        {/* Floating Particles */}
        <div className="card-particles">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-particle"
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5 + index * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Shimmer Effect */}
        <motion.div
          className="card-shimmer"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4
          }}
        />
      </motion.div>

      <style jsx>{`
        .floating-card {
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .card-float-container {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .card-glow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(
            circle,
            rgba(0, 102, 255, 0.3) 0%,
            rgba(0, 204, 255, 0.1) 50%,
            transparent 100%
          );
          border-radius: 20px;
          z-index: 1;
          filter: blur(10px);
        }

        .card-content {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 100%;
          background: var(--background-dark);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .floating-card:hover .card-content {
          border-color: rgba(0, 102, 255, 0.5);
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(0, 102, 255, 0.3),
            0 0 30px rgba(0, 102, 255, 0.2);
        }

        .card-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 2;
        }

        .floating-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--primary-color);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 102, 255, 0.8);
        }

        .floating-particle:nth-child(1) { top: 20%; left: 10%; }
        .floating-particle:nth-child(2) { top: 30%; right: 15%; }
        .floating-particle:nth-child(3) { bottom: 40%; left: 20%; }
        .floating-particle:nth-child(4) { bottom: 30%; right: 25%; }
        .floating-particle:nth-child(5) { top: 60%; left: 50%; }
        .floating-particle:nth-child(6) { bottom: 20%; right: 40%; }

        .card-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          z-index: 4;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .card-glow {
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
          }

          .floating-particle {
            width: 3px;
            height: 3px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .card-float-container,
          .card-glow,
          .floating-particle,
          .card-shimmer {
            animation: none;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default FloatingCard;
