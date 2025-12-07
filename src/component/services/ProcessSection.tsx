import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Settings, Rocket, BarChart, ArrowRight } from "lucide-react";
import "../../css/services/process-section.css";

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Sign Up & Connect",
      duration: "5 minutes",
      description:
        "Create your account and securely connect your bank accounts, accounting software, and payment processors through our one-click integrations. Our setup wizard guides you through every step.",
      color: "#635bff",
    },
    {
      number: "02",
      icon: Settings,
      title: "Configure & Customize",
      duration: "10 minutes",
      description:
        "Tailor Fiscalyn to your business needs. Set up custom categories, tax rules, approval workflows, and automated alerts. Our AI learns your preferences as you go.",
      color: "#00d4ff",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Launch & Automate",
      duration: "Instant",
      description:
        "Go live immediately! Watch as Fiscalyn automatically processes transactions, reconciles accounts, and generates reports in real-time. Your financial operations are now on autopilot.",
      color: "#00e676",
    },
    {
      number: "04",
      icon: BarChart,
      title: "Analyze & Grow",
      duration: "Ongoing",
      description:
        "Leverage powerful analytics to make informed decisions. Track KPIs, forecast cash flow, identify trends, and receive proactive insights to optimize your financial strategy.",
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
            Get Started in
            <span className="process-gradient-text"> Four Simple Steps</span>
          </h2>

          <p className="process-subheadline">
            From signup to full automation in under 20 minutes. Our streamlined
            onboarding gets you up and running fast, so you can focus on growing
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
              Ready to Transform Your Finances?
            </h3>
            <p className="process-cta-text">
              Start your free 14-day trial today. No credit card required,
              cancel anytime.
            </p>
          </div>
          <motion.button
            className="process-cta-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => (window.location.href = "/contact")}
          >
            <span>Get Started Now</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
