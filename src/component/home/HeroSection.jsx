import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import "../../css/home/hero.css";

const HeroSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const floatingBadges = [
    { icon: Shield, label: "Bank-Level Security", color: "#635bff", delay: 0.5 },
    { icon: Zap, label: "Real-Time Processing", color: "#00d4ff", delay: 0.7 },
    { icon: TrendingUp, label: "Smart Analytics", color: "#00e676", delay: 0.9 },
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
            ease: "easeInOut"
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
            delay: 2
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
            <span className="hero-badge-text">Trusted by 10,000+ Businesses</span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Modern Financial Infrastructure for
            <span className="hero-gradient-text"> Tomorrow's Business</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-description">
            Fiscalyn empowers businesses with intelligent financial tools, 
            seamless integrations, and enterprise-grade security. 
            From compliance to growth analytics—we handle the complexity.
          </motion.p>

          <motion.div className="hero-cta-group" variants={itemVariants}>
            <motion.button 
              className="hero-primary-btn"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
               onClick={() => (window.location.href = "/contact")}
            >
              <span>Start Building Free</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              className="hero-secondary-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
               onClick={() => (window.location.href = "/contact")}
            >
              Schedule Demo
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-trust-line">
            <div className="hero-trust-item">
              <span className="hero-trust-icon">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-icon">✓</span>
              <span>Free 14-day trial</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-icon">✓</span>
              <span>Cancel anytime</span>
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
            <div className="dashboard-window">
              <div className="dashboard-header">
                <div className="dashboard-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="dashboard-title">Financial Dashboard</div>
              </div>
              
              <div className="dashboard-content">
                <div className="dashboard-stats">
                  <motion.div 
                    className="stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <div className="stat-label">Total Revenue</div>
                    <div className="stat-value">$847,294</div>
                    <div className="stat-change positive">+24.5% ↑</div>
                  </motion.div>
                  
                  <motion.div 
                    className="stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <div className="stat-label">Active Clients</div>
                    <div className="stat-value">2,847</div>
                    <div className="stat-change positive">+12.3% ↑</div>
                  </motion.div>
                </div>

                <motion.div 
                  className="dashboard-chart"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                >
                  <svg viewBox="0 0 400 120" className="chart-svg">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#635bff" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#635bff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M 0 100 Q 50 80, 100 70 T 200 50 T 300 30 T 400 20"
                      stroke="#635bff"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.4, duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M 0 100 Q 50 80, 100 70 T 200 50 T 300 30 T 400 20 L 400 120 L 0 120 Z"
                      fill="url(#chartGradient)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6, duration: 0.6 }}
                    />
                  </svg>
                </motion.div>

                <motion.div 
                  className="dashboard-metrics"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  <div className="metric-item">
                    <div className="metric-dot" style={{ background: '#635bff' }} />
                    <span>Transactions: 12.4K</span>
                  </div>
                  <div className="metric-item">
                    <div className="metric-dot" style={{ background: '#00d4ff' }} />
                    <span>Processing: $2.1M</span>
                  </div>
                  <div className="metric-item">
                    <div className="metric-dot" style={{ background: '#00e676' }} />
                    <span>Success Rate: 99.8%</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {floatingBadges.map((badge, index) => (
            <motion.div
              key={index}
              className={`floating-badge floating-badge-${index + 1}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: badge.delay, duration: 0.5, type: "spring" }}
            >
              <div className="floating-badge-icon" style={{ background: badge.color }}>
                <badge.icon size={16} color="#fff" />
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