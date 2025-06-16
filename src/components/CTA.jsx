import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="cta-text">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to bring your ideas to life?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Let's discuss your project and create something amazing together. Get a free consultation and see how we can transform your digital vision into reality.
            </motion.p>
          </div>

          <motion.div
            className="cta-button"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 50px rgba(0, 102, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#consultation"
              className="btn btn-primary btn-large"
              whileHover={{
                boxShadow: "0 25px 60px rgba(99, 102, 241, 0.5)"
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiCalendar />
              </motion.div>
              Get Free Consultation
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiArrowRight />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Decorative elements */}
          <div className="cta-decorations">
            <motion.div
              className="decoration decoration-1"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="decoration decoration-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }
              }}
            />
            <motion.div
              className="decoration decoration-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="decoration decoration-2"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -8, 0],
                x: [0, 10, 0]
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }
              }}
            />

            {/* Additional floating elements */}
            <motion.div
              className="decoration decoration-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 2 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="decoration decoration-3"
              animate={{
                y: [0, -25, 0],
                x: [0, 15, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .cta {
          background: var(--background-dark);
          position: relative;
          overflow: hidden;
        }

        .cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at center, rgba(0, 102, 255, 0.15) 0%, transparent 70%),
            linear-gradient(45deg, transparent 30%, rgba(0, 102, 255, 0.05) 50%, transparent 70%);
          pointer-events: none;
        }

        .cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .cta-text h2 {
          color: var(--text-primary);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-text p {
          color: var(--text-secondary);
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .cta-button {
          display: flex;
          justify-content: center;
        }

        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          gap: 0.75rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 102, 255, 0.3);
        }

        .btn-large:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 102, 255, 0.4);
        }

        .cta-decorations {
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
          border-radius: 50%;
          background: var(--gradient-primary);
          opacity: 0.1;
        }

        .decoration-1 {
          width: 120px;
          height: 120px;
          top: 10%;
          left: 5%;
        }

        .decoration-2 {
          width: 80px;
          height: 80px;
          bottom: 15%;
          right: 10%;
        }

        .decoration-3 {
          width: 50px;
          height: 50px;
          top: 20%;
          right: 20%;
        }

        @media (max-width: 768px) {
          .cta-content {
            gap: 2rem;
          }

          .cta-text h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .cta-text p {
            font-size: 1rem;
          }

          .btn-large {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
            width: 100%;
            justify-content: center;
          }

          .decoration-1 {
            width: 80px;
            height: 80px;
          }

          .decoration-2 {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .cta-text h2 {
            font-size: 1.8rem;
          }

          .cta-text p {
            font-size: 0.95rem;
          }

          .btn-large {
            padding: 0.75rem 1.25rem;
            font-size: 0.95rem;
          }

          .decoration-1 {
            width: 60px;
            height: 60px;
          }

          .decoration-2 {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
