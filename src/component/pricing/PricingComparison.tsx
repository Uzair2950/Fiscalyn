import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import "../../css/pricing/pricing-comparison.css";

const PricingComparison: React.FC = () => {
  const features = [
    {
      category: "Core Features",
      items: [
        {
          name: "Monthly transactions",
          starter: "500",
          professional: "2,500",
          enterprise: "Unlimited",
        },
        {
          name: "User accounts",
          starter: "1",
          professional: "5",
          enterprise: "Unlimited",
        },
        {
          name: "Bank account sync",
          starter: "2 accounts",
          professional: "Unlimited",
          enterprise: "Unlimited",
        },
        {
          name: "Expense tracking",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Invoice generation",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Receipt capture",
          starter: true,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Advanced Features",
      items: [
        {
          name: "Multi-currency support",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Automated invoicing",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Cash flow forecasting",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Custom reports",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Predictive analytics",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "White-label branding",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
    {
      category: "Compliance & Tax",
      items: [
        {
          name: "Basic tax calculations",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "MTD compliance",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "VAT returns",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "CIS reporting",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Advanced compliance suite",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Audit trail",
          starter: false,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Integrations",
      items: [
        {
          name: "Basic integrations",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Premium integrations",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "API access",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Custom integrations",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Webhook support",
          starter: false,
          professional: false,
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
          name: "Chat support",
          starter: false,
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
          name: "24/7 phone support",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Custom onboarding",
          starter: false,
          professional: false,
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
                  <div className="comparison-plan-name">Starter</div>
                  <div className="comparison-plan-price">£29/month</div>
                </th>
                <th className="comparison-plan-header">
                  <div className="comparison-plan-popular">Most Popular</div>
                  <div className="comparison-plan-name">Professional</div>
                  <div className="comparison-plan-price">£79/month</div>
                </th>
                <th className="comparison-plan-header">
                  <div className="comparison-plan-name">Enterprise</div>
                  <div className="comparison-plan-price">£199/month</div>
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
