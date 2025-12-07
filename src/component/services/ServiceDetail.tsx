import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Shield, TrendingUp, CheckCircle } from "lucide-react";
import "../../css/services/service-detail.css";

const ServiceDetail: React.FC = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Cloud Bookkeeping",
      subtitle: "Real-Time Financial Clarity",
      description:
        "Experience automated bookkeeping that works around the clock. Our intelligent system processes every transaction, categorizes expenses, and reconciles accounts in real-time, giving you instant visibility into your financial health. No more manual data entry or end-of-month surprises.",
      features: [
        "Automatic bank feed synchronization",
        "AI-powered transaction categorization",
        "Real-time financial reporting",
        "Multi-currency support (47+ currencies)",
        "Smart duplicate detection",
        "Mobile receipt capture",
      ],
      color: "#635bff",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      position: "left",
    },
    {
      icon: Shield,
      title: "Compliance & Tax",
      subtitle: "Zero-Stress Regulation",
      description:
        "Stay compliant effortlessly with automated tax management. Our platform handles Making Tax Digital (MTD), VAT returns, CIS reporting, and all UK regulatory requirements automatically. Never miss a deadline or face penalties again.",
      features: [
        "Automated HMRC submissions",
        "Real-time VAT calculations",
        "CIS compliance tracking",
        "Digital tax receipts",
        "Penalty protection alerts",
        "Annual accounts preparation",
      ],
      color: "#00d4ff",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      position: "right",
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      subtitle: "Data-Driven Decisions",
      description:
        "Transform raw financial data into actionable business intelligence. Our advanced analytics engine provides predictive insights, cash flow forecasting, and performance benchmarks to fuel strategic growth decisions.",
      features: [
        "Predictive cash flow modeling",
        "Custom KPI dashboards",
        "Industry benchmarking",
        "Profit & loss forecasting",
        "Budget variance analysis",
        "Executive reporting suite",
      ],
      color: "#00e676",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      position: "left",
    },
  ];

  return (
    <section className="service-detail-section">
      <div className="service-detail-container">
        <motion.div
          className="service-detail-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="service-detail-badge">
            <span className="service-detail-badge-dot" />
            <span className="service-detail-badge-text">Our Services</span>
          </motion.div>

          <h2 className="service-detail-headline">
            Everything You Need to
            <span className="service-detail-gradient-text">
              {" "}
              Succeed Financially
            </span>
          </h2>

          <p className="service-detail-subheadline">
            Comprehensive financial solutions designed to automate operations,
            ensure compliance, and drive growth—all from one powerful platform.
          </p>
        </motion.div>

        <div className="service-detail-list">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-detail-item service-detail-item-${service.position}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="service-detail-image-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-detail-image"
                />
                <div className="service-detail-image-overlay" />
              </motion.div>

              <div className="service-detail-content">
                <div
                  className="service-detail-icon"
                  style={{
                    background: `${service.color}15`,
                    border: `2px solid ${service.color}`,
                  }}
                >
                  <service.icon
                    size={32}
                    color={service.color}
                    strokeWidth={2}
                  />
                </div>

                <div className="service-detail-text">
                  <div
                    className="service-detail-subtitle"
                    style={{ color: service.color }}
                  >
                    {service.subtitle}
                  </div>
                  <h3
                    className="service-detail-title"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h3>
                  <p className="service-detail-description">
                    {service.description}
                  </p>
                </div>

                <div className="service-detail-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="service-detail-feature-item">
                      <CheckCircle
                        size={18}
                        color={service.color}
                        strokeWidth={2.5}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
