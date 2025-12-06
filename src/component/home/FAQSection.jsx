import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles, Shield, Zap } from "lucide-react";
import "../../css/home/faq.css";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      category: "Getting Started",
      icon: Sparkles,
      color: "#635bff",
      questions: [
        {
          question: "How quickly can I get started with Fiscalyn?",
          answer:
            "You can be up and running in under 5 minutes! Simply sign up for a free trial, connect your bank accounts and accounting software through our one-click integrations, and you're ready to go. Our onboarding wizard guides you through each step, and our support team is available 24/7 if you need assistance.",
        },
        {
          question: "Do I need to install any software?",
          answer:
            "No installation required! Fiscalyn is a cloud-based platform accessible from any device with an internet connection. Simply log in through your web browser or use our mobile apps for iOS and Android. All your data syncs automatically across all devices in real-time.",
        },
        {
          question: "Can I import my existing financial data?",
          answer:
            "Absolutely! Fiscalyn supports bulk imports from Excel, CSV, and all major accounting software including Xero, QuickBooks, Sage, and more. Our smart import tool automatically maps your data fields and validates everything before importing. Historical data from the past 7 years can be migrated seamlessly.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      icon: Zap,
      color: "#00d4ff",
      questions: [
        {
          question: "What's included in the free trial?",
          answer:
            "Your 14-day free trial includes full access to all Premium features with no credit card required. You'll get unlimited users, all integrations, real-time analytics, automated compliance, and priority support. No features are locked, and you can upgrade, downgrade, or cancel anytime during or after the trial.",
        },
        {
          question: "Are there any hidden fees or charges?",
          answer:
            "Never! We believe in transparent pricing with no surprises. The price you see is the price you pay—no setup fees, no hidden charges, no per-transaction costs. All features, integrations, and updates are included in your subscription. We only charge extra for additional storage beyond 100GB.",
        },
        {
          question: "Can I change my plan at any time?",
          answer:
            "Yes, you have complete flexibility! Upgrade or downgrade your plan anytime from your account settings. Changes take effect immediately, and we'll prorate any charges or credits automatically. If you downgrade, you'll retain access to premium features until the end of your current billing cycle.",
        },
      ],
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      color: "#00e676",
      questions: [
        {
          question: "How secure is my financial data?",
          answer:
            "Your data security is our top priority. We use bank-grade 256-bit SSL encryption for all data transmission and AES-256 encryption for data at rest. Our infrastructure is SOC 2 Type II certified, ISO 27001 compliant, and hosted on enterprise-grade servers with 99.9% uptime SLA. We perform regular third-party security audits and penetration testing.",
        },
        {
          question: "Is Fiscalyn compliant with UK regulations?",
          answer:
            "Yes, we're fully compliant with all UK financial regulations including Making Tax Digital (MTD), GDPR, FCA guidelines, and Companies House requirements. We automatically handle HMRC submissions, VAT returns, CIS reporting, and all statutory filings. Our compliance engine is updated inreal-time whenever regulations change.",
        },
        {
          question: "Who has access to my data?",
          answer:
            "Only you and the team members you explicitly authorize have access to your data. Our staff cannot view your financial information unless you grant permission for support purposes. We never sell, share, or use your data for any purpose other than providing our service. You maintain complete ownership and can export or delete your data anytime.",
        },
      ],
    },
    {
      category: "Features & Integrations",
      icon: HelpCircle,
      color: "#ff6b6b",
      questions: [
        {
          question: "What accounting software does Fiscalyn integrate with?",
          answer:
            "We integrate with 100+ platforms including Xero, QuickBooks, Sage, FreeAgent, KashFlow, and all major UK accounting software. We also connect with payment processors (Stripe, PayPal, Square), banks (Open Banking API), e-commerce platforms (Shopify, WooCommerce), and CRM systems (Salesforce, HubSpot). New integrations are added monthly based on customer requests.",
        },
        {
          question: "Can I customize reports and dashboards?",
          answer:
            "Absolutely! Our platform offers fully customizable dashboards with drag-and-drop widgets, custom report builders, and white-label options. Create unlimited custom reports, save your preferred views, schedule automated report delivery, and export to Excel, PDF, or CSV. You can also set up custom KPI tracking and automated alerts.",
        },
        {
          question: "Do you offer customer support?",
          answer:
            "We provide 24/7 customer support via live chat, email, and phone for all plans. Premium customers get priority support with <2 hour response time and a dedicated account manager. We also offer free onboarding sessions, comprehensive documentation, video tutorials, webinar training, and an active community forum.",
        },
      ],
    },
  ];
  const toggleQuestion = (categoryIndex, questionIndex) => {
    const globalIndex = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === globalIndex ? null : globalIndex);
  };
  return (
    <section className="faq-section">
      <div className="faq-background">
        <div className="faq-grid-pattern" />
        <motion.div
          className="faq-gradient-orb faq-orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="faq-gradient-orb faq-orb-2"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      <div className="faq-container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="faq-badge">
            <HelpCircle size={16} color="#635bff" />
            <span className="faq-badge-text">Frequently Asked Questions</span>
          </motion.div>

          <h2 className="faq-headline">
            Everything You Need to Know
            <span className="faq-gradient-text"> About Fiscalyn</span>
          </h2>

          <p className="faq-subheadline">
            Got questions? We've got answers. Can't find what you're looking
            for?
            <span className="faq-contact-link">
              {" "}
              Contact our support team
            </span>{" "}
            anytime.
          </p>
        </motion.div>

        <div className="faq-grid">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="faq-category-section"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="faq-category-header">
                <div
                  className="faq-category-icon"
                  style={{
                    background: `${category.color}15`,
                    border: `1px solid ${category.color}30`,
                  }}
                >
                  <category.icon
                    size={20}
                    color={category.color}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="faq-category-title">{category.category}</h3>
              </div>

              <div className="faq-questions-container">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <motion.div
                      key={questionIndex}
                      className="faq-item"
                      whileHover={{
                        backgroundColor: "rgba(99, 91, 255, 0.02)",
                      }}
                    >
                      <button
                        className="faq-question-button"
                        onClick={() =>
                          toggleQuestion(categoryIndex, questionIndex)
                        }
                        aria-expanded={isOpen}
                      >
                        <span className="faq-question-text">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="faq-icon-wrapper"
                        >
                          {isOpen ? (
                            <Minus
                              size={20}
                              color={category.color}
                              strokeWidth={2.5}
                            />
                          ) : (
                            <Plus size={20} color="#525f7f" strokeWidth={2.5} />
                          )}
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
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
                            className="faq-answer-wrapper"
                          >
                            <motion.div
                              className="faq-answer-content"
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              <div
                                className="faq-answer-border"
                                style={{ background: category.color }}
                              />
                              <p className="faq-answer-text">{faq.answer}</p>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="faq-cta-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="faq-cta-content">
            <h3 className="faq-cta-headline">Still have questions?</h3>
            <p className="faq-cta-text">
              Our support team is here to help. Get in touch and we'll respond
              within 2 hours.
            </p>
          </div>
          <div className="faq-cta-buttons">
            <motion.button
              className="faq-primary-button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Support
            </motion.button>
            <motion.button
              className="faq-secondary-button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection