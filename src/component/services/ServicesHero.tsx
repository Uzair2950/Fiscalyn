import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield } from "lucide-react";
import "../../css/services/services-hero.css";

const ServicesHero: React.FC = () => {
  const features = [
    { icon: Zap, text: "HMRC Compliant" },
    { icon: Shield, text: "ACCA Qualified" },
    { icon: CheckCircle, text: "Fixed Monthly Fees" },
  ];

  return (
    <section className="services-hero-section">
      <div className="services-hero-background">
        <div className="services-hero-grid-pattern" />
        <motion.div
          className="services-hero-gradient-orb services-hero-orb-1"
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
          className="services-hero-gradient-orb services-hero-orb-2"
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

      <div className="services-hero-container">
        <motion.div
          className="services-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="services-hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="services-hero-badge-dot" />
            <span className="services-hero-badge-text">Our Services</span>
          </motion.div>

          <h1 className="services-hero-headline">
            Expert Accounting Services
            <span className="services-hero-gradient-text">
              {" "}
              for UK Businesses
            </span>
          </h1>

          <p className="services-hero-description">
            From managed bookkeeping and tax compliance to business advisory and
            payroll—47 Accountants delivers all the accounting services your
            business needs, handled by qualified professionals.
          </p>

          <motion.div
            className="services-hero-features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="services-hero-feature-badge"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <feature.icon size={18} className="feature-badge-icon" />
                <span className="feature-badge-text">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="services-hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              className="services-hero-primary-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="services-hero-secondary-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="services-hero-visual"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="services-hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
              alt="Financial Analysis & Accounting"
              className="services-hero-image"
            />
            <div className="services-hero-image-overlay" />
          </div>

          <motion.div
            className="services-hero-floating-card services-hero-card-1"
            animate={{
              y: [0, -10, 0],
              rotate: [2, 4, 2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="floating-card-icon">
              <Zap size={20} />
            </div>
            <div className="floating-card-content">
              <div className="floating-card-label">Accuracy</div>
              <div className="floating-card-value">100%</div>
            </div>
          </motion.div>

          <motion.div
            className="services-hero-floating-card services-hero-card-2"
            animate={{
              y: [0, 10, 0],
              rotate: [-2, -4, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="floating-card-icon">
              <CheckCircle size={20} />
            </div>
            <div className="floating-card-content">
              <div className="floating-card-label">Retention</div>
              <div className="floating-card-value">99%</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
