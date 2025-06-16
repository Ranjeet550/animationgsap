import React from 'react';
import { motion } from 'framer-motion';

const SectionTransition = ({ 
  children, 
  isActive = false, 
  direction = 'left',
  className = "" 
}) => {
  const variants = {
    enter: {
      x: direction === 'left' ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      rotateY: direction === 'left' ? 15 : -15
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: {
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0,
      scale: 0.9,
      rotateY: direction === 'left' ? -15 : 15
    }
  };

  return (
    <motion.div
      className={`section-transition ${className}`}
      variants={variants}
      initial="enter"
      animate={isActive ? "center" : "exit"}
      transition={{
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        opacity: { duration: 0.6 },
        scale: { duration: 0.7 },
        rotateY: { duration: 0.8 }
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <motion.div
        className="section-content"
        animate={{
          filter: isActive ? 'blur(0px)' : 'blur(2px)',
          brightness: isActive ? 1 : 0.7
        }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>

      <style jsx>{`
        .section-transition {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }

        .section-content {
          width: 100%;
          height: 100%;
          transition: filter 0.5s ease, brightness 0.5s ease;
        }
      `}</style>
    </motion.div>
  );
};

export default SectionTransition;
