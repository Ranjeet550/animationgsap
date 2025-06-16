import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos = () => {
  const clients = [
    { name: 'Melita', logo: '/logos/melita.png' },
    { name: 'Tele2', logo: '/logos/tele2.png' },
    { name: 'Equitel', logo: '/logos/equitel.png' },
    { name: 'Carrefour Mobile', logo: '/logos/carrefour.png' },
    { name: 'UNDO', logo: '/logos/undo.png' },
    { name: 'Voo', logo: '/logos/voo.png' },
    { name: 'Telenet', logo: '/logos/telenet.png' },
    { name: 'Orange', logo: '/logos/orange.png' },
    { name: 'Airtel', logo: '/logos/airtel.png' },
    { name: 'Neibo', logo: '/logos/neibo.png' },
    { name: 'Vodafone', logo: '/logos/vodafone.png' },
    { name: 'Daily Telecom', logo: '/logos/daily-telecom.png' },
    { name: 'Optima', logo: '/logos/optima.png' },
    { name: 'UnoMobile', logo: '/logos/unomobile.png' },
  ];

  return (
    <section className="client-logos section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            trusted by 100+ of the largest companies
          </motion.h2>
        </motion.div>

        <motion.div
          className="logos-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="logos-track"
            animate={{ x: [0, -50 * clients.length] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="logo-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                animate={{
                  y: [0, -8, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{
                  y: {
                    duration: 3 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  },
                  rotateY: {
                    duration: 4 + (index % 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }
                }}
                whileHover={{
                  scale: 1.15,
                  y: -15,
                  rotateY: 10,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="logo-placeholder"
                  whileHover={{
                    boxShadow: "0 10px 30px rgba(0, 102, 255, 0.2)",
                    borderColor: "#0066ff"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {client.name}
                </motion.div>
                <motion.span
                  className="logo-link"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Read study
                </motion.span>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <motion.div
                key={`duplicate-${index}`}
                className="logo-item"
                animate={{
                  y: [0, -8, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{
                  y: {
                    duration: 3 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2 + 1
                  },
                  rotateY: {
                    duration: 4 + (index % 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3 + 1
                  }
                }}
                whileHover={{
                  scale: 1.15,
                  y: -15,
                  rotateY: 10,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="logo-placeholder"
                  whileHover={{
                    boxShadow: "0 10px 30px rgba(0, 102, 255, 0.2)",
                    borderColor: "#0066ff"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {client.name}
                </motion.div>
                <motion.span
                  className="logo-link"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Read study
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .client-logos {
          background: var(--background-section);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          color: var(--text-secondary);
          font-weight: 400;
          font-size: 1.2rem;
          text-transform: lowercase;
          letter-spacing: 0.5px;
        }

        .logos-container {
          overflow: hidden;
          position: relative;
          mask: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .logos-track {
          display: flex;
          gap: 3rem;
          width: fit-content;
        }

        .logo-item {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 150px;
        }

        .logo-placeholder {
          width: 120px;
          height: 60px;
          background: var(--gradient-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .logo-item:hover .logo-placeholder {
          border-color: var(--primary-color);
          background: rgba(0, 102, 255, 0.1);
          color: var(--primary-color);
        }

        .logo-link {
          color: var(--text-muted);
          font-size: 0.8rem;
          text-decoration: underline;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-item:hover .logo-link {
          opacity: 1;
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .logos-track {
            gap: 2rem;
          }

          .logo-item {
            min-width: 120px;
          }

          .logo-placeholder {
            width: 100px;
            height: 50px;
            font-size: 0.8rem;
          }

          .section-header h2 {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .logos-track {
            gap: 1.5rem;
          }

          .logo-item {
            min-width: 100px;
          }

          .logo-placeholder {
            width: 80px;
            height: 40px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
