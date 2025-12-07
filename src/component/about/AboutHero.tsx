import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Target } from "lucide-react";
import "../../css/about/about-hero.css";

const AboutHero: React.FC = () => {
  const stats = [
    { icon: Users, value: "10K+", label: "Active Users" },
    { icon: Target, value: "99.9%", label: "Uptime SLA" },
    { icon: Sparkles, value: "12+", label: "Years Experience" },
  ];

  return (
    <section className="about-hero-section">
      <div className="about-hero-background">
        <div className="about-hero-grid-pattern" />
        <motion.div
          className="about-hero-gradient-orb about-hero-orb-1"
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
          className="about-hero-gradient-orb about-hero-orb-2"
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

      <div className="about-hero-container">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="about-hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="about-hero-badge-dot" />
            <span className="about-hero-badge-text">About Fiscalyn</span>
          </motion.div>

          <h1 className="about-hero-headline">
            Building the Future of
            <span className="about-hero-gradient-text">
              {" "}
              Financial Intelligence
            </span>
          </h1>

          <p className="about-hero-description">
            We're on a mission to transform how businesses manage their
            finances. Through cutting-edge technology and obsessive attention to
            detail, we're making world-class financial management accessible to
            everyone.
          </p>

          <motion.div
            className="about-hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.button
              className="about-hero-primary-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.getElementsByClassName(
                  "careers-preview-section"
                )[0];
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Join Our Team</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="about-hero-secondary-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el =
                  document.getElementsByClassName("our-story-section")[0];
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Story
            </motion.button>
          </motion.div>

          <motion.div
            className="about-hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="about-hero-stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="about-hero-stat-icon">
                  <stat.icon size={24} strokeWidth={2} />
                </div>
                <div className="about-hero-stat-content">
                  <div className="about-hero-stat-value">{stat.value}</div>
                  <div className="about-hero-stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="about-hero-visual"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
              alt="Fiscalyn Team"
              className="about-hero-image"
            />
            <div className="about-hero-image-overlay" />
          </div>

          <motion.div
            className="about-hero-floating-card about-hero-card-1"
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
            <div
              className="floating-card-icon"
              style={{ background: "#635bff" }}
            >
              <Target size={20} color="#fff" />
            </div>
            <div className="floating-card-content">
              <div className="floating-card-label">Mission-Driven</div>
              <div className="floating-card-value">100%</div>
            </div>
          </motion.div>

          <motion.div
            className="about-hero-floating-card about-hero-card-2"
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
            <div
              className="floating-card-icon"
              style={{ background: "#00d4ff" }}
            >
              <Users size={20} color="#fff" />
            </div>
            <div className="floating-card-content">
              <div className="floating-card-label">Global Team</div>
              <div className="floating-card-value">50+</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
