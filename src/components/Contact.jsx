import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiGlobe } from 'react-icons/fi';
import FloatingCard from './FloatingCard.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email Us",
      details: "hello@devsphere.com",
      subDetails: "We'll respond within 24 hours",
      color: "#6366f1"
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subDetails: "Mon-Fri 9AM-6PM EST",
      color: "#8b5cf6"
    },
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      details: "123 Tech Street, Suite 100",
      subDetails: "San Francisco, CA 94105",
      color: "#06b6d4"
    },
    {
      icon: <FiClock />,
      title: "Business Hours",
      details: "Monday - Friday",
      subDetails: "9:00 AM - 6:00 PM EST",
      color: "#10b981"
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "Enterprise Software",
    "DevOps & Cloud",
    "Consulting",
    "Other"
  ];

  const budgetRanges = [
    "Under $10K",
    "$10K - $25K",
    "$25K - $50K",
    "$50K - $100K",
    "$100K+",
    "Let's Discuss"
  ];

  return (
    <section className="contact section">
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
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="section-description"
          >
            Ready to transform your ideas into reality? We'd love to hear about your project 
            and discuss how we can help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact Information
            </motion.h3>
            
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <FloatingCard
                  key={index}
                  className="info-card-wrapper"
                  delay={index * 0.1}
                  direction="up"
                  intensity={0.8}
                  index={index}
                >
                  <div className="info-card" style={{ '--info-color': info.color }}>
                    <motion.div
                      className="info-icon"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1 + 0.3,
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      viewport={{ once: true }}
                    >
                      {info.icon}
                    </motion.div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      <p className="info-details">{info.details}</p>
                      <p className="info-sub">{info.subDetails}</p>
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <FloatingCard
              className="form-wrapper"
              delay={0.4}
              direction="right"
              intensity={1}
              glowEffect={true}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Send us a Message
              </motion.h3>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <motion.input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <motion.input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <motion.select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                      transition={{ duration: 0.2 }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </motion.select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <motion.select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                      transition={{ duration: 0.2 }}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </motion.select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Tell us about your project, goals, and requirements..."
                    required
                    whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <FiGlobe />
                    </motion.div>
                  ) : (
                    <FiSend />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.form>
            </FloatingCard>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: var(--background-dark);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-subtitle {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          display: block;
        }

        .section-header h2 {
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .section-description {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .info-grid {
          display: grid;
          gap: 1.5rem;
        }

        .info-card {
          background: var(--background-section);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          border-color: var(--info-color);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
        }

        .info-icon {
          width: 50px;
          height: 50px;
          background: var(--info-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .info-content h4 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .info-details {
          color: var(--text-primary);
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .info-sub {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 0;
        }

        .contact-form h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .form-wrapper {
          background: var(--background-section);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background: var(--background-dark);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.75rem;
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          width: 100%;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-btn:hover {
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .form-wrapper {
            padding: 2rem;
          }

          .contact-content {
            gap: 2rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .form-wrapper {
            padding: 1.5rem;
          }

          .info-card {
            padding: 1rem;
          }

          .info-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
