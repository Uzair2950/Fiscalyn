import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../css/home/cta.css";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your email submission logic here
    setEmail("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Stats data
  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Support" },
    { value: "$2B+", label: "Processed" },
  ];

  // Feature badges
  const features = [
    { icon: "⚡", text: "Lightning Fast" },
    { icon: "🔒", text: "Bank-Level Security" },
    { icon: "🌐", text: "Global Access" },
    { icon: "📊", text: "Real-Time Analytics" },
  ];

  return (
    <section className="cta-container">
      {/* Animated Background */}
      <div className="cta-background">
        <div className="cta-gradient-orb cta-gradient-orb-1" />
        <div className="cta-gradient-orb cta-gradient-orb-2" />
        <div className="cta-gradient-orb cta-gradient-orb-3" />
      </div>

      {/* Grid Pattern */}
      <div className="cta-grid-pattern" aria-hidden="true" />

      {/* Floating Particles */}
      <div className="cta-particles" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="cta-particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="cta-content-wrapper">
        <motion.div
          className="cta-main-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="cta-badge">
            <span className="cta-badge-icon">✨</span>
            <span className="cta-badge-text">Join thousands of businesses</span>
          </motion.div>

          {/* Headline */}
          <motion.h2 variants={itemVariants} className="cta-headline">
            Ready to Transform Your
            <span className="cta-gradient-text"> Financial Operations?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="cta-subheadline">
            Start your journey today with enterprise-grade infrastructure.
            No credit card required.
          </motion.p>

          {/* Email Form */}
          <motion.form
            variants={itemVariants}
            className="cta-form"
            onSubmit={handleSubmit}
          >
            <div className="cta-input-wrapper">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="cta-input"
                required
              />
              <motion.button
                type="submit"
                className="cta-submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <span className="cta-button-text">Get Started</span>
                <motion.span
                  className="cta-button-icon"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
            <p className="cta-form-note">
              Free 14-day trial • No credit card required • Cancel anytime
            </p>
          </motion.form>

          {/* Feature Badges */}
          <motion.div variants={itemVariants} className="cta-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="cta-feature-badge"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="cta-feature-icon">{feature.icon}</span>
                <span className="cta-feature-text">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="cta-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="cta-stat-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="cta-stat-value">{stat.value}</div>
                <div className="cta-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="cta-trust">
            <div className="cta-trust-item">
              <div className="cta-trust-icon">🏆</div>
              <div className="cta-trust-text">SOC 2 Type II Certified</div>
            </div>
            <div className="cta-trust-item">
              <div className="cta-trust-icon">🛡️</div>
              <div className="cta-trust-text">GDPR Compliant</div>
            </div>
            <div className="cta-trust-item">
              <div className="cta-trust-icon">⭐</div>
              <div className="cta-trust-text">4.9/5 Customer Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Side Decorative Elements */}
        <motion.div
          className="cta-decoration cta-decoration-left"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="cta-decoration-circle cta-decoration-circle-1" />
          <div className="cta-decoration-circle cta-decoration-circle-2" />
          <div className="cta-decoration-circle cta-decoration-circle-3" />
        </motion.div>

        <motion.div
          className="cta-decoration cta-decoration-right"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <div className="cta-decoration-square cta-decoration-square-1" />
          <div className="cta-decoration-square cta-decoration-square-2" />
          <div className="cta-decoration-square cta-decoration-square-3" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;