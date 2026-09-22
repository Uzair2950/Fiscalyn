import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import DeferredCaptcha from "./DeferredCaptcha";
import type { HCaptchaInstance } from "./Web3FormsCaptcha";
import { submitWeb3Form } from "../../lib/web3forms";
import { trackConversion } from "../../lib/analytics";
import "../../css/common/footer.css";

import LogoBadge from "../../assets/image/LogoBadge.webp";
import OptimizedImage from "./OptimizedImage";

interface FooterLink {
  name: string;
  path: string;
  badge?: string;
}

interface FooterLinks {
  platform: FooterLink[];
  company: FooterLink[];
  solutions: FooterLink[];
  legal: FooterLink[];
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const captchaRef = useRef<HCaptchaInstance>(null);
  const [formStatus, setFormStatus] = useState<
    { type: "success" | "error"; message: string } | null
  >(null);

  const submitSubscription = async (captchaToken: string): Promise<void> => {
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      await submitWeb3Form({
        email,
        subject: "Newsletter subscription request from 47 Accountants website",
        from_name: "47 Accountants Website",
        request_type: "Newsletter subscription",
        botcheck: "",
        "h-captcha-response": captchaToken,
      });

      setEmail("");
      setShowCaptcha(false);
      trackConversion("newsletter_subscription");
      setFormStatus({
        type: "success",
        message: "Thank you. Your subscription request has been received.",
      });
    } catch {
      setFormStatus({
        type: "error",
        message: "We could not submit your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      captchaRef.current?.resetCaptcha();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormStatus(null);
    setShowCaptcha(true);
  };

  const handleCaptchaToken = (token: string): void => {
    if (token && !isSubmitting) void submitSubscription(token);
  };

  const footerLinks: FooterLinks = {
    platform: [
      { name: "All Services", path: "/services" },
      { name: "Managed Bookkeeping", path: "/services/bookkeeping" },
      { name: "Tax & Compliance", path: "/services/tax-compliance" },
      { name: "Business Advisory", path: "/services/business-advisory" },
      { name: "Payroll & Pensions", path: "/services/payroll-pensions" },
      { name: "VAT Services", path: "/services/vat-services" },
      { name: "Company Secretarial", path: "/services/company-secretarial" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Industries", path: "/industries" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
    solutions: [
      { name: "For Businesses", path: "/solutions/for-businesses" },
      { name: "Workload Outsourcing", path: "/solutions/outsource-workload" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Editorial Policy", path: "/editorial-policy" },
    ],
  };

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
              <OptimizedImage
                src={LogoBadge}
                alt="47 Accountants logo badge"
                className="footer-logo-badge"
                width={283}
                height={310}
              />
              <span className="footer-logo-text">47 Accountants</span>
            </div>

            <p className="footer-tagline">
              Expert accountancy and tax services for businesses worldwide. From
              bookkeeping to business advisory—we handle the numbers so you can
              focus on growth.
            </p>

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
              <h4 className="footer-column-title">Solutions</h4>
              <ul className="footer-links-list">
                {footerLinks.solutions.map((link, index) => (
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
              Get the latest global tax updates, accounting tips, and business
              finance insights.
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="newsletter-input-wrapper">
                <Mail size={18} className="newsletter-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="newsletter-input"
                  required
                  disabled={isSubmitting}
                  autoComplete="email"
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
              <DeferredCaptcha
                visible={showCaptcha}
                captchaRef={captchaRef}
                onTokenChange={handleCaptchaToken}
              />
              <p className="form-privacy-note">
                We use your email only for this subscription request. See our{" "}
                <Link to="/privacy">Privacy Policy</Link>.
              </p>
              {formStatus && (
                <p
                  className={`newsletter-status newsletter-status-${formStatus.type}`}
                  role={formStatus.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {formStatus.message}
                </p>
              )}
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
