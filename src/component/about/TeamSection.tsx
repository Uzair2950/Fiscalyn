import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import "../../css/about/team-section.css";

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Alexandra Chen",
      role: "CEO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sarah Williams",
      role: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Park",
      role: "Head of Engineering",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emma Thompson",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "James Lee",
      role: "Head of Customer Success",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="team-badge">
            <span className="team-badge-dot" />
            <span className="team-badge-text">Meet the Team</span>
          </motion.div>

          <h2 className="team-headline">
            Led by Visionaries,
            <span className="team-gradient-text"> Powered by Passion</span>
          </h2>

          <p className="team-subheadline">
            Our diverse team of experts brings together decades of experience in
            finance, technology, and customer success.
          </p>
        </motion.div>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="team-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href={member.linkedin} className="team-social-link">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.twitter} className="team-social-link">
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
