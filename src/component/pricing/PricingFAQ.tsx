import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import "../../css/pricing/pricing-faq.css";

const PricingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we'll prorate any charges or credits automatically. If you downgrade, you'll retain access to premium features until the end of your current billing cycle.",
    },
    {
      question: "What happens after my free trial ends?",
      answer:
        "After your 14-day free trial, you'll be automatically enrolled in your chosen plan. You can cancel anytime before the trial ends without being charged. We'll send you reminder emails 3 days before your trial expires so you have plenty of time to decide.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee on all annual plans. If you're not satisfied for any reason within the first 30 days, contact our support team and we'll issue a full refund. Monthly plans are not eligible for refunds but can be canceled at any time.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and PayPal. For Enterprise plans, we also offer bank transfer and invoice payment options. All payments are processed securely through Stripe.",
    },
    {
      question: "Is there a setup fee or hidden costs?",
      answer:
        "No, there are absolutely no setup fees or hidden costs. The price you see is the price you pay. All features, integrations, and updates are included in your subscription. We only charge extra for additional storage beyond 100GB per user.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no penalties or cancellation fees. Simply go to your account settings and click 'Cancel Subscription'. You'll continue to have access until the end of your current billing period.",
    },
    {
      question: "What if I exceed my transaction limit?",
      answer:
        "If you approach your transaction limit, we'll send you a notification with options to upgrade or purchase additional transaction packs. You won't lose any data, and your account won't be suspended. We'll work with you to find the best solution for your needs.",
    },
    {
      question: "Do you offer discounts for nonprofits or startups?",
      answer:
        "Yes! We offer a 25% discount for registered nonprofits and qualifying startups (less than 2 years old, under $1M revenue). Contact our sales team with your organization details to apply for the discount. Educational institutions also qualify for special pricing.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pricing-faq-section">
      <div className="pricing-faq-container">
        <motion.div
          className="pricing-faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="pricing-faq-badge">
            <span className="pricing-faq-badge-dot" />
            <span className="pricing-faq-badge-text">Pricing FAQs</span>
          </motion.div>

          <h2 className="pricing-faq-headline">
            Common Questions About
            <span className="pricing-faq-gradient-text"> Our Pricing</span>
          </h2>

          <p className="pricing-faq-subheadline">
            Have a question that's not answered here? Contact our support team
            and we'll help you out.
          </p>
        </motion.div>

        <div className="pricing-faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="pricing-faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                className="pricing-faq-question-button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="pricing-faq-question-text">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pricing-faq-icon-wrapper"
                >
                  {openIndex === index ? (
                    <Minus size={20} color="#635bff" strokeWidth={2.5} />
                  ) : (
                    <Plus size={20} color="#525f7f" strokeWidth={2.5} />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        },
                        opacity: { duration: 0.3, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        },
                        opacity: { duration: 0.2 },
                      },
                    }}
                    className="pricing-faq-answer-wrapper"
                  >
                    <motion.div
                      className="pricing-faq-answer-content"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <p className="pricing-faq-answer-text">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
