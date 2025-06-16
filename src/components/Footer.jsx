import React from 'react';
import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const footerLinks = {
    Products: [
      { name: 'EMS', href: '#ems' },
      { name: 'Spotlight', href: '#spotlight' }
    ],
    Solutions: [
      { name: 'MVNO Launchpad', href: '#mvno-launchpad' },
      { name: 'MnO', href: '#mno' }
    ],
    Resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Case studies', href: '#case-studies' },
      { name: 'Events', href: '#events' },
      { name: 'News', href: '#news' }
    ],
    Main: [
      { name: 'About', href: '#about' },
      { name: 'Career', href: '#career' },
      { name: 'Contact', href: '#contact' },
      { name: 'Services', href: '#services' }
    ],
    Legals: [
      { name: 'Cookie policy', href: '#cookie-policy' },
      { name: 'Privacy policy', href: '#privacy-policy' },
      { name: 'Terms of use', href: '#terms-of-use' }
    ]
  };

  const socialLinks = [
    { icon: <FiTwitter />, href: '#twitter', label: 'Twitter' },
    { icon: <FiLinkedin />, href: '#linkedin', label: 'LinkedIn' },
    { icon: <FiFacebook />, href: '#facebook', label: 'Facebook' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Footer Links */}
          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                className="footer-column"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {category}
                </motion.h4>
                <ul>
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15 + linkIndex * 0.1 + 0.3
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href={link.href}
                        whileHover={{
                          x: 5,
                          color: "#0066ff",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                Take Your Brand Mobile.
              </motion.h3>

              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.2 + index * 0.1,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }}
                    whileHover={{
                      scale: 1.2,
                      y: -5,
                      boxShadow: "0 10px 20px rgba(0, 102, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {social.icon}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="footer-logo">
              <motion.div
                className="logo"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 15px 30px rgba(0, 102, 255, 0.4)"
                }}
                viewport={{ once: true }}
              >
              
              </motion.div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="footer-copyright"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 2 }}
              viewport={{ once: true }}
            >
            
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 2.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#design"
                className="design-credit"
                whileHover={{
                  color: "#0066ff",
                  scale: 1.05
                }}
                transition={{ duration: 0.2 }}
              >
               
              </motion.a>
            </motion.p>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--background-section);
          border-top: 1px solid var(--border-color);
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .footer-column h4 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .footer-column ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-column a {
          color: var(--text-secondary);
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-column a:hover {
          color: var(--primary-color);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 0;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .footer-brand h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--background-dark);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
        }

        .footer-logo .logo-placeholder {
          background: var(--gradient-primary);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .footer-copyright {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
        }

        .footer-copyright p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 0;
        }

        .design-credit {
          color: var(--text-muted);
          transition: color 0.3s ease;
        }

        .design-credit:hover {
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 1.5rem;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }

          .footer-brand h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
          }

          .footer-copyright {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer-links {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .footer-column {
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .social-link {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }

          .footer-brand h3 {
            font-size: 1.2rem;
          }

          .footer-copyright p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
