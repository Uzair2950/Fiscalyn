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
  accentColor: string;
  softBg: string;
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
      accentColor: "var(--color-gold-primary)",
      softBg: "var(--color-gold-soft)",
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
        "Year-end statutory accounts",
        "HMRC representation",
      ],
      accentColor: "var(--color-navy)",
      softBg: "var(--color-navy-soft)",
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
      accentColor: "var(--color-gold-primary)",
      softBg: "var(--color-gold-soft)",
    },
    {
      icon: Users,
      number: "04",
      title: "Payroll & Pensions",
      subtitle: "Reliable Team Payments",
      description:
        "End-to-end payroll management for your team. We handle PAYE, payslips, and pension auto-enrolment so you remain a compliant and punctual employer.",
      features: [
        "RTI submissions to HMRC",
        "P60 & P45 processing",
        "Pension administration",
      ],
      accentColor: "var(--color-navy)",
      softBg: "var(--color-navy-soft)",
    },
    {
      icon: Receipt,
      number: "05",
      title: "VAT Services",
      subtitle: "HMRC Reporting & Returns",
      description:
        "Navigating the complexities of VAT. From registration to quarterly MTD-compliant filings, we ensure you stay on the right side of HMRC while maximizing recovery.",
      features: [
        "VAT registration & setup",
        "Quarterly returns filing",
        "Scheme optimization",
      ],
      accentColor: "var(--color-red)",
      softBg: "var(--color-red-soft)",
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
      accentColor: "var(--color-gold-primary)",
      softBg: "var(--color-gold-soft)",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
      <div className="services-overview-container">
        <motion.div
          className="services-overview-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="services-overview-badge">
            <span className="services-overview-badge-text">Our Core Accounting Services</span>
          </div>
          <h2 className="services-overview-headline">
            Complete Financial Solutions
            <span className="services-overview-gradient-text">
              {" "}
              Built for UK Business
            </span>
          </h2>
          <p className="services-overview-subheadline">
            From day-to-day operations to strategic planning, 47 Accountants
            delivers end-to-end accounting services that scale with your success.
          </p>
        </motion.div>

        <motion.div
          className="services-overview-grid"
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
              whileHover={{ y: -6 }}
            >
              <div>
                <div
                  className="service-card-icon"
                  style={{
                    background: service.softBg,
                    color: service.accentColor,
                    borderColor: service.accentColor,
                  }}
                >
                  <service.icon size={26} strokeWidth={2} />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                <ul className="service-detail-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-detail-feature-item">
                      <CheckCircle
                        size={16}
                        style={{ color: service.accentColor }}
                        className="service-detail-feature-icon"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '20px' }}>
                <a
                  href="/services"
                  className="service-card-link"
                  style={{ color: service.accentColor }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
