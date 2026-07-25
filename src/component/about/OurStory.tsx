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
        "47accountants was founded by a team of ACCA-qualified accountants with a vision to provide expert, jargon-free accounting services to UK businesses.",
      icon: Rocket,
      color: "#635bff",
    },
    {
      year: "2016",
      title: "Expanding Our Services",
      description:
        "Grew our team and expanded into payroll, VAT, and business advisory services—becoming a full-service accountancy firm trusted by 400+ clients.",
      icon: Globe,
      color: "#00d4ff",
    },
    {
      year: "2019",
      title: "MTD Pioneer",
      description:
        "Became an early adopter of HMRC's Making Tax Digital initiative and helped over 800 clients transition seamlessly to digital VAT filing.",
      icon: Award,
      color: "#00e676",
    },
    {
      year: "2025",
      title: "Growing with Our Clients",
      description:
        "Now serving 1,200+ UK businesses with a 97% client retention rate, combining expert accountants with smart cloud accounting technology.",
      icon: TrendingUp,
      color: "#ff6b6b",
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
          <motion.div className="our-story-badge">
            <span className="our-story-badge-dot" />
            <span className="our-story-badge-text">Our Journey</span>
          </motion.div>

          <h2 className="our-story-headline">
            From a Small Practice to
            <span className="our-story-gradient-text"> A Trusted Name</span>
          </h2>

          <p className="our-story-subheadline">
            What started as a small accountancy firm in London has grown into a
            practice trusted by over 1,200 UK businesses—built on expertise,
            integrity, and results.
          </p>
        </motion.div>

        <div className="timeline-wrapper">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <div
                  className="timeline-icon"
                  style={{
                    background: `${milestone.color}15`,
                    border: `2px solid ${milestone.color}`,
                  }}
                >
                  <milestone.icon
                    size={24}
                    color={milestone.color}
                    strokeWidth={2}
                  />
                </div>
                <div className="timeline-text">
                  <div
                    className="timeline-year"
                    style={{ color: milestone.color }}
                  >
                    {milestone.year}
                  </div>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">
                    {milestone.description}
                  </p>
                </div>
              </div>
              {index < milestones.length - 1 && (
                <div className="timeline-line" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
