import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Layers, Users, CheckCircle2 } from "lucide-react";
import "../../css/collaboration/outsourcing-models.css";

const OutsourcingModels: React.FC = () => {
  const models = [
    {
      icon: Briefcase,
      title: "White-Label Outsourcing",
      description:
        "We handle all client bookkeeping, VAT returns, payroll, and final statutory accounts directly under your brand name. Complete brand alignment with zero client contact.",
      features: [
        "100% white-label working papers",
        "Your firm's email domain integration",
        "Direct software access (Xero, Sage, QBO)",
        "Fixed per-file pricing models",
      ],
      accent: "var(--color-navy)",
      softBg: "var(--color-navy-soft)",
    },
    {
      icon: Layers,
      title: "Peak Season Subcontracting",
      description:
        "Scale your practice instantly during busy January tax deadlines or quarterly VAT rushes. Outsource overflow workload to ACCA-qualified tax professionals.",
      features: [
        "On-demand capacity scaling",
        "Self-Assessment tax return filing",
        "Statutory year-end accounts prep",
        "Fast 48-hour turnarounds",
      ],
      accent: "var(--color-gold-primary)",
      softBg: "var(--color-gold-soft)",
    },
    {
      icon: Users,
      title: "Dedicated Practice Pods",
      description:
        "Assign a dedicated pod of senior accountants and managers exclusively to your practice. They function as a seamless extension of your internal team.",
      features: [
        "Dedicated senior accountant manager",
        "Custom Workflow & SLA procedures",
        "Daily progress & capacity syncs",
        "Up to 60% operational cost savings",
      ],
      accent: "var(--color-red)",
      softBg: "var(--color-red-soft)",
    },
  ];

  return (
    <section className="models-section" id="models-section">
      <div className="models-container">
        <motion.div
          className="models-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="models-badge">
            <span className="models-badge-text">Tailored Engagement Models</span>
          </div>

          <h2 className="models-headline">
            Flexible Outsourcing Solutions
            <span className="models-gradient-text"> For Accounting Practices</span>
          </h2>

          <p className="models-subheadline">
            Whether you need white-label file preparation, peak-season overflow support, or a dedicated accounting pod, we adapt to your firm’s workflow.
          </p>
        </motion.div>

        <div className="models-grid">
          {models.map((model, index) => (
            <motion.div
              key={index}
              className="model-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div>
                <div
                  className="model-icon-box"
                  style={{
                    background: model.softBg,
                    color: model.accent,
                    borderColor: model.accent,
                  }}
                >
                  <model.icon size={28} />
                </div>
                <h3 className="model-title">{model.title}</h3>
                <p className="model-desc">{model.description}</p>
              </div>

              <ul className="model-features-list">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="model-feature-item">
                    <CheckCircle2
                      size={18}
                      className="model-feature-icon"
                      style={{ color: model.accent }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutsourcingModels;
