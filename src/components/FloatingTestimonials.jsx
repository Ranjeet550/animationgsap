import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiMessageCircle } from 'react-icons/fi';
import FloatingCard from './FloatingCard.jsx';

const FloatingTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp MVNO",
      role: "CEO",
      content: "Effortel's platform transformed our MVNO operations. The real-time billing and customer management features are exceptional.",
      rating: 5,
      avatar: "/avatars/sarah.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "GlobalConnect",
      role: "CTO",
      content: "Implementation was seamless and the support team is outstanding. Our revenue increased by 40% in the first quarter.",
      rating: 5,
      avatar: "/avatars/michael.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      company: "NextGen Mobile",
      role: "Operations Director",
      content: "The automation features saved us countless hours. The platform scales beautifully with our growing customer base.",
      rating: 5,
      avatar: "/avatars/emma.jpg"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "ConnectPlus",
      role: "VP Technology",
      content: "Best MVNE solution we've used. The analytics and reporting capabilities give us incredible insights.",
      rating: 5,
      avatar: "/avatars/david.jpg"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "MobileTech Solutions",
      role: "Founder",
      content: "Effortel enabled us to launch our MVNO in record time. The LaunchPad program was invaluable.",
      rating: 5,
      avatar: "/avatars/lisa.jpg"
    },
    {
      id: 6,
      name: "James Miller",
      company: "TelecomInnovate",
      role: "Head of Operations",
      content: "The customer self-service tools reduced our support costs by 60%. Highly recommended!",
      rating: 5,
      avatar: "/avatars/james.jpg"
    }
  ];

  return (
    <section className="floating-testimonials section">
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
            What Our Clients Say
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Trusted by Industry Leaders
          </motion.h2>
        </motion.div>

        <div className="testimonials-container">
          <motion.div 
            className="testimonials-track"
            animate={{ x: [0, -300 * testimonials.length] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set */}
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 3, 0],
                  rotateX: [0, 2, 0]
                }}
                transition={{
                  y: { 
                    duration: 4 + (index % 3), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  },
                  rotateY: { 
                    duration: 6 + (index % 2), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.7
                  },
                  rotateX: { 
                    duration: 5 + (index % 4), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.3
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -25,
                  rotateY: 8,
                  z: 100,
                  boxShadow: "0 30px 60px rgba(0, 102, 255, 0.3)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="quote-icon"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FiMessageCircle />
                </motion.div>
                
                <div className="testimonial-content">
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: i * 0.1 
                        }}
                      >
                        <FiStar />
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="testimonial-text">"{testimonial.content}"</p>
                  
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <div className="avatar-placeholder">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                      <span>{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={`duplicate-${testimonial.id}`}
                className="testimonial-card"
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 3, 0],
                  rotateX: [0, 2, 0]
                }}
                transition={{
                  y: { 
                    duration: 4 + (index % 3), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5 + 2
                  },
                  rotateY: { 
                    duration: 6 + (index % 2), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.7 + 2
                  },
                  rotateX: { 
                    duration: 5 + (index % 4), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.3 + 2
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -25,
                  rotateY: 8,
                  z: 100,
                  boxShadow: "0 30px 60px rgba(0, 102, 255, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="quote-icon"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FiMessageCircle />
                </motion.div>
                
                <div className="testimonial-content">
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: i * 0.1 
                        }}
                      >
                        <FiStar />
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="testimonial-text">"{testimonial.content}"</p>
                  
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <div className="avatar-placeholder">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                      <span>{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .floating-testimonials {
          background: var(--background-section);
          overflow: hidden;
          position: relative;
        }

        .floating-testimonials::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 102, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 102, 255, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
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
          margin-bottom: 0;
        }

        .testimonials-container {
          position: relative;
          overflow: hidden;
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

        .testimonials-track {
          display: flex;
          gap: 2rem;
          width: fit-content;
        }

        .testimonial-card {
          flex-shrink: 0;
          width: 350px;
          background: var(--background-dark);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
        }

        .testimonial-card:hover {
          border-color: var(--primary-color);
        }

        .quote-icon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: var(--primary-color);
          font-size: 1.5rem;
          opacity: 0.3;
        }

        .rating {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1rem;
          color: #ffd700;
        }

        .testimonial-text {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          flex-shrink: 0;
        }

        .avatar-placeholder {
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .author-info h4 {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .author-info p {
          color: var(--primary-color);
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .author-info span {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            width: 300px;
            padding: 1.5rem;
          }

          .testimonials-track {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FloatingTestimonials;
