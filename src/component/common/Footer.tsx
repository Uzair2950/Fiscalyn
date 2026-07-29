import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  LucideIcon,
} from "lucide-react";
import "../../css/common/footer.css";

import LogoBadge from "../../assets/image/LogoBadge.webp";

interface FooterLink {
  name: string;
  path: string;
  badge?: string;
}

interface FooterLinks {
  platform: FooterLink[];
  company: FooterLink[];
  legal: FooterLink[];
}

interface SocialLink {
  icon: LucideIcon;
  url: string;
  label: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Newsletter signup:", email);
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  const footerLinks: FooterLinks = {
    platform: [
      { name: "Services", path: "/services" },
      { name: "Bookkeeping", path: "/services" },
      { name: "Tax & Compliance", path: "/services" },
      { name: "Payroll", path: "/services" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  };

  const socialLinks: SocialLink[] = [
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="footer-component">
      <div className="footer-container">
        <motion.div
          className="footer-main"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand Section */}
          <motion.div className="footer-brand" variants={itemVariants}>
            <div className="footer-logo">
              <img
                src={LogoBadge}
                alt="47 Accountants logo badge"
                className="footer-logo-badge"
              />
              <span className="footer-logo-text">47 Accountants</span>
            </div>

            <p className="footer-tagline">
              Expert accountancy and tax services for businesses worldwide. From
              bookkeeping to business advisory—we handle the numbers so you can
              focus on growth.
            </p>

            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div className="footer-links-grid" variants={itemVariants}>
            <div className="footer-links-column">
              <h4 className="footer-column-title">Services</h4>
              <ul className="footer-links-list">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-column-title">Company</h4>
              <ul className="footer-links-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                      {link.badge && (
                        <span className="footer-badge">{link.badge}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-column-title">Legal</h4>
              <ul className="footer-links-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div className="footer-newsletter" variants={itemVariants}>
            <h4 className="footer-column-title">Stay Updated</h4>
            <p className="newsletter-description">
              Get the latest global tax updates, accounting tips, and business
              finance insights.
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-wrapper">
                <Mail size={18} className="newsletter-icon" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="newsletter-input"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <motion.button
                type="submit"
                className="newsletter-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={16} />
                  </>
                )}
              </motion.button>
            </form>

            <div className="footer-contact-info">
              <a
                href="https://wa.me/447462229006"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
                style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
              >
                <Phone size={16} />
                <span>+44 7462229006</span>
              </a>
              <div className="contact-info-item">
                <Mail size={16} />
                <span>info@47accountants.com</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} 47 Accountants Ltd. All rights
              reserved.
            </p>

            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">
                Privacy
              </Link>
              <Link to="/terms" className="footer-bottom-link">
                Terms
              </Link>
              <Link to="/sitemap" className="footer-bottom-link">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
