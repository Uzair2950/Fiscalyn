import React from "react";
import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  Shield,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Receipt,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import "../../css/home/services-overview.css";

interface Service {
  icon: LucideIcon;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
}

const ServicesOverview: React.FC = () => {
  const services: Service[] = [
    {
      icon: BookOpen,
      number: "01",
      title: "Managed Bookkeeping",
      subtitle: "Accurate Financial Records",
      description:
        "Expertly managed ledgers that give you a clear view of your business. We handle every transaction, categorization, and reconciliation so your books are always trial-balance ready.",
      features: [
        "Dedicated bookkeeper",
        "Multi-currency management",
        "Monthly reconciliations",
      ],
      color: "#635bff",
    },
    {
      icon: Shield,
      number: "02",
      title: "Tax & Compliance",
      subtitle: "Professional Tax Planning",
      description:
        "Comprehensive Corporation Tax and Self-Assessment services. We ensure full compliance with HMRC regulations while identifying legal opportunities to optimize your tax position.",
      features: [
        "Corporation Tax returns",
        "Year-end accounts",
        "HMRC representation",
      ],
      color: "#00d4ff",
    },
    {
      icon: BarChart3,
      number: "03",
      title: "Business Advisory",
      subtitle: "Strategic Growth Support",
      description:
        "Beyond basic accounting, we act as your strategic partner. We provide the financial mentorship needed to scale, from cash flow management to investment readiness.",
      features: [
        "Performance reviews",
        "Budgeting & Forecasting",
        "Profitability analysis",
      ],
      color: "#00e676",
    },
    {
      icon: Users,
      number: "04",
      title: "Payroll & Pensions",
      subtitle: "Reliable Team Payments",
      description:
        "End-to-end payroll management for your team. We handle PAYE, payslips, and pension auto-enrolment so you remain a compliant and punctual employer.",
      features: [
        "RTI submissions",
        "P60 & P45 processing",
        "Pension administration",
      ],
      color: "#ffb300",
    },
    {
      icon: Receipt,
      number: "05",
      title: "VAT Services",
      subtitle: "HMRC Reporting & Returns",
      description:
        "Navigating the complexities of VAT. From registration to quarterly MTD-compliant filings, we ensure you stay on the right side of HMRC while maximizing recovery.",
      features: [
        "VAT registration",
        "Quarterly returns",
        "Scheme optimization",
      ],
      color: "#f44336",
    },
    {
      icon: Briefcase,
      number: "06",
      title: "Company Secretarial",
      subtitle: "Corporate Governance",
      description:
        "Maintaining your statutory obligations with Companies House. We manage your confirmation statements and company filings so your corporate record remains spotless.",
      features: [
        "Company formation",
        "Confirmation statements",
        "Registered office services",
      ],
      color: "#9c27b0",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="services-overview-section">
      <div className="services-wrapper">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Complete Financial Solutions
            <span className="services-gradient-text">
              {" "}
              Built for Modern Business
            </span>
          </h2>
          <p className="services-intro">
            From day-to-day operations to strategic planning, 47accountants
            delivers end-to-end financial services that scale with your success.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="service-card-header">
                <div
                  className="service-icon-wrapper"
                  style={{ background: `${service.color}15` }}
                >
                  <service.icon
                    size={28}
                    color={service.color}
                    strokeWidth={2}
                  />
                </div>
                <span
                  className="service-number"
                  style={{ color: service.color }}
                >
                  {service.number}
                </span>
              </div>

              <div className="service-card-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} color={service.color} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div className="service-card-footer" whileHover={{ x: 5 }}>
                <span style={{ color: service.color }}>Learn More</span>
                <ArrowRight size={18} color={service.color} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="services-cta-content">
            <h3>Ready to transform your financial operations?</h3>
            <p>
              Join thousands of businesses already using 47accountants to
              streamline their finances.
            </p>
          </div>
          <motion.button
            className="services-cta-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => (window.location.href = "/services")}
          >
            <span>View All Services</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
