import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield } from "lucide-react";
import "../../css/home/cta.css";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      console.log("Email submitted:", email);
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  const features = [
    { icon: Zap, text: "Setup in 5 minutes" },
    { icon: CheckCircle, text: "No credit card required" },
    { icon: Shield, text: "Enterprise security" },
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
    { value: "$2B+", label: "Processed" },
  ];

  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="cta-grid-pattern" />
        <motion.div 
          className="cta-gradient-orb cta-orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="cta-gradient-orb cta-orb-2"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="cta-content-wrapper">
        <motion.div
          className="cta-main-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="cta-badge">
            <span className="cta-badge-icon">✨</span>
            <span className="cta-badge-text">Limited Time Offer</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="cta-headline">
            Ready to Transform Your
            <span className="cta-gradient-text"> Financial Operations?</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="cta-subheadline">
            Join thousands of businesses using Fiscalyn to streamline finances, 
            ensure compliance, and drive growth. Start your free 14-day trial today.
          </motion.p>

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
                disabled={isSubmitting}
              />
              <motion.button
                type="submit"
                className="cta-submit-button"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                <span className="cta-button-text">
                  {isSubmitting ? "Processing..." : "Start Free Trial"}
                </span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
            <p className="cta-form-note">
              Free 14-day trial • No credit card required • Cancel anytime
            </p>
          </motion.form>

          <motion.div variants={itemVariants} className="cta-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="cta-feature-badge"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <feature.icon size={18} className="cta-feature-icon" />
                <span className="cta-feature-text">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="cta-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="cta-stat-item"
                whileHover={{ scale: 1.1 }}
              >
                <div className="cta-stat-value">{stat.value}</div>
                <div className="cta-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="cta-trust">
            <div className="cta-trust-item">
              <div className="cta-trust-icon">🏆</div>
              <div className="cta-trust-text">SOC 2 Certified</div>
            </div>
            <div className="cta-trust-item">
              <div className="cta-trust-icon">🛡️</div>
              <div className="cta-trust-text">GDPR Compliant</div>
            </div>
            <div className="cta-trust-item">
              <div className="cta-trust-icon">⭐</div>
              <div className="cta-trust-text">4.9/5 Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="cta-particles">
        {[...Array(15)].map((_, i) => (
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
    </section>
  );
};

export default CTASection;