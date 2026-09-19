import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  PhoneCall,
  Sparkles,
  HelpCircle,
  Plus,
  Minus,
} from "lucide-react";
import NavBar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import NotFound from "./NotFound";
import { servicesData, ServiceData } from "../data/servicesData";
import "../css/services/service-page.css";

const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service: ServiceData | undefined = serviceSlug
    ? servicesData[serviceSlug]
    : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceSlug]);

  if (!service) {
    return <NotFound />;
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
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
    <div className="service-page">
      <NavBar />

      {/* ---------------- Hero Section ---------------- */}
      <section className="service-hero-section">
        <div className="service-hero-bg-orb" />
        <div className="service-hero-bg-orb-2" />

        <div className="service-hero-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="service-hero-badge">
              <Sparkles size={16} />
              <span>{service.badge}</span>
            </div>

            <h1 className="service-hero-title">
              {service.title.split(" ")[0]}{" "}
              <span className="service-hero-gradient-text">
                {service.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="service-hero-subtitle">{service.subtitle}</p>

            <p className="service-hero-desc">{service.heroDesc}</p>

            <div className="service-hero-actions">
              <Link to="/contact" className="service-primary-btn">
                <span>Book a Strategy Call</span>
                <ArrowRight size={18} />
              </Link>
              <a href="#features" className="service-secondary-btn">
                <span>Explore Scope</span>
                <ChevronDown size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="service-hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={service.heroImage}
              alt={service.title}
              className="service-hero-image"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------------- Metrics Section ---------------- */}
      <section className="service-metrics-section">
        <div className="service-metrics-container">
          {service.keyMetrics.map((metric, index) => (
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

      {/* ---------------- Features / Scope Section ---------------- */}
      <section id="features" className="service-section-padding">
        <div className="service-section-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section-badge">Scope of Service</span>
            <h2 className="service-section-title">What's Included in {service.title}</h2>
            <p className="service-section-subtitle">
              Comprehensive, transparent deliverables tailored to elevate your business operations and compliance.
            </p>
          </motion.div>

          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {service.features.map((feature, index) => (
              <motion.div key={index} className="feature-card" variants={itemVariants}>
                <div className="feature-icon-box">
                  <service.icon size={26} />
                </div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-desc">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Target Audience Section ---------------- */}
      <section className="service-section-padding audience-section">
        <div className="service-section-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section-badge">Tailored For You</span>
            <h2 className="service-section-title">Who Is This Service For?</h2>
            <p className="service-section-subtitle">
              Designed specifically to solve financial bottlenecks for dynamic growth-oriented entities.
            </p>
          </motion.div>

          <div className="audience-grid">
            {service.targetAudience.map((item, index) => (
              <motion.div
                key={index}
                className="audience-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="audience-card-number">0{index + 1}</div>
                <h3 className="audience-card-title">{item.title}</h3>
                <p className="audience-card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Process Timeline Section ---------------- */}
      <section className="service-section-padding">
        <div className="service-section-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section-badge">Our Workflow</span>
            <h2 className="service-section-title">How We Deliver Excellence</h2>
            <p className="service-section-subtitle">
              A structured 4-step onboarding and ongoing execution methodology for seamless results.
            </p>
          </motion.div>

          <div className="process-timeline">
            {service.process.map((step, index) => (
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

      {/* ---------------- Key Benefits Section ---------------- */}
      <section className="service-section-padding benefits-section">
        <div className="service-section-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section-badge">Why 47 Accountants</span>
            <h2 className="service-section-title">Measurable Business Value</h2>
            <p className="service-section-subtitle">
              Experience proactive guidance, precision engineering, and dedicated partner-led service.
            </p>
          </motion.div>

          <div className="benefits-grid">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="benefit-check-icon">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-desc">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ Section (Matching Home FAQ Design & Animation) ---------------- */}
      <section className="service-section-padding">
        <div className="service-section-container">
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
            <h2 className="service-section-title">
              Everything You Need to Know About{" "}
              <span className="service-hero-gradient-text">{service.title}</span>
            </h2>
            <p className="service-section-subtitle">
              Got specific questions about our {service.title} service? Here are answers to common queries.
            </p>
          </motion.div>

          <div className="faq-questions-container" style={{ maxWidth: "900px", margin: "0 auto" }}>
            {service.faqs.map((faq, index) => {
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
            <h2 className="service-cta-title">Ready to Elevate Your {service.title}?</h2>
            <p className="service-cta-desc">
              Schedule a confidential 1-on-1 consultation with our senior accounting team today. No obligation, total transparency.
            </p>
            <Link to="/contact" className="service-primary-btn" style={{ padding: "16px 36px", fontSize: "1.05rem" }}>
              <PhoneCall size={20} />
              <span>Book Your Consultation Now</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
