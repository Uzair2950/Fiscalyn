import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  HelpCircle,
  Plus,
  Minus,
  ChevronDown,
} from "lucide-react";
import NavBar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import Breadcrumbs from "../component/common/Breadcrumbs";
import OptimizedImage from "../component/common/OptimizedImage";
import { engagementData } from "../data/engagementData";
import "../css/solutions/solutions-page.css";
import "../css/services/service-page.css";

const ForBusinessesPage: React.FC = () => {
  const data = engagementData["for-businesses"];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const answerVariants: Variants = {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <div className="solutions-page">
      <NavBar />
      <div className="page-breadcrumb-container solutions-breadcrumbs">
        <Breadcrumbs
          items={[
            { label: "Solutions" },
            { label: "For Businesses" },
          ]}
        />
      </div>

      {/* ---------------- Hero Section ---------------- */}
      <section className="solutions-hero-section">
        <div className="solutions-hero-bg-orb" />
        <div className="solutions-hero-bg-orb-2" />

        <div className="solutions-hero-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="solutions-badge">
              <Building2 size={16} />
              <span>{data.badge}</span>
            </div>

            <h1 className="solutions-hero-title">
              Accounting & Tax Services Built to{" "}
              <span className="solutions-gradient-text">Scale Your Business</span>
            </h1>

            <p className="solutions-hero-subtitle">{data.subtitle}</p>

            <p className="solutions-hero-desc">{data.heroDesc}</p>

            <div className="solutions-hero-actions">
              <Link to="/contact" className="service-primary-btn">
                <span>Book Free Consultation</span>
                <ArrowRight size={18} />
              </Link>
              <a href="#why-us" className="service-secondary-btn">
                <span>Why Switch to Us</span>
                <ChevronDown size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="solutions-hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <OptimizedImage
              src={data.heroImage}
              alt={data.title}
              className="solutions-hero-image"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 100vw, 44vw"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ---------------- Metrics Section ---------------- */}
      <section className="solutions-metrics-section">
        <div className="solutions-metrics-container">
          {data.metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-desc">{metric.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- Value Pillars Section ---------------- */}
      <section id="why-us" className="solutions-section-padding">
        <div className="solutions-section-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section-badge">The 47 Accountants Advantage</span>
            <h2 className="service-section-title">Why Businesses Choose Us</h2>
            <p className="service-section-subtitle">
              We combine enterprise-grade financial engineering with personalized senior accountant mentorship.
            </p>
          </motion.div>

          <div className="solutions-pillars-grid">
            {data.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="solutions-pillar-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="solutions-pillar-icon">
                  <pillar.icon size={26} />
                </div>
                <div>
                  <h3 className="solutions-pillar-title">{pillar.title}</h3>
                  <p className="solutions-pillar-desc">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Capabilities Section ---------------- */}
      <section className="solutions-section-padding capabilities-section">
        <div className="solutions-section-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section-badge">Complete Coverage</span>
            <h2 className="service-section-title">What We Take Off Your Plate</h2>
            <p className="service-section-subtitle">
              From daily bookkeeping to statutory HMRC tax filings and corporate advisory—everything is handled.
            </p>
          </motion.div>

          <div className="capabilities-grid">
            {data.capabilities?.map((item, index) => (
              <motion.div
                key={index}
                className="capability-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CheckCircle2 size={20} className="capability-icon" />
                <span className="capability-text">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 4-Step Onboarding Process ---------------- */}
      <section className="solutions-section-padding">
        <div className="solutions-section-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section-badge">Zero Downtime</span>
            <h2 className="service-section-title">How Onboarding Works</h2>
            <p className="service-section-subtitle">
              A 4-step effortless transition process managed completely by our qualified team.
            </p>
          </motion.div>

          <div className="process-timeline">
            {data.process.map((step, index) => (
              <motion.div
                key={index}
                className="process-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="process-step-num">{step.step}</div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ Accordion Section ---------------- */}
      <section className="solutions-section-padding">
        <div className="solutions-section-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="service-hero-badge" style={{ marginBottom: "16px" }}>
              <HelpCircle size={16} color="var(--color-gold-primary)" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="service-section-title">Questions About Switching Accountants</h2>
            <p className="service-section-subtitle">
              Everything you need to know about engaging 47 Accountants as your business accounting partner.
            </p>
          </motion.div>

          <div className="faq-questions-container" style={{ maxWidth: "900px", margin: "0 auto" }}>
            {data.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <button
                    className="faq-question-button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-icon-wrapper"
                    >
                      {isOpen ? (
                        <Minus size={20} strokeWidth={2.5} />
                      ) : (
                        <Plus size={20} strokeWidth={2.5} />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={answerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="faq-answer-wrapper"
                      >
                        <motion.div
                          className="faq-answer-content"
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="faq-answer-border" />
                          <p className="faq-answer-text">{faq.answer}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* ---------------- CTA Banner ---------------- */}
          <motion.div
            className="service-cta-banner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="service-cta-title">Ready to Have Us as Your Accountants?</h2>
            <p className="service-cta-desc">
              Schedule a confidential 1-on-1 consultation with our senior accounting team today. Zero transfer hassle, total transparency.
            </p>
            <Link to="/contact" className="service-primary-btn" style={{ padding: "16px 36px", fontSize: "1.05rem" }}>
              <PhoneCall size={20} />
              <span>Book Your Strategy Call</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForBusinessesPage;
