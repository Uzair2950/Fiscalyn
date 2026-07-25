import React from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import "../../css/pricing/pricing-cards.css";

interface PricingCardsProps {
  isAnnual: boolean;
}

const PricingCards: React.FC<PricingCardsProps> = ({ isAnnual }) => {
  const plans = [
    {
      name: "Essentials",
      description:
        "Perfect for sole traders and micro-businesses needing core compliance covered.",
      monthlyPrice: 89,
      annualPrice: 71,
      featured: false,
      cta: "Book Free Consultation",
      features: [
        { text: "Dedicated qualified accountant", available: true },
        { text: "Annual accounts preparation", available: true },
        { text: "Corporation Tax return", available: true },
        { text: "Self-Assessment (1 director)", available: true },
        { text: "Confirmation statement filing", available: true },
        { text: "Basic bookkeeping support", available: true },
        { text: "Email & phone support", available: true },
        { text: "VAT return filing", available: false },
        { text: "Monthly management accounts", available: false },
        { text: "Payroll management", available: false },
        { text: "Dedicated advisory meetings", available: false },
      ],
    },
    {
      name: "Growth",
      description:
        "For growing businesses that need full compliance plus ongoing financial insight.",
      monthlyPrice: 199,
      annualPrice: 159,
      featured: true,
      popular: true,
      cta: "Book Free Consultation",
      features: [
        { text: "Dedicated qualified accountant", available: true },
        { text: "Annual accounts & CT return", available: true },
        { text: "Quarterly VAT returns", available: true },
        { text: "Monthly bookkeeping", available: true },
        { text: "Monthly management accounts", available: true },
        { text: "Payroll (up to 5 employees)", available: true },
        { text: "Self-Assessment (up to 2 directors)", available: true },
        { text: "Quarterly advisory meetings", available: true },
        { text: "Cash flow forecasting", available: true },
        { text: "Priority support", available: true },
        { text: "R&D tax credits", available: false },
      ],
    },
    {
      name: "Enterprise",
      description:
        "Tailored accounting & advisory for established businesses with complex needs.",
      monthlyPrice: 399,
      annualPrice: 319,
      featured: false,
      cta: "Contact Us",
      features: [
        { text: "Senior dedicated accountant", available: true },
        { text: "Full compliance suite", available: true },
        { text: "Unlimited VAT returns", available: true },
        { text: "Full bookkeeping & reconciliation", available: true },
        { text: "Monthly management accounts", available: true },
        { text: "Payroll (unlimited employees)", available: true },
        { text: "Multi-director Self-Assessments", available: true },
        { text: "Monthly advisory meetings", available: true },
        { text: "R&D tax credit claims", available: true },
        { text: "24/7 dedicated support", available: true },
        { text: "Custom reporting", available: true },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
    <section className="pricing-cards-section">
      <div className="pricing-cards-container">
        <motion.div
          className="pricing-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
              variants={itemVariants as any}
              whileHover={{ y: -8 }}
            >
              {plan.popular && (
                <div className="pricing-popular-badge">Most Popular</div>
              )}

              <div className="pricing-card-header">
                <h3 className="pricing-card-name">{plan.name}</h3>
                <p className="pricing-card-description">{plan.description}</p>
              </div>

              <div>
                <div className="pricing-card-price-wrapper">
                  <span className="pricing-card-currency">£</span>
                  <span className="pricing-card-amount">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="pricing-card-period">/month</span>
                </div>
                <p className="pricing-card-billing-note">
                  {isAnnual ? "Billed annually" : "Billed monthly"}
                </p>
              </div>

              <motion.button
                className={`pricing-card-cta ${
                  plan.featured ? "primary" : "secondary"
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => (window.location.href = "/contact")}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={18} />
              </motion.button>

              <div>
                <h4 className="pricing-card-features-title">What's Included</h4>
                <ul className="pricing-card-features-list">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`pricing-card-feature-item ${
                        !feature.available ? "unavailable" : ""
                      }`}
                    >
                      {feature.available ? (
                        <Check size={18} color="#00e676" strokeWidth={2.5} />
                      ) : (
                        <X size={18} color="#ff6b6b" strokeWidth={2.5} />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards;
