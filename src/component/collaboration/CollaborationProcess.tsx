import React from "react";
import { motion } from "framer-motion";
import "../../css/collaboration/collaboration-process.css";

const CollaborationProcess: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Practice NDA & Agreement",
      description:
        "We sign a comprehensive non-disclosure & subcontracting agreement protecting your practice IP, client ownership, and data privacy.",
    },
    {
      num: "02",
      title: "Secure Portal Onboarding",
      description:
        "We set up dedicated, encrypted cloud working channels and integrate directly with your software tools (Xero, Dext, QuickBooks, TaxCalc).",
    },
    {
      num: "03",
      title: "File Execution & Audit",
      description:
        "Your assigned senior ACCA accountant prepares working papers, reconciliations, and tax returns following your practice checklist.",
    },
    {
      num: "04",
      title: "Double Review & Sign-Off",
      description:
        "A senior partner conducts a strict 2-tier quality review before returning completed, review-ready files back to your team.",
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="process-badge">
            <span className="process-badge-text">How It Works</span>
          </div>

          <h2 className="process-headline">
            4-Step Seamless
            <span className="process-gradient-text"> Outsourcing Workflow</span>
          </h2>

          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", margin: 0 }}>
            From day one, our process integrates smoothly into your accounting practice with zero friction or learning curve.
          </p>
        </motion.div>

        <div className="process-steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="process-step-number">{step.num}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationProcess;
