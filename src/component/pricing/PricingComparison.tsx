import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import "../../css/pricing/pricing-comparison.css";

const PricingComparison: React.FC = () => {
  const features = [
    {
      category: "Core Services",
      items: [
        {
          name: "Dedicated qualified accountant",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Annual accounts preparation",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Corporation Tax return",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Self-Assessment returns",
          starter: "1 director",
          professional: "Up to 2",
          enterprise: "Unlimited",
        },
        {
          name: "Confirmation statement",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Bookkeeping",
          starter: "Basic",
          professional: "Monthly",
          enterprise: "Full",
        },
      ],
    },
    {
      category: "VAT & Payroll",
      items: [
        {
          name: "VAT return filing",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Payroll management",
          starter: false,
          professional: "Up to 5 employees",
          enterprise: "Unlimited",
        },
        {
          name: "CIS returns",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "P11D & benefits",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Pension auto-enrolment",
          starter: false,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Compliance & Tax",
      items: [
        {
          name: "HMRC correspondence",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Tax planning & advice",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "R&D tax credit claims",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Capital gains planning",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "MTD compliance",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Companies House filings",
          starter: true,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Advisory & Reporting",
      items: [
        {
          name: "Management accounts",
          starter: false,
          professional: "Monthly",
          enterprise: "Monthly",
        },
        {
          name: "Cash flow forecasting",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Advisory meetings",
          starter: false,
          professional: "Quarterly",
          enterprise: "Monthly",
        },
        {
          name: "Custom financial reports",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Director salary & dividend planning",
          starter: false,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Support",
      items: [
        {
          name: "Email support",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Phone support",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Priority support",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Dedicated account manager",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Same-day response",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Client portal access",
          starter: true,
          professional: true,
          enterprise: true,
        },
      ],
    },
  ];

  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return (
        <td className="comparison-check-cell">
          {value ? (
            <Check
              size={20}
              className="comparison-check-icon"
              strokeWidth={2.5}
            />
          ) : (
            <X size={20} className="comparison-cross-icon" strokeWidth={2.5} />
          )}
        </td>
      );
    }
    return <td className="comparison-text-value">{value}</td>;
  };

  return (
    <section className="pricing-comparison-section">
      <div className="pricing-comparison-container">
        <motion.div
          className="pricing-comparison-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="pricing-comparison-badge">
            <span className="pricing-comparison-badge-dot" />
            <span className="pricing-comparison-badge-text">
              Detailed Comparison
            </span>
          </motion.div>

          <h2 className="pricing-comparison-headline">
            Compare Plans
            <span className="pricing-comparison-gradient-text">
              {" "}
              Side by Side
            </span>
          </h2>

          <p className="pricing-comparison-subheadline">
            See exactly what's included in each plan. All features are available
            during your free trial.
          </p>
        </motion.div>

        <motion.div
          className="pricing-comparison-table-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <table className="pricing-comparison-table">
            <thead>
              <tr>
                <th>Features</th>
                <th className="comparison-plan-header">
                  <div className="comparison-plan-name">Essentials</div>
                  <div className="comparison-plan-price">£89/month</div>
                </th>
                <th className="comparison-plan-header">
                  <div className="comparison-plan-popular">Most Popular</div>
                  <div className="comparison-plan-name">Growth</div>
                  <div className="comparison-plan-price">£199/month</div>
                </th>
                <th className="comparison-plan-header">
                  <div className="comparison-plan-name">Enterprise</div>
                  <div className="comparison-plan-price">£399/month</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <tr className="comparison-category-row">
                    <td colSpan={4}>{section.category}</td>
                  </tr>
                  {section.items.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <td className="comparison-feature-name">{item.name}</td>
                      {renderCell(item.starter)}
                      {renderCell(item.professional)}
                      {renderCell(item.enterprise)}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingComparison;
