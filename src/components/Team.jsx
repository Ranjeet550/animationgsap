import React, { useRef } from 'react';
import { motion, useMotionValue, useDragControls } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter, FiMail, FiUsers } from 'react-icons/fi';
import FloatingCard from './FloatingCard.jsx';

const Team = () => {
  const scrollRef = useRef(null);
  const dragControls = useDragControls();
  const x = useMotionValue(0);

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in software development and business strategy.",
      image: "/images/team/alex.jpg",
      skills: ["Leadership", "Strategy", "Product Vision"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "alex@devsphere.com"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      bio: "Full-stack architect passionate about scalable solutions and emerging technologies.",
      image: "/images/team/sarah.jpg",
      skills: ["Architecture", "Cloud", "DevOps"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "sarah@devsphere.com"
      }
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Lead Frontend Developer",
      bio: "React specialist creating beautiful, performant user interfaces and experiences.",
      image: "/images/team/michael.jpg",
      skills: ["React", "TypeScript", "UI/UX"],
      social: {
        linkedin: "#",
        github: "#",
        email: "michael@devsphere.com"
      }
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Senior Backend Developer",
      bio: "Backend expert building robust APIs and scalable server-side architectures.",
      image: "/images/team/emily.jpg",
      skills: ["Node.js", "Python", "Databases"],
      social: {
        linkedin: "#",
        github: "#",
        email: "emily@devsphere.com"
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "Mobile App Developer",
      bio: "Cross-platform mobile developer creating native experiences for iOS and Android.",
      image: "/images/team/david.jpg",
      skills: ["React Native", "Flutter", "iOS"],
      social: {
        linkedin: "#",
        github: "#",
        email: "david@devsphere.com"
      }
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered design and beautiful interfaces.",
      image: "/images/team/lisa.jpg",
      skills: ["Figma", "Design Systems", "User Research"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@devsphere.com"
      }
    }
  ];



  return (
    <section className="team section">
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
            Meet Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            The Brilliant Minds Behind DEV SPHERE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="section-description"
          >
            Our diverse team of passionate developers, designers, and strategists work together 
            to create exceptional software solutions that drive business success.
          </motion.p>
        </motion.div>

        <div className="team-container">
          {/* Scrollable Team Track */}
          <motion.div
            className="team-track"
            ref={scrollRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="team-scroll-content"
              drag="x"
              dragControls={dragControls}
              dragConstraints={{ left: -1200, right: 0 }}
              dragElastic={0.1}
              style={{ x }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="team-member"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -15,
                    rotateY: 8,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="member-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.3,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    viewport={{ once: true }}
                  >
                    <div className="image-placeholder">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="member-overlay">
                      <div className="social-links">
                        {member.social.linkedin && (
                          <motion.a
                            href={member.social.linkedin}
                            whileHover={{ scale: 1.3, color: "#0077b5" }}
                            transition={{ duration: 0.2 }}
                          >
                            <FiLinkedin />
                          </motion.a>
                        )}
                        {member.social.github && (
                          <motion.a
                            href={member.social.github}
                            whileHover={{ scale: 1.3, color: "#333" }}
                            transition={{ duration: 0.2 }}
                          >
                            <FiGithub />
                          </motion.a>
                        )}
                        {member.social.twitter && (
                          <motion.a
                            href={member.social.twitter}
                            whileHover={{ scale: 1.3, color: "#1da1f2" }}
                            transition={{ duration: 0.2 }}
                          >
                            <FiTwitter />
                          </motion.a>
                        )}
                        {member.social.email && (
                          <motion.a
                            href={`mailto:${member.social.email}`}
                            whileHover={{ scale: 1.3, color: "#ea4335" }}
                            transition={{ duration: 0.2 }}
                          >
                            <FiMail />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  <div className="member-info">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p
                      className="member-role"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {member.role}
                    </motion.p>
                    <motion.p
                      className="member-bio"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      {member.bio}
                    </motion.p>

                    <motion.div
                      className="member-skills"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      {member.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="skill-tag"
                          whileHover={{ scale: 1.1, y: -3 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Member Glow Effect */}
                  <motion.div
                    className="member-glow"
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <FiUsers />
            <span>← Drag to explore our team →</span>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .team {
          background: var(--background-section);
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

        .team-container {
          position: relative;
          overflow: hidden;
          margin-top: 2rem;
        }



        .team-track {
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 2rem 0;
          cursor: grab;
        }

        .team-track::-webkit-scrollbar {
          display: none;
        }

        .team-track:active {
          cursor: grabbing;
        }

        .team-scroll-content {
          display: flex;
          gap: 2.5rem;
          padding: 0 2rem;
          width: fit-content;
        }

        .team-member {
          background: var(--background-dark);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          min-width: 320px;
          max-width: 320px;
          height: 480px;
          flex-shrink: 0;
          transform-style: preserve-3d;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .team-member::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .team-member:hover::before {
          transform: scaleX(1);
        }

        .team-member:hover {
          border-color: var(--primary-color);
          box-shadow: 0 30px 60px rgba(99, 102, 241, 0.2);
          transform: translateY(-15px) rotateY(8deg);
        }

        .member-image {
          position: relative;
          margin-bottom: 1.5rem;
          display: inline-block;
        }

        .image-placeholder {
          width: 120px;
          height: 120px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          font-weight: bold;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .member-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(99, 102, 241, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .member-image:hover .member-overlay {
          opacity: 1;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          color: white;
          font-size: 1.2rem;
          transition: all 0.2s ease;
        }

        .member-info h3 {
          color: var(--text-primary);
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .member-role {
          color: var(--primary-color);
          font-weight: 500;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .member-bio {
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .member-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .skill-tag {
          background: var(--background-section);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .skill-tag:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          background: rgba(99, 102, 241, 0.1);
        }

        .member-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
          pointer-events: none;
        }

        .scroll-indicator {
          text-align: center;
          margin-top: 2rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          opacity: 0.8;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .scroll-indicator span {
          background: rgba(99, 102, 241, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        @media (max-width: 768px) {
          .team-scroll-content {
            padding: 0 1.5rem;
            gap: 2rem;
          }

          .team-member {
            min-width: 280px;
            max-width: 280px;
            height: 450px;
            padding: 1.5rem;
          }

          .image-placeholder {
            width: 100px;
            height: 100px;
            font-size: 1.5rem;
          }

          .member-info h3 {
            font-size: 1.2rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .scroll-indicator {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .team-scroll-content {
            padding: 0 1rem;
            gap: 1.5rem;
          }

          .team-member {
            min-width: 250px;
            max-width: 250px;
            height: 420px;
            padding: 1rem;
          }

          .image-placeholder {
            width: 80px;
            height: 80px;
            font-size: 1.2rem;
          }

          .member-info h3 {
            font-size: 1.1rem;
          }

          .member-bio {
            font-size: 0.9rem;
          }

          .scroll-indicator {
            font-size: 0.75rem;
            margin-top: 1rem;
          }

          .scroll-indicator span {
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
