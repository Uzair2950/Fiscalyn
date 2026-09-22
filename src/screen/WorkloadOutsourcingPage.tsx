import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  HelpCircle,
  Plus,
  Minus,
  ChevronDown,
  Layers,
} from "lucide-react";
import NavBar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import Breadcrumbs from "../component/common/Breadcrumbs";
import CollaborationCTA from "../component/collaboration/CollaborationCTA";
import OptimizedImage from "../component/common/OptimizedImage";
import { engagementData } from "../data/engagementData";
import "../css/solutions/solutions-page.css";
import "../css/services/service-page.css";

const WorkloadOutsourcingPage: React.FC = () => {
  const data = engagementData["outsource-workload"];
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
            { label: "Workload Outsourcing" },
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
              <Layers size={16} />
              <span>{data.badge}</span>
            </div>

            <h1 className="solutions-hero-title">
              White-Label Accounting &{" "}
              <span className="solutions-gradient-text">Workload Delegation</span>
            </h1>

            <p className="solutions-hero-subtitle">{data.subtitle}</p>

            <p className="solutions-hero-desc">{data.heroDesc}</p>

            <div className="solutions-hero-actions">
              <Link to="/contact" className="service-primary-btn">
                <span>Discuss Partner Delegation</span>
                <ArrowRight size={18} />
              </Link>
              <a href="#delegation-scope" className="service-secondary-btn">
                <span>Delegable Workload</span>
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
      <section id="why-outsource" className="solutions-section-padding">
        <div className="solutions-section-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section-badge">Practice Capacity Extension</span>
            <h2 className="service-section-title">Why CPA Practices Delegate to Us</h2>
            <p className="service-section-subtitle">
              We act as a seamless white-label back-office team, allowing your firm to take on more clients without increasing fixed payroll costs.
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
      <section id="delegation-scope" className="solutions-section-padding capabilities-section">
        <div className="solutions-section-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section-badge">Workload Delegation Scope</span>
            <h2 className="service-section-title">Tasks You Can Outsource to 47 Accountants</h2>
            <p className="service-section-subtitle">
              From seasonal tax preparation to historic catch-up bookkeeping and statutory audit workpapers.
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

      {/* ---------------- 4-Step Delegation Workflow ---------------- */}
      <section className="solutions-section-padding">
        <div className="solutions-section-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section-badge">White-Label Workflow</span>
            <h2 className="service-section-title">How Workload Delegation Works</h2>
            <p className="service-section-subtitle">
              A structured 4-step workflow designed to deliver review-ready client accounting packs under your brand.
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
            <h2 className="service-section-title">Questions About Workload Delegation</h2>
            <p className="service-section-subtitle">
              Everything you need to know about white-label confidentiality, data security, and practice capacity extension.
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
            <h2 className="service-cta-title">Ready to Outsource Your Accounting Workload?</h2>
            <p className="service-cta-desc">
              Schedule a confidential 1-on-1 practice strategy session with our senior leadership team. NDA protected, 100% white-label guaranteed.
            </p>
            <Link to="/contact" className="service-primary-btn" style={{ padding: "16px 36px", fontSize: "1.05rem" }}>
              <PhoneCall size={20} />
              <span>Discuss Practice Outsourcing</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <CollaborationCTA />

      <Footer />
    </div>
  );
};

export default WorkloadOutsourcingPage;
