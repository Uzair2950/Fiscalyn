import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import "../../css/contact/contact-hero.css";

const ContactHero: React.FC = () => {
  return (
    <section className="contact-hero-section">
      <div className="contact-hero-background">
        <div className="contact-hero-grid-pattern" />
        <motion.div
          className="contact-hero-gradient-orb contact-hero-orb-1"
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
          className="contact-hero-gradient-orb contact-hero-orb-2"
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

      <div className="contact-hero-container">
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="contact-hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="contact-hero-badge-dot" />
            <span className="contact-hero-badge-text">Get In Touch</span>
          </motion.div>

          <h1 className="contact-hero-headline">
            We're Here to
            <span className="contact-hero-gradient-text">
              {" "}
              Help You Succeed
            </span>
          </h1>

          <p className="contact-hero-description">
            Have questions about Fiscalyn? Our team is ready to help. Reach out
            via email, phone, or fill out the form below and we'll get back to
            you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          className="contact-hero-quick-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            className="contact-hero-info-item"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={20} className="contact-hero-info-icon" />
            <span className="contact-hero-info-text">hello@fiscalyn.com</span>
          </motion.div>

          <motion.div
            className="contact-hero-info-item"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone size={20} className="contact-hero-info-icon" />
            <span className="contact-hero-info-text">+44 20 1234 5678</span>
          </motion.div>

          <motion.div
            className="contact-hero-info-item"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <MapPin size={20} className="contact-hero-info-icon" />
            <span className="contact-hero-info-text">London, UK</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
