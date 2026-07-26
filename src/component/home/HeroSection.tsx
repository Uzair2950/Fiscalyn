import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Shield, Zap, TrendingUp, LucideIcon } from "lucide-react";
import "../../css/home/hero.css";

interface FloatingBadge {
  icon: LucideIcon;
  label: string;
  bgColor: string;
  textColor: string;
  delay: number;
}

const HeroSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const floatingBadges: FloatingBadge[] = [
    { icon: Shield, label: "HMRC Compliant", bgColor: "var(--color-navy)", textColor: "#ffffff", delay: 0.5 },
    { icon: Zap, label: "MTD Ready", bgColor: "var(--color-gold-primary)", textColor: "var(--text-on-gold)", delay: 0.7 },
    { icon: TrendingUp, label: "Tax Optimised", bgColor: "var(--color-red)", textColor: "#ffffff", delay: 0.9 },
  ];

  return (
    <section className="hero-container">
      <div className="hero-background">
        <div className="hero-grid-pattern" />
        <motion.div
          className="hero-gradient-orb hero-orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="hero-gradient-orb hero-orb-2"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="hero-content-wrapper">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">
              Trusted by 1,200+ UK Businesses
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Expert Accounting &amp; Tax Services for
            <span className="hero-gradient-text"> UK Businesses</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-description">
            47accountants delivers expert bookkeeping, tax compliance, payroll,
            and business advisory services tailored for UK businesses. From HMRC
            submissions to year-end accounts—we handle every detail.
          </motion.p>

          <motion.div className="hero-cta-group" variants={itemVariants}>
            <motion.button
              className="hero-primary-btn"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <span>Get a Free Consultation</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="hero-secondary-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/services")}
            >
              View Our Services
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-trust-line">
            <div className="hero-trust-item">
              <span className="hero-trust-icon">✓</span>
              <span>Free initial consultation</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-icon">✓</span>
              <span>ACCA qualified accountants</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-icon">✓</span>
              <span>Fixed monthly fees</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="hero-visual-section">
          <motion.div
            className="hero-dashboard-mockup"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=900&fit=crop" 
              alt="Accounting professionals collaborating" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '24px', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-card)' }} 
            />
          </motion.div>

          {floatingBadges.map((badge, index) => (
            <motion.div
              key={index}
              className={`floating-badge floating-badge-${index + 1}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: badge.delay, duration: 0.5, type: "spring" }}
            >
              <div
                className="floating-badge-icon"
                style={{ background: badge.bgColor, color: badge.textColor }}
              >
                <badge.icon size={16} />
              </div>
              <span className="floating-badge-label">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
