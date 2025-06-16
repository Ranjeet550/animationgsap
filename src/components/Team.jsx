import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter, FiMail } from 'react-icons/fi';
import FloatingCard from './FloatingCard.jsx';

const Team = () => {
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

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <FloatingCard
              key={member.id}
              className="team-card-wrapper"
              delay={index * 0.15}
              direction={index % 3 === 0 ? "up" : index % 3 === 1 ? "left" : "right"}
              intensity={1.2}
              index={index}
              rotateOnHover={true}
              glowEffect={true}
            >
              <div className="team-member">
                <motion.div
                  className="member-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  whileHover={{ scale: 1.05 }}
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
                          whileHover={{ scale: 1.2, color: "#0077b5" }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiLinkedin />
                        </motion.a>
                      )}
                      {member.social.github && (
                        <motion.a
                          href={member.social.github}
                          whileHover={{ scale: 1.2, color: "#333" }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiGithub />
                        </motion.a>
                      )}
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          whileHover={{ scale: 1.2, color: "#1da1f2" }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiTwitter />
                        </motion.a>
                      )}
                      {member.social.email && (
                        <motion.a
                          href={`mailto:${member.social.email}`}
                          whileHover={{ scale: 1.2, color: "#ea4335" }}
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
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </FloatingCard>
          ))}
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

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .team-member {
          background: var(--background-dark);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
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
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
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
        }

        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }

          .team-member {
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
        }

        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr;
          }

          .team-member {
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
        }
      `}</style>
    </section>
  );
};

export default Team;
