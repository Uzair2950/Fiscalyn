import React from "react";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, Zap, Shield, Target } from "lucide-react";
import "../../css/about/values-section.css";

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer Obsession",
      description:
        "Every decision we make starts with our customers. Their success is our success.",
      color: "#ff6b6b",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We constantly push boundaries and challenge the status quo to deliver cutting-edge solutions.",
      color: "#ffd93d",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "We believe in the power of diverse perspectives and inclusive teamwork.",
      color: "#00e676",
    },
    {
      icon: Zap,
      title: "Speed & Agility",
      description:
        "We move fast, learn faster, and adapt to changes with remarkable agility.",
      color: "#00d4ff",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description:
        "We maintain the highest standards of security, privacy, and ethical conduct.",
      color: "#635bff",
    },
    {
      icon: Target,
      title: "Results Driven",
      description:
        "We set ambitious goals and hold ourselves accountable for delivering measurable impact.",
      color: "#8b83ff",
    },
  ];

  return (
    <section className="values-section">
      <div className="values-container">
        <motion.div
          className="values-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="values-badge">
            <span className="values-badge-dot" />
            <span className="values-badge-text">Our Values</span>
          </motion.div>

          <h2 className="values-headline">
            The Principles That
            <span className="values-gradient-text"> Drive Us Forward</span>
          </h2>

          <p className="values-subheadline">
            These core values guide everything we do—from how we build our
            product to how we support our customers and grow our team.
          </p>
        </motion.div>

        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div
                className="value-icon"
                style={{ background: `${value.color}15` }}
              >
                <value.icon size={28} color={value.color} strokeWidth={2} />
              </div>
              <h3 className="value-title" style={{ color: value.color }}>
                {value.title}
              </h3>
              <p className="value-description">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
