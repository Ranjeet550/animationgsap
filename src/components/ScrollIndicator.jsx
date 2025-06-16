import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollIndicator = ({ isVisible = true, direction = 'horizontal' }) => {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIndicator(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || !showIndicator) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="indicator-content"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {direction === 'horizontal' ? (
            <>
              <motion.div 
                className="arrow-container"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="arrow">→</span>
              </motion.div>
              <p>Scroll to explore</p>
            </>
          ) : (
            <>
              <motion.div 
                className="arrow-container"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="arrow">↓</span>
              </motion.div>
              <p>Scroll down</p>
            </>
          )}
        </motion.div>

        <motion.button
          className="close-indicator"
          onClick={() => setShowIndicator(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ×
        </motion.button>

        <style jsx>{`
          .scroll-indicator {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            min-width: 150px;
          }

          .indicator-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .arrow-container {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .arrow {
            font-size: 2rem;
            color: #0066ff;
            font-weight: bold;
          }

          .indicator-content p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            margin: 0;
            text-align: center;
          }

          .close-indicator {
            position: absolute;
            top: 5px;
            right: 10px;
            background: none;
            border: none;
            color: rgba(255, 255, 255, 0.6);
            font-size: 1.2rem;
            cursor: pointer;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .close-indicator:hover {
            color: white;
            background: rgba(255, 255, 255, 0.1);
          }

          @media (max-width: 768px) {
            .scroll-indicator {
              bottom: 20px;
              right: 20px;
              padding: 15px;
              min-width: 120px;
            }

            .arrow {
              font-size: 1.5rem;
            }

            .indicator-content p {
              font-size: 0.8rem;
            }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollIndicator;
