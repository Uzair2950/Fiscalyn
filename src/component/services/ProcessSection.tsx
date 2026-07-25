import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Settings, Rocket, BarChart } from "lucide-react";
import "../../css/services/process-section.css";

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Free Consultation",
      duration: "30 minutes",
      description:
        "Book a free, no-obligation call with one of our qualified accountants. We'll discuss your business, understand your current situation, and recommend the most suitable service package for your needs.",
      color: "#635bff",
    },
    {
      number: "02",
      icon: Settings,
      title: "Onboarding & Setup",
      duration: "1–2 days",
      description:
        "We take over your accounts, transfer your records, and set up secure access to your cloud accounting software. Our team handles all the admin so the transition is completely hassle-free for you.",
      color: "#00d4ff",
    },
    {
      number: "03",
      icon: Rocket,
      title: "We Get to Work",
      duration: "Ongoing",
      description:
        "Your dedicated accountant takes care of bookkeeping, VAT returns, payroll, and compliance—all on time, every time. You receive regular updates and have direct access to your accountant whenever you need them.",
      color: "#00e676",
    },
    {
      number: "04",
      icon: BarChart,
      title: "Review & Grow",
      duration: "Quarterly",
      description:
        "We hold regular review meetings to go through your financial reports, identify tax-saving opportunities, and provide strategic advice to help you make informed decisions and grow profitably.",
      color: "#ff6b6b",
    },
  ];

  return (
    <section className="process-section">
      <div className="process-background">
        <div className="process-grid-pattern" />
      </div>

      <div className="process-container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="process-badge">
            <span className="process-badge-dot" />
            <span className="process-badge-text">How It Works</span>
          </motion.div>

          <h2 className="process-headline">
            Working with 47accountants is
            <span className="process-gradient-text"> Simple & Stress-Free</span>
          </h2>

          <p className="process-subheadline">
            From your first call to ongoing accounting support, our streamlined
            process ensures a seamless experience so you can focus on running
            your business.
          </p>
        </motion.div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="process-step-content">
                <div className="process-step-header">
                  <div
                    className="process-step-icon"
                    style={{
                      background: `${step.color}15`,
                      border: `2px solid ${step.color}`,
                    }}
                  >
                    <step.icon size={32} color={step.color} strokeWidth={2} />
                  </div>
                  <div
                    className="process-step-number"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>
                </div>

                <div className="process-step-title-row">
                  <h3 className="process-step-title">{step.title}</h3>
                  <span
                    className="process-step-duration"
                    style={{
                      background: `${step.color}15`,
                      color: step.color,
                    }}
                  >
                    {step.duration}
                  </span>
                </div>

                <p className="process-step-description">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="process-step-connector">
                  <motion.div
                    className="process-step-line"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="process-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="process-cta-content">
            <h3 className="process-cta-title">
              Ready to Get Your Finances Sorted?
            </h3>
            <p className="process-cta-text">
              Book your free consultation today. No obligation, no jargon—just
              expert advice.
            </p>
          </div>
          <motion.button
            className="process-cta-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => (window.location.href = "/contact")}
          >
            <span>Book Free Consultation</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
