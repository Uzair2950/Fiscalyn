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
      name: "Starter",
      description:
        "Perfect for freelancers and small businesses just starting out.",
      monthlyPrice: 29,
      annualPrice: 23,
      featured: false,
      cta: "Start Free Trial",
      features: [
        { text: "Up to 500 transactions/month", available: true },
        { text: "1 user account", available: true },
        { text: "Basic bookkeeping", available: true },
        { text: "Bank account sync (2 accounts)", available: true },
        { text: "Expense tracking", available: true },
        { text: "Invoice generation", available: true },
        { text: "Basic reports", available: true },
        { text: "Email support", available: true },
        { text: "Advanced analytics", available: false },
        { text: "Priority support", available: false },
        { text: "Custom integrations", available: false },
      ],
    },
    {
      name: "Professional",
      description:
        "For growing businesses that need advanced features and insights.",
      monthlyPrice: 79,
      annualPrice: 63,
      featured: true,
      popular: true,
      cta: "Start Free Trial",
      features: [
        { text: "Up to 2,500 transactions/month", available: true },
        { text: "5 user accounts", available: true },
        { text: "Advanced bookkeeping", available: true },
        { text: "Unlimited bank account sync", available: true },
        { text: "Multi-currency support", available: true },
        { text: "Automated invoicing", available: true },
        { text: "Advanced reports & analytics", available: true },
        { text: "Cash flow forecasting", available: true },
        { text: "Tax compliance automation", available: true },
        { text: "Priority email & chat support", available: true },
        { text: "API access", available: false },
      ],
    },
    {
      name: "Enterprise",
      description:
        "Tailored solutions for large organizations with complex needs.",
      monthlyPrice: 199,
      annualPrice: 159,
      featured: false,
      cta: "Contact Sales",
      features: [
        { text: "Unlimited transactions", available: true },
        { text: "Unlimited user accounts", available: true },
        { text: "Enterprise bookkeeping", available: true },
        { text: "Unlimited bank account sync", available: true },
        { text: "Multi-currency & multi-entity", available: true },
        { text: "White-label invoicing", available: true },
        { text: "Custom reports & dashboards", available: true },
        { text: "Predictive analytics", available: true },
        { text: "Advanced compliance suite", available: true },
        { text: "24/7 dedicated support", available: true },
        { text: "Custom API integrations", available: true },
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
