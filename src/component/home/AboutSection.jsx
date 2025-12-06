import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Lock, Users, Zap, Target, Globe } from "lucide-react";
import "../../css/home/about.css";

const AboutSection = () => {
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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const values = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "Cutting-edge technology that stays ahead of the curve",
      color: "#635bff"
    },
    {
      icon: Lock,
      title: "Security Obsessed",
      description: "Bank-grade protection for your financial data",
      color: "#00d4ff"
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success drives everything we do",
      color: "#00e676"
    }
  ];

  const features = [
    { icon: Target, label: "95% faster processing", color: "#635bff" },
    { icon: Globe, label: "Global compliance", color: "#00d4ff" },
    { icon: Zap, label: "Real-time insights", color: "#00e676" },
  ];

  return (
    <section className="about-container">
      <div className="about-background">
        <div className="about-grid-pattern" />
        <motion.div 
          className="about-gradient-orb about-orb-1"
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
          className="about-gradient-orb about-orb-2"
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

      <div className="about-content-wrapper">
        <motion.div
          className="about-text-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="about-badge">
            <span className="about-badge-dot" />
            <span>About Fiscalyn</span>
          </motion.div>

          <motion.h2 variants={itemVariants}>
            Empowering the Future of
            <span className="about-gradient-text"> Financial Services</span>
          </motion.h2>

          <motion.p variants={itemVariants}>
            At <strong>Fiscalyn</strong>, we believe financial management should be 
            intelligent, intuitive, and accessible. We're building the next generation 
            of financial infrastructure that transforms complexity into clarity.
          </motion.p>

          <motion.p variants={itemVariants}>
            Founded by a team of fintech innovators and enterprise software veterans, 
            we're driven by a singular mission: to make world-class financial tools 
            available to businesses of all sizes. From real-time analytics to 
            regulatory compliance, our platform handles the intricate details so you 
            can focus on growth.
          </motion.p>

          <motion.div 
            className="about-values-grid"
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div 
                  className="value-icon"
                  style={{ background: `${value.color}15` }}
                >
                  <value.icon size={24} color={value.color} strokeWidth={2} />
                </div>
                <div className="value-content">
                  <h3 style={{ color: value.color }}>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="about-visual-section"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="visual-card-stack">
            <motion.div
              className="visual-card visual-card-1"
              animate={{
                y: [0, -10, 0],
                rotate: [2, 4, 2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="visual-card-header">
                <div className="visual-card-icon" style={{ background: '#635bff' }}>
                  <Target size={20} color="#fff" />
                </div>
                <div className="visual-card-title">Performance</div>
              </div>
              <div className="visual-card-chart">
                <svg viewBox="0 0 200 80" className="mini-chart">
                  <defs>
                    <linearGradient id="chartGrad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#635bff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#635bff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 0 60 Q 50 40, 100 30 T 200 15"
                    stroke="#635bff"
                    strokeWidth="2.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 0 60 Q 50 40, 100 30 T 200 15 L 200 80 L 0 80 Z"
                    fill="url(#chartGrad1)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  />
                </svg>
              </div>
              <div className="visual-card-stat">
                <span className="stat-value">+142%</span>
                <span className="stat-label">Growth Rate</span>
              </div>
            </motion.div>

            <motion.div
              className="visual-card visual-card-2"
              animate={{
                y: [0, 10, 0],
                rotate: [-2, -4, -2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className="visual-card-header">
                <div className="visual-card-icon" style={{ background: '#00d4ff' }}>
                  <Globe size={20} color="#fff" />
                </div>
                <div className="visual-card-title">Global Reach</div>
              </div>
              <div className="visual-card-metrics">
                <div className="metric-row">
                  <span className="metric-label">Active Users</span>
                  <span className="metric-value" style={{ color: '#00d4ff' }}>24.8K</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Countries</span>
                  <span className="metric-value" style={{ color: '#00d4ff' }}>47</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Transactions</span>
                  <span className="metric-value" style={{ color: '#00d4ff' }}>2.1M</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="visual-card visual-card-3"
              animate={{
                y: [0, -8, 0],
                rotate: [1, 3, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <div className="visual-card-header">
                <div className="visual-card-icon" style={{ background: '#00e676' }}>
                  <Zap size={20} color="#fff" />
                </div>
                <div className="visual-card-title">Real-Time</div>
              </div>
              <div className="visual-card-status">
                <div className="status-indicator">
                  <div className="status-dot" />
                  <span>All Systems Operational</span>
                </div>
                <div className="uptime-stat">
                  <span className="uptime-value">99.9%</span>
                  <span className="uptime-label">Uptime</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="about-features-list">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-badge"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div 
                  className="feature-badge-icon"
                  style={{ background: feature.color }}
                >
                  <feature.icon size={14} color="#fff" strokeWidth={2.5} />
                </div>
                <span>{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;