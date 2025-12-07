import React from "react";
import { motion } from "framer-motion";
import { Rocket, Award, Globe, TrendingUp } from "lucide-react";
import "../../css/about/our-story.css";

const OurStory: React.FC = () => {
  const milestones = [
    {
      year: "2013",
      title: "The Beginning",
      description:
        "Founded with a vision to democratize financial management for businesses of all sizes.",
      icon: Rocket,
      color: "#635bff",
    },
    {
      year: "2016",
      title: "Global Expansion",
      description:
        "Expanded operations to 15 countries, serving thousands of businesses worldwide.",
      icon: Globe,
      color: "#00d4ff",
    },
    {
      year: "2019",
      title: "Industry Recognition",
      description:
        "Won 'Best Financial Platform' award and achieved SOC 2 Type II certification.",
      icon: Award,
      color: "#00e676",
    },
    {
      year: "2025",
      title: "Continuous Growth",
      description:
        "Serving 10,000+ businesses with 99.9% uptime and expanding our AI capabilities.",
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
            From Startup to
            <span className="our-story-gradient-text"> Industry Leader</span>
          </h2>

          <p className="our-story-subheadline">
            What started as a simple idea in a small office has grown into a
            platform trusted by thousands of businesses worldwide.
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
