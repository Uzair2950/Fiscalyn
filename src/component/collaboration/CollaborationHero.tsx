import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Building2, ShieldCheck, Users, Clock } from "lucide-react";
import "../../css/collaboration/collaboration-hero.css";

const CollaborationHero: React.FC = () => {
  return (
    <section className="collab-hero-section">
      <div className="collab-hero-background">
        <div className="collab-hero-grid-pattern" />
        <motion.div
          className="collab-hero-gradient-orb collab-hero-orb-1"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="collab-hero-gradient-orb collab-hero-orb-2"
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="collab-hero-container">
        <div className="collab-hero-content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="collab-hero-badge">
              <span className="collab-hero-badge-dot" />
              <span className="collab-hero-badge-text">Accountancy Practice Partnership</span>
            </div>

            <h1 className="collab-hero-headline">
              Outsource Your Accounting &amp; Tax Work to
              <span className="collab-hero-gradient-text"> ACCA Experts</span>
            </h1>

            <p className="collab-hero-description">
              Expand your firm’s capacity without the risk or overhead of full-time hiring.
              47 Accountants provides white-label bookkeeping, VAT returns, payroll, and statutory accounts
              subcontracting for UK accounting practices and businesses.
            </p>

            <div className="collab-hero-cta-group">
              <button
                className="collab-primary-btn"
                onClick={() => {
                  const el = document.getElementById("outsourcing-cta");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Partner With Us</span>
                <ArrowRight size={18} />
              </button>
              <button
                className="collab-secondary-btn"
                onClick={() => {
                  const el = document.getElementById("models-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Models
              </button>
            </div>

            <div className="collab-trust-badges">
              <div className="collab-trust-item">
                <ShieldCheck size={18} className="collab-trust-icon" />
                <span>100% White-Label Capability</span>
              </div>
              <div className="collab-trust-item">
                <Building2 size={18} className="collab-trust-icon" />
                <span>UK GDPR &amp; HMRC Compliant</span>
              </div>
              <div className="collab-trust-item">
                <Clock size={18} className="collab-trust-icon" />
                <span>Guaranteed SLA Turnaround</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="collab-hero-visual"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="collab-visual-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px' }}>
                Practice Partnership Impact
              </h3>
              <div className="collab-stats-grid">
                <div className="collab-stat-box">
                  <div className="collab-stat-num">60%</div>
                  <div className="collab-stat-label">Cost Savings vs In-House</div>
                </div>
                <div className="collab-stat-box">
                  <div className="collab-stat-num">48 hrs</div>
                  <div className="collab-stat-label">Average SLA Turnaround</div>
                </div>
                <div className="collab-stat-box">
                  <div className="collab-stat-num">100%</div>
                  <div className="collab-stat-label">Double Reviewed Quality</div>
                </div>
                <div className="collab-stat-box">
                  <div className="collab-stat-num">0</div>
                  <div className="collab-stat-label">Client Contact Contamination</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationHero;
