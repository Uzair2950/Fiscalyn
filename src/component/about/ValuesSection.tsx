import React from "react";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, Zap, Shield, Target } from "lucide-react";
import "../../css/about/values-section.css";

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Client First",
      description:
        "Every decision we make starts with our clients. Your financial wellbeing and business success is our purpose.",
    },
    {
      icon: Lightbulb,
      title: "Proactive Expertise",
      description:
        "We don't just react—we anticipate, plan ahead, and bring ideas that make a genuine difference to your finances.",
    },
    {
      icon: Users,
      title: "Long-Term Partnership",
      description:
        "We build lasting relationships, becoming a trusted extension of your team—not just your year-end accountant.",
    },
    {
      icon: Zap,
      title: "Clarity & Simplicity",
      description:
        "We cut through complexity and communicate in plain English, so you always know exactly where your business stands.",
    },
    {
      icon: Shield,
      title: "Integrity & Compliance",
      description:
        "We uphold the highest standards of professional conduct—fully regulated, ACCA accredited, and always compliant.",
    },
    {
      icon: Target,
      title: "Results Focused",
      description:
        "We measure our success by yours—from tax savings and on-time filings to profitable business growth.",
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
          <div className="values-badge">
            <span className="values-badge-text">Our Core Values</span>
          </div>

          <h2 className="values-headline">
            The Principles That
            <span className="values-gradient-text"> Drive Us Forward</span>
          </h2>

          <p className="values-subheadline">
            These core values guide everything we do—from how we serve our global
            clients to how we support and grow our accountancy team.
          </p>
        </motion.div>

        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="value-card-icon">
                <value.icon size={26} strokeWidth={2} />
              </div>
              <h3 className="value-card-title">{value.title}</h3>
              <p className="value-card-desc">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
