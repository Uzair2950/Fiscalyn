import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Shield,
  TrendingUp,
  CheckCircle,
  Users,
  Receipt,
  Briefcase,
} from "lucide-react";
import "../../css/services/service-detail.css";

const ServiceDetail: React.FC = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Managed Bookkeeping",
      subtitle: "Accurate Records, Always",
      description:
        "Our dedicated bookkeepers maintain your ledgers meticulously throughout the year. Every transaction is recorded, categorised, and reconciled on time—giving you a real-time view of your business finances without lifting a finger. No more last-minute scrambles at year end.",
      features: [
        "Monthly bank reconciliations",
        "Expense categorisation & coding",
        "Cloud accounting software setup",
        "Supplier & customer ledger management",
        "Receipt capture & management",
        "Monthly management reports",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      position: "left",
    },
    {
      icon: Shield,
      title: "Tax & Compliance",
      subtitle: "Zero Stress, Full Compliance",
      description:
        "We handle all your statutory obligations with HMRC and Companies House—on time, every time. Our tax specialists prepare your Corporation Tax return, Self-Assessment, and year-end accounts while actively identifying legal opportunities to reduce your tax liability.",
      features: [
        "Corporation Tax returns",
        "Self-Assessment for directors",
        "Year-end statutory accounts",
        "HMRC correspondence handling",
        "Penalty protection & alerts",
        "Tax planning & optimisation",
      ],
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      position: "right",
    },
    {
      icon: TrendingUp,
      title: "Business Advisory",
      subtitle: "Strategy Beyond the Numbers",
      description:
        "We go beyond compliance to act as your trusted financial adviser. Through regular review meetings, we analyse your financial performance, discuss growth strategies, and provide the clarity you need to make confident business decisions.",
      features: [
        "Quarterly management accounts",
        "Cash flow planning & forecasting",
        "Budgeting & variance analysis",
        "Profit improvement strategies",
        "Director's salary & dividend planning",
        "Investment & expansion advice",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      position: "left",
    },
    {
      icon: Users,
      title: "Payroll & Pensions",
      subtitle: "Reliable Team Payments",
      description:
        "End-to-end payroll management for your entire team. We handle PAYE calculations, RTI submissions, payslips, and auto-enrolment pension obligations so your employees are paid accurately and on time—every time. Stay compliant without the admin burden.",
      features: [
        "Monthly PAYE & RTI submissions",
        "Payslip generation & distribution",
        "P60 & P45 processing",
        "Pension auto-enrolment management",
        "CIS deduction tracking",
        "Holiday & statutory pay calculations",
      ],
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
      position: "right",
    },
    {
      icon: Receipt,
      title: "VAT Services",
      subtitle: "HMRC Reporting & Returns",
      description:
        "Navigating VAT complexity with confidence. From initial registration to quarterly Making Tax Digital (MTD) compliant filings, we ensure you're always on the right side of HMRC. We also advise on the most tax-efficient VAT scheme for your business.",
      features: [
        "VAT registration & deregistration",
        "Quarterly MTD-compliant returns",
        "VAT scheme selection & advice",
        "EC sales & acquisitions",
        "HMRC VAT inspection support",
        "Input tax recovery maximisation",
      ],
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      position: "left",
    },
    {
      icon: Briefcase,
      title: "Company Secretarial",
      subtitle: "Corporate Governance",
      description:
        "Maintaining impeccable statutory records and meeting all Companies House obligations. We manage your confirmation statements, handle director and shareholder changes, and ensure your corporate records are always accurate, up to date, and fully compliant.",
      features: [
        "Annual confirmation statements",
        "Director & shareholder changes",
        "Company formation & incorporation",
        "Registered office service",
        "Share allotments & transfers",
        "Minute & resolution drafting",
      ],
      image:
        "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?w=800&h=600&fit=crop",
      position: "right",
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
          <div className="service-detail-badge">
            <span className="service-detail-badge-text">Our Core Services</span>
          </div>

          <h2 className="service-detail-headline">
            Six Core Services.
            <span className="service-detail-gradient-text">
              {" "}
              One Trusted Partner.
            </span>
          </h2>

          <p className="service-detail-subheadline">
            From bookkeeping and tax compliance to payroll, VAT, and business
            advisory— 47 Accountants provides every accounting service your UK
            business needs.
          </p>
        </motion.div>

        <div className="service-detail-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-detail-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <div className="service-detail-icon">
                  <service.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="service-detail-card-title">{service.title}</h3>
                <p className="service-detail-card-desc">{service.description}</p>

                <ul className="service-detail-features" style={{ marginTop: '20px' }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-detail-feature-item">
                      <CheckCircle size={16} className="service-detail-feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
