import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';
import '../../css/common/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Newsletter signup:', email);
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  const footerLinks = {
    platform: [
      { name: 'Features', path: '/features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Integrations', path: '/integrations' },
      { name: 'API Documentation', path: '/api' },
      { name: 'Security', path: '/security' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers', badge: 'Hiring' },
      { name: 'Blog', path: '/blog' },
      { name: 'Press Kit', path: '/press' },
      { name: 'Contact', path: '/contact' },
    ],
    resources: [
      { name: 'Help Center', path: '/help' },
      { name: 'Community', path: '/community' },
      { name: 'Webinars', path: '/webinars' },
      { name: 'Case Studies', path: '/cases' },
      { name: 'Partners', path: '/partners' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Compliance', path: '/compliance' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
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
              <div className="footer-logo-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="32" height="32" rx="8" fill="url(#footerLogoGradient)" />
                  <path d="M12 16h16M12 20h12M12 24h16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="4" y1="4" x2="36" y2="36">
                      <stop offset="0%" stopColor="#635bff" />
                      <stop offset="100%" stopColor="#00d4ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="footer-logo-text">Fiscalyn</span>
            </div>
            
            <p className="footer-tagline">
              Empowering businesses with intelligent financial infrastructure. 
              From compliance to growth analytics—we handle the complexity.
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
              <h4 className="footer-column-title">Platform</h4>
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
                      {link.badge && <span className="footer-badge">{link.badge}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-column-title">Resources</h4>
              <ul className="footer-links-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
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
              Get the latest insights on financial technology and business growth.
            </p>
            
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-wrapper">
                <Mail size={18} className="newsletter-icon" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                {isSubmitting ? 'Subscribing...' : (
                  <>
                    Subscribe
                    <ArrowRight size={16} />
                  </>
                )}
              </motion.button>
            </form>

            <div className="footer-contact-info">
              <div className="contact-info-item">
                <MapPin size={16} />
                <span>London, United Kingdom</span>
              </div>
              <div className="contact-info-item">
                <Phone size={16} />
                <span>+44 20 1234 5678</span>
              </div>
              <div className="contact-info-item">
                <Mail size={16} />
                <span>hello@fiscalyn.com</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Fiscalyn, Inc. All rights reserved.
            </p>
            
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms</Link>
              <Link to="/sitemap" className="footer-bottom-link">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;