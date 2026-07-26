import React from "react";
import { motion } from "framer-motion";
import { Rocket, Award, Globe, TrendingUp } from "lucide-react";
import "../../css/about/our-story.css";

const OurStory: React.FC = () => {
  const milestones = [
    {
      year: "2013",
      title: "Founded in London",
      description:
        "47 Accountants was founded by a team of ACCA-qualified accountants with a vision to provide expert, jargon-free accounting services to UK businesses.",
      icon: Rocket,
    },
    {
      year: "2016",
      title: "Expanding Our Services",
      description:
        "Grew our team and expanded into payroll, VAT, and business advisory services—becoming a full-service accountancy firm trusted by 400+ clients.",
      icon: Globe,
    },
    {
      year: "2019",
      title: "MTD Pioneer",
      description:
        "Became an early adopter of HMRC's Making Tax Digital initiative and helped over 800 clients transition seamlessly to digital VAT filing.",
      icon: Award,
    },
    {
      year: "2025",
      title: "Growing with Our Clients",
      description:
        "Now serving 1,200+ UK businesses with a 97% client retention rate, combining expert accountants with smart cloud accounting technology.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="our-story-section">
      <div className="our-story-container">
        <motion.div
          className="our-story-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="story-title">
            From a Small Practice to
            <span className="story-gradient-text"> A Trusted Name</span>
          </div>

          <p className="story-text">
            What started as a small accountancy firm in London has grown into a
            practice trusted by over 1,200 UK businesses—built on expertise,
            integrity, and results.
          </p>
        </motion.div>

        <div className="timeline-wrapper" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginTop: "40px" }}>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ background: "var(--bg-main)", padding: "28px", borderRadius: "16px", border: "1px solid var(--border-gold)" }}
            >
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--color-gold-primary)", marginBottom: "8px" }}>
                {milestone.year}
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>
                {milestone.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
