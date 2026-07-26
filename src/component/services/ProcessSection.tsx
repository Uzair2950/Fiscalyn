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
    },
    {
      number: "02",
      icon: Settings,
      title: "Onboarding & Setup",
      duration: "1–2 days",
      description:
        "We take over your accounts, transfer your records, and set up secure access to your cloud accounting software. Our team handles all the admin so the transition is completely hassle-free for you.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "We Get to Work",
      duration: "Ongoing",
      description:
        "Your dedicated accountant takes care of bookkeeping, VAT returns, payroll, and compliance—all on time, every time. You receive regular updates and have direct access to your accountant whenever you need them.",
    },
    {
      number: "04",
      icon: BarChart,
      title: "Review & Grow",
      duration: "Quarterly",
      description:
        "We hold regular review meetings to go through your financial reports, identify tax-saving opportunities, and provide strategic advice to help you make informed decisions and grow profitably.",
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
          <div className="process-badge">
            <span className="process-badge-text">How It Works</span>
          </div>

          <h2 className="process-headline">
            Working with 47 Accountants is
            <span className="process-gradient-text"> Simple & Stress-Free</span>
          </h2>

          <p className="process-subheadline">
            From your first call to ongoing accounting support, our streamlined
            process ensures a seamless experience so you can focus on running
            your business.
          </p>
        </motion.div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="process-step-number">{step.number}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
