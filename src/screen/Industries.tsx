import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ShieldCheck,
  Zap,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import NavBar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import OptimizedImage from "../component/common/OptimizedImage";
import { industriesData, IndustryData } from "../data/industriesData";
import "../css/industries/industries.css";

const Industries: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredIndustries: IndustryData[] =
    selectedFilter === "all"
      ? industriesData
      : industriesData.filter((ind) => ind.id === selectedFilter);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="industries-page">
      <NavBar />

      {/* ---------------- Hero Section ---------------- */}
      <section className="industries-hero-section">
        <div className="industries-hero-bg-orb" />

        <div className="industries-hero-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="industries-badge">
              <Building2 size={16} />
              <span>Sectors We Excel In</span>
            </div>

            <h1 className="industries-hero-title">
              Tailored Accounting Built for{" "}
              <span className="industries-gradient-text">Your Specific Industry</span>
            </h1>

            <p className="industries-hero-desc">
              Every industry comes with distinct tax rules, revenue models, and compliance hurdles.
              At 47 Accountants, we deliver specialized domain expertise that turns industry-specific challenges into growth opportunities.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="industries-filter-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              className={`industry-filter-tab ${selectedFilter === "all" ? "active" : ""}`}
              onClick={() => setSelectedFilter("all")}
            >
              <Sparkles size={16} />
              <span>All Sectors ({industriesData.length})</span>
            </button>

            {industriesData.map((ind) => (
              <button
                key={ind.id}
                className={`industry-filter-tab ${selectedFilter === ind.id ? "active" : ""}`}
                onClick={() => setSelectedFilter(ind.id)}
              >
                <ind.icon size={16} />
                <span>{ind.title.split("&")[0].trim()}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Industries Cards Section ---------------- */}
      <section className="industries-section-padding">
        <div className="industries-container">
          <motion.div
            className="industries-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedFilter}
          >
            {filteredIndustries.map((industry) => (
              <motion.div
                key={industry.id}
                className="industry-card"
                variants={itemVariants}
              >
                <div className="industry-card-media">
                  <OptimizedImage
                    src={industry.image}
                    alt={industry.title}
                    className="industry-card-img"
                    width={800}
                    height={520}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  <div className="industry-card-badge-tag">
                    <industry.icon size={14} />
                    <span>{industry.badge}</span>
                  </div>
                </div>

                <div className="industry-card-content">
                  <div>
                    <div className="industry-card-header">
                      <div className="industry-card-title-row">
                        <div className="industry-icon-box">
                          <industry.icon size={22} />
                        </div>
                        <h2 className="industry-card-title">{industry.title}</h2>
                      </div>
                      <p className="industry-card-subtitle">{industry.subtitle}</p>
                      <p className="industry-card-desc">{industry.description}</p>
                    </div>

                    <div className="industry-details-grid">
                      <div>
                        <div className="industry-block-title">
                          <AlertCircle size={15} color="var(--color-gold-primary)" />
                          <span>Industry Challenges</span>
                        </div>
                        <ul className="industry-list-items">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="industry-list-item">
                              <span className="industry-list-item-icon">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="industry-block-title">
                          <CheckCircle2 size={15} color="var(--color-gold-primary)" />
                          <span>Our Specialized Solutions</span>
                        </div>
                        <ul className="industry-list-items">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="industry-list-item">
                              <CheckCircle2 size={14} className="industry-list-item-icon" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="industry-card-footer">
                    <div className="industry-metric-box">
                      <div className="metric-number">{industry.keyMetric.value}</div>
                      <div className="metric-text">{industry.keyMetric.label}</div>
                    </div>

                    <div className="industry-services-links">
                      <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                        Recommended Services:
                      </span>
                      {industry.recommendedServices.map((service, idx) => (
                        <Link
                          key={idx}
                          to={service.path}
                          className="industry-service-tag"
                        >
                          <span>{service.name}</span>
                          <ArrowRight size={12} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Why Industry Expertise Section ---------------- */}
      <section className="why-industry-section">
        <div className="industries-container">
          <motion.div
            className="service-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section-badge">Why Vertical Specialization Matters</span>
            <h2 className="service-section-title">Beyond Generic Accounting</h2>
            <p className="service-section-subtitle">
              Generic accounting misses industry-specific tax credits, inventory nuances, and specialized software integrations. We deliver vertical precision.
            </p>
          </motion.div>

          <div className="why-grid">
            <motion.div
              className="why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="why-icon">
                <ShieldCheck size={24} />
              </div>
              <h3 className="why-title">Specialized Tax Allowances</h3>
              <p className="why-desc">
                We unlock sector-specific tax reliefs like R&D credits, CIS capital allowances, property SPV structures, and cross-border VAT exemptions.
              </p>
            </motion.div>

            <motion.div
              className="why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="why-icon">
                <Zap size={24} />
              </div>
              <h3 className="why-title">Seamless Software Stack Integrations</h3>
              <p className="why-desc">
                We natively connect your industry tools—Shopify, A2X, Stripe, Chargebee, Lightspeed, or Cryptio—directly into your cloud ledger.
              </p>
            </motion.div>

            <motion.div
              className="why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="why-icon">
                <TrendingUp size={24} />
              </div>
              <h3 className="why-title">Industry Benchmarking & KPI Modeling</h3>
              <p className="why-desc">
                Compare your unit economics, COGS percentages, and gross profit margins against top-performing peers in your exact industry sector.
              </p>
            </motion.div>
          </div>

          {/* ---------------- CTA Banner ---------------- */}
          <motion.div
            className="service-cta-banner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginTop: "70px" }}
          >
            <h2 className="service-cta-title">Ready for Accounting Tailored to Your Industry?</h2>
            <p className="service-cta-desc">
              Speak with a senior accountant who speaks your industry's language. Schedule a 1-on-1 strategic consultation today.
            </p>
            <Link to="/contact" className="service-primary-btn" style={{ padding: "16px 36px", fontSize: "1.05rem" }}>
              <PhoneCall size={20} />
              <span>Book Your Industry Consultation</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
