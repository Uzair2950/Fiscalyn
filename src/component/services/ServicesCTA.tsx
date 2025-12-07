import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import "../../css/services/services-cta.css";

const ServicesCTA: React.FC = () => {
  const benefits = [
    "14-day free trial, no credit card required",
    "Cancel anytime with no penalties",
    "24/7 customer support & onboarding",
    "Access to all premium features",
    "Migration assistance included",
    "Money-back guarantee",
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "4.9/5", label: "Customer Rating" },
  ];

  return (
    <section className="services-cta-section">
      <div className="services-cta-background">
        <div className="services-cta-grid-pattern" />
        <motion.div
          className="services-cta-gradient-orb services-cta-orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="services-cta-gradient-orb services-cta-orb-2"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="services-cta-container">
        <motion.div
          className="services-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="services-cta-badge">
            <Sparkles size={16} />
            <span className="services-cta-badge-text">Limited Time Offer</span>
          </motion.div>

          <h2 className="services-cta-headline">
            Transform Your Financial Operations
            <span className="services-cta-gradient-text"> Starting Today</span>
          </h2>

          <p className="services-cta-description">
            Join thousands of businesses using Fiscalyn to automate finances,
            ensure compliance, and drive growth. Start your free trial now—no
            commitment required.
          </p>

          <div className="services-cta-benefits">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="services-cta-benefit-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              >
                <CheckCircle size={20} color="#00e676" strokeWidth={2.5} />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-cta-actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="services-cta-primary-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <span>Start Free Trial</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="services-cta-secondary-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule a Demo
            </motion.button>
          </motion.div>

          <div className="services-cta-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="services-cta-stat"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="services-cta-stat-value">{stat.value}</div>
                <div className="services-cta-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-cta-trust"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="services-cta-trust-item">
              <div className="services-cta-trust-icon">🏆</div>
              <div className="services-cta-trust-text">SOC 2 Certified</div>
            </div>
            <div className="services-cta-trust-item">
              <div className="services-cta-trust-icon">🛡️</div>
              <div className="services-cta-trust-text">GDPR Compliant</div>
            </div>
            <div className="services-cta-trust-item">
              <div className="services-cta-trust-icon">⚡</div>
              <div className="services-cta-trust-text">99.9% Uptime</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
