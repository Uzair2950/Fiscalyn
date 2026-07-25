import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, Users } from "lucide-react";
import "../../css/about/careers-preview.css";

const CareersPreview: React.FC = () => {
  const openings = [
    {
      title: "Qualified Accountant (ACCA/ACA)",
      department: "Accounting",
      location: "London / Hybrid",
      type: "Full-time",
    },
    {
      title: "Payroll Administrator",
      department: "Payroll",
      location: "Remote / London",
      type: "Full-time",
    },
    {
      title: "Client Relationship Manager",
      department: "Client Services",
      location: "Remote",
      type: "Full-time",
    },
  ];

  const perks = [
    "Competitive salary & annual bonus",
    "Flexible hybrid working",
    "CPD & professional development support",
    "Study support (ACCA/ACA)",
    "25 days holiday + bank holidays",
    "Company pension & health plan",
  ];

  return (
    <section className="careers-preview-section">
      <div className="careers-preview-container">
        <motion.div
          className="careers-preview-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="careers-preview-badge">
            <Briefcase size={14} />
            <span className="careers-preview-badge-text">Join Us</span>
          </motion.div>

          <h2 className="careers-preview-headline">
            Build the Future with
            <span className="careers-preview-gradient-text">
              {" "}
              47accountants
            </span>
          </h2>

          <p className="careers-preview-subheadline">
            We're always looking for dedicated professionals who are passionate
            about accounting, client service, and making a real difference to
            businesses.
          </p>
        </motion.div>

        <div className="careers-preview-content">
          <motion.div
            className="careers-preview-openings"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="openings-title">Open Positions</h3>
            <div className="openings-list">
              {openings.map((job, index) => (
                <motion.div
                  key={index}
                  className="opening-card"
                  whileHover={{ x: 5 }}
                >
                  <div className="opening-info">
                    <h4 className="opening-title">{job.title}</h4>
                    <div className="opening-meta">
                      <span className="opening-meta-item">
                        <Users size={14} />
                        {job.department}
                      </span>
                      <span className="opening-meta-item">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={20} className="opening-arrow" />
                </motion.div>
              ))}
            </div>
            <motion.button
              className="careers-view-all-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Openings
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          <motion.div
            className="careers-preview-perks"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="perks-title">Why Join 47accountants?</h3>
            <div className="perks-grid">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  className="perk-item"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05, type: "spring" }}
                >
                  <span className="perk-check">✓</span>
                  <span className="perk-text">{perk}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersPreview;
