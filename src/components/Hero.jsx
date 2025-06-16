import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiPlay, FiZap, FiStar, FiTrendingUp } from 'react-icons/fi';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const heroRef = useRef(null);

  // Mouse tracking for magnetic effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for mouse following
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transform mouse position to element movement
  const magneticX = useTransform(mouseXSpring, [-1, 1], [-20, 20]);
  const magneticY = useTransform(mouseYSpring, [-1, 1], [-20, 20]);

  // Typewriter effect words
  const words = [
    "Digital Excellence",
    "Software Innovation",
    "Tech Solutions",
    "Future-Ready Apps"
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Typewriter effect
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Mouse move handler for magnetic effects
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Grid */}
      <div className="background-grid">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="grid-dot"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="floating-orbs">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`orb orb-${i + 1}`}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              x: magneticX,
              y: magneticY
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Enhanced Badge with Holographic Effect */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            whileHover={{
              scale: 1.1,
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(0, 102, 255, 0.4)"
            }}
            style={{
              x: magneticX,
              y: magneticY
            }}
          >
            <motion.div className="badge-glow" />
            <motion.div className="badge-shimmer"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.span
              className="badge-number"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <FiStar />
            </motion.span>

            <motion.div className="badge-content">
              <motion.span
                className="badge-title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                PREMIUM SOFTWARE
              </motion.span>
              <motion.span
                className="badge-subtitle"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                DEVELOPMENT COMPANY
              </motion.span>
            </motion.div>

            <motion.div className="badge-particles">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Advanced Animated Title */}
          <div className="hero-title-container">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div className="title-line">
                <motion.span
                  className="title-word"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                  Crafting
                </motion.span>
                <motion.span
                  className="title-word highlight"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                  Digital Dreams
                </motion.span>
              </motion.div>

              <motion.div className="title-line">
                <motion.span
                  className="title-word"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                  with
                </motion.span>
                <motion.div className="typewriter-container">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      className="title-word typewriter"
                      initial={{ y: 50, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -50, opacity: 0, rotateX: 90 }}
                      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </motion.h1>

            {/* Floating Icons */}
            <div className="title-icons">
              <motion.div
                className="floating-icon icon-1"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiZap />
              </motion.div>
              <motion.div
                className="floating-icon icon-2"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <FiTrendingUp />
              </motion.div>
              <motion.div
                className="floating-icon icon-3"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 90, 180]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <FiStar />
              </motion.div>
            </div>

            {/* Text Morphing Effect */}
            <motion.div className="title-morphing">
              <svg width="100%" height="100%" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0066ff" />
                    <stop offset="50%" stopColor="#00ccff" />
                    <stop offset="100%" stopColor="#0066ff" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 50 100 Q 200 50 350 100 T 650 100"
                  stroke="url(#textGradient)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Advanced CTA Buttons */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 2.2,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            {/* Primary CTA with Liquid Morphing */}
            <motion.div className="cta-wrapper">
              <motion.a
                href="#services"
                className="btn btn-primary advanced"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  x: magneticX,
                  y: magneticY
                }}
              >
                <motion.div className="btn-bg" />
                <motion.div className="btn-glow"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div className="btn-particles">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="btn-particle"
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </motion.div>

                <span className="btn-text">
                  Explore Services
                  <motion.div
                    className="btn-icon"
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <FiArrowRight />
                  </motion.div>
                </span>
              </motion.a>
            </motion.div>

            {/* Secondary CTA with Holographic Effect */}
            <motion.div className="cta-wrapper">
              <motion.a
                href="#demo"
                className="btn btn-secondary advanced"
                whileHover={{
                  scale: 1.05,
                  rotateY: -5
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  x: useTransform(magneticX, [0, 20], [0, -10]),
                  y: useTransform(magneticY, [0, 20], [0, -10])
                }}
              >
                <motion.div className="btn-hologram"
                  animate={{
                    background: [
                      'linear-gradient(45deg, transparent, rgba(0,102,255,0.1), transparent)',
                      'linear-gradient(45deg, transparent, rgba(0,204,255,0.1), transparent)',
                      'linear-gradient(45deg, transparent, rgba(0,102,255,0.1), transparent)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div className="btn-border" />

                <span className="btn-text">
                  <motion.div
                    className="btn-icon"
                    whileHover={{
                      scale: 1.3,
                      rotate: 360
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <FiPlay />
                  </motion.div>
                  Watch Demo
                </span>
              </motion.a>
            </motion.div>

            {/* Floating Action Hint */}
            <motion.div
              className="action-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↓ Scroll to explore
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Advanced 3D Floating Elements */}
          <div className="hero-decorations">
            {/* Morphing Geometric Shapes */}
            <motion.div
              className="decoration geometric-1"
              initial={{ opacity: 0, scale: 0, rotateX: -90 }}
              animate={{
                opacity: 0.7,
                scale: 1,
                rotateX: 0,
                y: [0, -30, 0],
                rotateY: [0, 360, 0],
                rotateZ: [0, 180, 0]
              }}
              transition={{
                opacity: { duration: 1, delay: 2 },
                scale: { duration: 1, delay: 2 },
                rotateX: { duration: 1, delay: 2 },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                rotateZ: { duration: 15, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                x: magneticX,
                y: magneticY
              }}
            />

            {/* Liquid Blob */}
            <motion.div
              className="decoration liquid-blob"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.4,
                scale: [1, 1.3, 1],
                borderRadius: ["30%", "60%", "30%"],
                rotate: [0, 180, 360]
              }}
              transition={{
                opacity: { duration: 1, delay: 2.5 },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                borderRadius: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 25, repeat: Infinity, ease: "linear" }
              }}
            />

            {/* Holographic Rings */}
            <motion.div className="holographic-rings">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="holo-ring"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0.5, 2, 0.5],
                    rotate: [0, 360, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Floating Data Particles */}
            <div className="data-particles">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="data-particle"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -100, -200],
                    x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>

            {/* Energy Waves */}
            <motion.div className="energy-waves">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="energy-wave"
                  animate={{
                    scale: [0, 3, 0],
                    opacity: [0.8, 0, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Neural Network Lines */}
            <svg className="neural-network" width="100%" height="100%">
              <defs>
                <linearGradient id="neuralGradient">
                  <stop offset="0%" stopColor="rgba(0,102,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(0,204,255,0.2)" />
                </linearGradient>
              </defs>
              {[...Array(8)].map((_, i) => (
                <motion.line
                  key={i}
                  x1={`${10 + i * 12}%`}
                  y1="20%"
                  x2={`${20 + i * 10}%`}
                  y2="80%"
                  stroke="url(#neuralGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background:
            radial-gradient(ellipse at 20% 30%, rgba(0, 102, 255, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(0, 204, 255, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%);
          overflow: hidden;
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        /* Background Grid */
        .background-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          grid-template-rows: repeat(5, 1fr);
          gap: 2px;
          opacity: 0.3;
          z-index: 1;
        }

        .grid-dot {
          width: 4px;
          height: 4px;
          background: var(--primary-color);
          border-radius: 50%;
          justify-self: center;
          align-self: center;
        }

        /* Floating Orbs */
        .floating-orbs {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 102, 255, 0.6) 0%, transparent 70%);
          filter: blur(1px);
        }

        .orb-1 { width: 60px; height: 60px; top: 10%; left: 10%; }
        .orb-2 { width: 40px; height: 40px; top: 20%; right: 15%; }
        .orb-3 { width: 80px; height: 80px; bottom: 30%; left: 20%; }
        .orb-4 { width: 30px; height: 30px; top: 60%; right: 25%; }
        .orb-5 { width: 50px; height: 50px; bottom: 20%; right: 10%; }
        .orb-6 { width: 35px; height: 35px; top: 40%; left: 5%; }
        .orb-7 { width: 70px; height: 70px; bottom: 10%; left: 40%; }
        .orb-8 { width: 25px; height: 25px; top: 30%; right: 40%; }

        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding-top: 120px;
        }

        /* Enhanced Badge Styles */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 102, 255, 0.3);
          border-radius: 60px;
          padding: 1rem 2rem;
          margin-bottom: 3rem;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .badge-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: radial-gradient(circle, rgba(0, 102, 255, 0.3) 0%, transparent 70%);
          z-index: 1;
        }

        .badge-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          z-index: 2;
        }

        .badge-number {
          background: var(--gradient-primary);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          position: relative;
          z-index: 3;
          box-shadow: 0 10px 25px rgba(0, 102, 255, 0.4);
        }

        .badge-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          z-index: 3;
        }

        .badge-title {
          color: var(--primary-color);
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 1px;
        }

        .badge-subtitle {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
        }

        .badge-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--primary-color);
          border-radius: 50%;
          top: 50%;
          left: 50%;
        }

        /* Advanced Title Styles */
        .hero-title-container {
          position: relative;
          margin-bottom: 4rem;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0;
          position: relative;
          z-index: 2;
        }

        .title-line {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .title-word {
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transform-style: preserve-3d;
        }

        .title-word.highlight {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(0, 102, 255, 0.5);
        }

        .typewriter-container {
          position: relative;
          min-width: 400px;
          height: 1.2em;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .typewriter {
          position: absolute;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
        }

        .title-icons {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-icon {
          position: absolute;
          color: var(--primary-color);
          font-size: 2rem;
          opacity: 0.6;
        }

        .icon-1 { top: 10%; left: 10%; }
        .icon-2 { top: 20%; right: 15%; }
        .icon-3 { bottom: 30%; right: 20%; }

        .title-morphing {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* Advanced CTA Styles */
        .hero-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          position: relative;
        }

        .cta-wrapper {
          position: relative;
        }

        .btn.advanced {
          position: relative;
          padding: 1.2rem 2.5rem;
          border-radius: 60px;
          font-weight: 600;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transform-style: preserve-3d;
          transition: all 0.3s ease;
        }

        .btn-primary.advanced {
          background: var(--gradient-primary);
          color: white;
          box-shadow: 0 15px 35px rgba(0, 102, 255, 0.4);
        }

        .btn-secondary.advanced {
          background: transparent;
          color: var(--text-primary);
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .btn-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-primary);
          z-index: 1;
        }

        .btn-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: radial-gradient(circle, rgba(0, 102, 255, 0.6) 0%, transparent 70%);
          z-index: 1;
        }

        .btn-hologram {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .btn-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid transparent;
          border-radius: 60px;
          background: linear-gradient(45deg, rgba(0, 102, 255, 0.5), rgba(0, 204, 255, 0.5)) border-box;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          z-index: 2;
        }

        .btn-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .btn-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          top: 50%;
          left: 50%;
        }

        .btn-text {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .btn-icon {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
        }

        .action-hint {
          position: absolute;
          bottom: -3rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-muted);
          font-size: 0.9rem;
          opacity: 0.7;
        }

        /* Advanced Decorations */
        .hero-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .decoration {
          position: absolute;
        }

        .geometric-1 {
          width: 120px;
          height: 120px;
          top: 15%;
          left: 8%;
          background: linear-gradient(45deg, rgba(0, 102, 255, 0.3), rgba(0, 204, 255, 0.1));
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          transform-style: preserve-3d;
        }

        .liquid-blob {
          width: 200px;
          height: 200px;
          top: 60%;
          right: 10%;
          background: radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, rgba(0, 204, 255, 0.1) 50%, transparent 100%);
          filter: blur(2px);
        }

        .holographic-rings {
          position: absolute;
          top: 30%;
          right: 20%;
          width: 150px;
          height: 150px;
        }

        .holo-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid rgba(0, 102, 255, 0.4);
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }

        .data-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .data-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: var(--primary-color);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 102, 255, 0.8);
        }

        .energy-waves {
          position: absolute;
          bottom: 20%;
          left: 15%;
          width: 100px;
          height: 100px;
        }

        .energy-wave {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border: 1px solid rgba(0, 102, 255, 0.3);
          border-radius: 50%;
        }

        .neural-network {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.4;
        }

        /* Enhanced Responsive Styles */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: clamp(2.5rem, 6vw, 4rem);
          }

          .title-line {
            gap: 1rem;
          }

          .typewriter-container {
            min-width: 300px;
          }

          .floating-icon {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding-top: 100px;
            max-width: 100%;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .hero-badge {
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
            text-align: center;
            margin-bottom: 2rem;
          }

          .badge-content {
            align-items: center;
          }

          .hero-title {
            font-size: clamp(2rem, 8vw, 3rem);
            margin-bottom: 3rem;
          }

          .title-line {
            flex-direction: column;
            gap: 0.5rem;
          }

          .typewriter-container {
            min-width: 250px;
          }

          .hero-cta {
            flex-direction: column;
            gap: 1rem;
          }

          .btn.advanced {
            width: 100%;
            justify-content: center;
            padding: 1rem 2rem;
          }

          .floating-orbs,
          .title-icons,
          .neural-network {
            display: none;
          }

          .geometric-1 {
            width: 80px;
            height: 80px;
          }

          .liquid-blob {
            width: 120px;
            height: 120px;
          }

          .holographic-rings {
            width: 100px;
            height: 100px;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding-top: 80px;
          }

          .hero-badge {
            padding: 1rem;
            margin-bottom: 1.5rem;
          }

          .badge-number {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .badge-title {
            font-size: 0.9rem;
          }

          .badge-subtitle {
            font-size: 0.8rem;
          }

          .hero-title {
            font-size: clamp(1.8rem, 10vw, 2.5rem);
            margin-bottom: 2rem;
          }

          .typewriter-container {
            min-width: 200px;
          }

          .btn.advanced {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
          }

          .action-hint {
            bottom: -2rem;
            font-size: 0.8rem;
          }

          .background-grid {
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(4, 1fr);
          }

          .data-particles {
            display: none;
          }
        }

        /* Performance optimizations */
        @media (prefers-reduced-motion: reduce) {
          .hero-decorations,
          .floating-orbs,
          .background-grid,
          .data-particles,
          .energy-waves {
            display: none;
          }

          .hero-badge,
          .hero-title,
          .hero-cta {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
