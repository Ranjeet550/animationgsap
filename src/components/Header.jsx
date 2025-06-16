import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Services',
      hasDropdown: true,
      items: [
        { name: 'Web Development', href: '#web-development' },
        { name: 'Mobile Apps', href: '#mobile-apps' },
        { name: 'Enterprise Software', href: '#enterprise-software' },
        { name: 'UI/UX Design', href: '#ui-ux-design' },
      ]
    },
    {
      title: 'Solutions',
      hasDropdown: true,
      items: [
        { name: 'E-commerce Platforms', href: '#ecommerce' },
        { name: 'SaaS Applications', href: '#saas' },
        { name: 'Custom Software', href: '#custom-software' },
      ]
    },
    {
      title: 'Portfolio',
      hasDropdown: true,
      items: [
        { name: 'Case Studies', href: '#portfolio' },
        { name: 'Client Projects', href: '#projects' },
        { name: 'Testimonials', href: '#testimonials' },
      ]
    },
    { title: 'Team', href: '#team' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.2
      }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img src="/logo.svg" alt="DEV SPHERE Logo" />
           
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                {item.hasDropdown ? (
                  <div className="dropdown">
                    <motion.button
                      className="dropdown-trigger"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.title}
                      <motion.div
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiChevronDown />
                      </motion.div>
                    </motion.button>
                    <motion.div
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      whileHover={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.items.map((subItem, subIndex) => (
                        <motion.a
                          key={subIndex}
                          href={subItem.href}
                          className="dropdown-item"
                          whileHover={{ x: 5, backgroundColor: "rgba(0, 102, 255, 0.1)" }}
                          transition={{ duration: 0.2 }}
                        >
                          {subItem.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                ) : (
                  <motion.a
                    href={item.href}
                    className="nav-link"
                    whileHover={{ scale: 1.05, color: "#0066ff" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.a>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <motion.div
            className="header-cta"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            <motion.a
              href="#portfolio"
              className="btn btn-secondary"
              whileHover={{
                scale: 1.05,
                borderColor: "#6366f1",
                boxShadow: "0 5px 15px rgba(99, 102, 241, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View Portfolio
            </motion.a>
            <motion.a
              href="#quote"
              className="btn btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(99, 102, 241, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get Quote
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              {item.hasDropdown ? (
                <div className="mobile-dropdown">
                  <div className="mobile-dropdown-title">{item.title}</div>
                  {item.items.map((subItem, subIndex) => (
                    <a 
                      key={subIndex} 
                      href={subItem.href} 
                      className="mobile-dropdown-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              ) : (
                <a 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
          
          <div className="mobile-cta">
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
            <a href="#meeting" className="btn btn-primary">
              Book a meeting
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(10, 10, 10, 0.95);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo img {
          height: 40px;
          width: auto;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: var(--text-primary);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: var(--primary-color);
        }

        .dropdown {
          position: relative;
        }

        .dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--text-primary);
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .dropdown-trigger:hover {
          color: var(--primary-color);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--background-section);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1rem 0;
          min-width: 250px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: block;
          padding: 0.75rem 1.5rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .dropdown-item:hover {
          background: var(--border-color);
          color: var(--primary-color);
        }

        .header-cta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1.5rem;
          cursor: pointer;
        }

        .mobile-nav {
          display: none;
          overflow: hidden;
        }

        .mobile-nav.open {
          display: block;
        }

        .mobile-nav-item {
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-nav-link {
          display: block;
          padding: 1rem 0;
          color: var(--text-primary);
          font-weight: 500;
        }

        .mobile-dropdown-title {
          padding: 1rem 0;
          color: var(--text-primary);
          font-weight: 600;
        }

        .mobile-dropdown-item {
          display: block;
          padding: 0.75rem 1rem;
          color: var(--text-secondary);
          border-left: 2px solid var(--border-color);
          margin-left: 1rem;
        }

        .mobile-cta {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 2rem 0;
        }

        @media (max-width: 768px) {
          .desktop-nav,
          .header-cta {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-nav {
            display: block;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
