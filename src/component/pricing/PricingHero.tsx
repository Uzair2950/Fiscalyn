import React from "react";
import { motion } from "framer-motion";
import "../../css/pricing/pricing-hero.css";

interface PricingHeroProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

const PricingHero: React.FC<PricingHeroProps> = ({ isAnnual, setIsAnnual }) => {
  return (
    <section className="pricing-hero-section">
      <div className="pricing-hero-background">
        <div className="pricing-hero-grid-pattern" />
        <motion.div
          className="pricing-hero-gradient-orb pricing-hero-orb-1"
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
          className="pricing-hero-gradient-orb pricing-hero-orb-2"
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

      <div className="pricing-hero-container">
        <motion.div
          className="pricing-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="pricing-hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="pricing-hero-badge-dot" />
            <span className="pricing-hero-badge-text">
              Simple, Transparent Pricing
            </span>
          </motion.div>

          <h1 className="pricing-hero-headline">
            Plans That Scale with
            <span className="pricing-hero-gradient-text"> Your Business</span>
          </h1>

          <p className="pricing-hero-description">
            Choose the perfect plan for your business size and needs. All plans
            include a 14-day free trial with full access to premium features.
          </p>

          <motion.div
            className="pricing-hero-toggle-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span
              className={`pricing-hero-toggle-label ${
                !isAnnual ? "active" : ""
              }`}
            >
              Monthly
            </span>
            <motion.div
              className={`pricing-hero-toggle ${isAnnual ? "active" : ""}`}
              onClick={() => setIsAnnual(!isAnnual)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="pricing-hero-toggle-slider" />
            </motion.div>
            <span
              className={`pricing-hero-toggle-label ${
                isAnnual ? "active" : ""
              }`}
            >
              Annual
            </span>
            {isAnnual && (
              <motion.span
                className="pricing-hero-savings-badge"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
              >
                Save 20%
              </motion.span>
            )}
          </motion.div>

          <motion.div
            className="pricing-hero-trust-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="pricing-hero-trust-item">
              <span className="pricing-hero-trust-icon">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="pricing-hero-trust-item">
              <span className="pricing-hero-trust-icon">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="pricing-hero-trust-item">
              <span className="pricing-hero-trust-icon">✓</span>
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
