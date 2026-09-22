import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "../common/OptimizedImage";
import "../../css/about/team-section.css";

import teamMember1 from "../../assets/image/team/teamMember1-optimized.webp";
import teamMember2 from "../../assets/image/team/teamMember2-optimized.webp";
import teamMember3 from "../../assets/image/team/teamMember3-optimized.webp";
import teamMember4 from "../../assets/image/team/teamMember4-optimized.webp";
import teamMember5 from "../../assets/image/team/teamMember5-optimized.webp";
import teamMember6 from "../../assets/image/team/teamMember6-optimized.webp";

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Muhammad Sheheryar Khan",
      id: "muhammad-sheheryar-khan",
      role: "Managing Partner",
      image: teamMember1,
    },
    {
      name: "Khurram iqbal",
      id: "khurram-iqbal",
      role: "Portfolio Manager",
      image: teamMember2,
    },
    {
      name: "Bilal Ahmed",
      id: "bilal-ahmed",
      role: "Portfolio Manager",
      image: teamMember3,
    },
    {
      name: "Mahmood Alam",
      id: "mahmood-alam",
      role: "Chief Business Development Officer",
      image: teamMember4,
    },
    {
      name: "Zeeshan Ghafoor",
      id: "zeeshan-ghafoor",
      role: "Portfolio Manager",
      image: teamMember6,
    },
    {
      name: "Uzair Muhammad",
      id: "uzair-muhammad",
      role: "Chief Technology Officer",
      image: teamMember5,
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
              id={member.id}
              className="team-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="team-image-wrapper">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                  width={600}
                  height={720}
                  sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 33vw"
                />
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
