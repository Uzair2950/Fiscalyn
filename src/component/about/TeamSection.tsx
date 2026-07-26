import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import "../../css/about/team-section.css";

import teamMember1 from "../../assets/image/team/teamMember1.webp";
import teamMember2 from "../../assets/image/team/teamMember2.webp";
import teamMember3 from "../../assets/image/team/teamMember3.jpeg";
import teamMember4 from "../../assets/image/team/teamMember4.webp";
import teamMember5 from "../../assets/image/team/teamMember5.webp";
import teamMember6 from "../../assets/image/team/teamMember6.jpeg";

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Muhammad Sheheryar Khan",
      role: "CEO",
      image: teamMember1,
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Khurram iqbal",
      role: "Portfolio Manager",
      image: teamMember2,
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Bilal Ahmed",
      role: "Portfolio Manager",
      image: teamMember3,
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Mahmood Alam",
      role: "Chief Business Development Officer",
      image: teamMember4,
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Zeeshan Ghafoor",
      role: "Portfolio Manager",
      image: teamMember6,
      linkedin: "#",
      twitter: "#",

    },
    {
      name: "Uzair Muhammad",
      role: "Chief Technology Officer",
      image: teamMember5,
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
