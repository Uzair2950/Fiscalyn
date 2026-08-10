import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  Sparkles,
  Shield,
  Zap,
  Globe,
  Lock,
  BarChart3,
  BookOpen,
  LucideIcon,
} from "lucide-react";
import "../../css/home/faq.css";

interface FAQQuestion {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  icon: LucideIcon;
  color: string;
  questions: FAQQuestion[];
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  const faqs: FAQCategory[] = [
    {
      category: "Services & Global Scope",
      icon: Sparkles,
      color: "var(--color-gold-primary)",
      questions: [
        {
          question: "What services does 47 Accountants provide?",
          answer:
            "47 Accountants delivers complete financial management for growing and global entities. Our core services encompass Managed Bookkeeping, Tax & Compliance (Corporation Tax & Self-Assessment), Business Advisory & Fractional CFO support, Payroll & Pension administration, VAT & Making Tax Digital (MTD) filings, and Companies House Secretarial governance.",
        },
        {
          question: "Do you support international businesses operating in multiple countries?",
          answer:
            "Yes. We specialize in cross-border accounting, foreign subsidiary setups, international tax planning, multi-currency ledger management, and global regulatory compliance for UK entities and overseas companies expanding internationally.",
        },
        {
          question: "Do you offer Fractional CFO or Strategic Advisory services?",
          answer:
            "Yes. Our Business Advisory service provides fractional CFO leadership, 3-statement financial modeling, multi-year cash flow forecasting, gross margin optimization, dividend/salary structuring, and fundraising/investor deck readiness.",
        },
        {
          question: "Do you support crypto, e-commerce, or tech startups with complex transactions?",
          answer:
            "Absolutly. We have deep expertise reconciling high-volume digital transactions across Shopify, Amazon, Stripe, PayPal, SaaS recurring billing platforms, digital assets/crypto transactions, and claiming specialized R&D tax credits for innovative tech firms.",
        },
      ],
    },
    {
      category: "Bookkeeping, Tax & Governance",
      icon: BookOpen,
      color: "var(--color-gold-primary)",
      questions: [
        {
          question: "What is included in your Managed Bookkeeping service?",
          answer:
            "Managed Bookkeeping includes a dedicated senior bookkeeper, daily or weekly transaction categorization, multi-currency bank & credit card reconciliations, digitised receipt management, accounts payable/receivable tracking, and trial-balance ready monthly financial reports.",
        },
        {
          question: "How do your VAT Services handle Making Tax Digital (MTD) and global sales taxes?",
          answer:
            "We manage 100% MTD-compliant digital submissions directly with HMRC. We evaluate and optimize VAT scheme selection (Standard, Flat Rate, Cash Accounting) and manage complex cross-border VAT, One Stop Shop (OSS/IOSS), import VAT postponed accounting, and reverse charges.",
        },
        {
          question: "What falls under Company Secretarial services?",
          answer:
            "Our secretarial services manage your Companies House statutory obligations: annual confirmation statement filings, company incorporations, share allotments/transfers, director and PSC register maintenance, registered office privacy address services, and board meeting resolution drafting.",
        },
        {
          question: "Can 47 Accountants help with Audit Preparation and Statutory Financial Statements?",
          answer:
            "Yes. We prepare fully compliant statutory financial statements under FRS 102 / FRS 105 standards, assemble audit workpapers, liaise directly with external auditors, and resolve audit queries efficiently.",
        },
      ],
    },
    {
      category: "International Tax & Setup",
      icon: Globe,
      color: "var(--color-gold-primary)",
      questions: [
        {
          question: "Can you manage cross-border payroll and pension administration?",
          answer:
            "Yes. We operate complete weekly and monthly PAYE payroll runs, issue secure digital employee payslips, submit Real Time Information (RTI) to HMRC, handle statutory leave calculations, and ensure workplace pension auto-enrolment compliance with providers like NEST, Smart Pension, and Aviva.",
        },
        {
          question: "How do you assist with Transfer Pricing and International Tax Planning?",
          answer:
            "We advise multi-entity and global corporate groups on compliant transfer pricing methodologies, intercompany service agreements, double taxation treaty relief, permanent establishment risk mitigation, and optimal global tax structuring.",
        },
        {
          question: "Which software platforms do you work with?",
          answer:
            "We work fluently across all major cloud platforms including Xero, QuickBooks, Sage, FreeAgent, Dext, AutoEntry, and custom ERP systems. We handle full setup, configuration, and data synchronization for your business.",
        },
        {
          question: "How do we transfer our existing financial records to 47 Accountants?",
          answer:
            "Switching is seamless. Our qualified accountants manage your complete onboarding and hassle-free data transition from your current accountant or software within 2–3 business days with zero disruption to your daily operations.",
        },
      ],
    },
    {
      category: "Engagement, Pricing & Security",
      icon: Shield,
      color: "var(--color-gold-primary)",
      questions: [
        {
          question: "How does 47 Accountants charge for services?",
          answer:
            "We operate on transparent, agreed-upon fixed monthly pricing with no hidden charges, unexpected billings, or setup fees. All routine support, filings, and advice are included in your custom monthly agreement.",
        },
        {
          question: "How do you ensure our financial data remains secure?",
          answer:
            "Your data security is paramount. We enforce bank-grade 256-bit encryption, strict multi-factor authentication, and full GDPR compliance. Your financial information is accessible strictly by your assigned accounting team on secure servers.",
        },
        {
          question: "How often will I receive financial reports?",
          answer:
            "You receive reconciled financial performance statements—including Profit & Loss, Balance Sheet, and custom KPI metrics—on a monthly basis. Quarterly executive board reviews are also conducted for advisory clients.",
        },
      ],
    },
  ];

  const toggleQuestion = (
    categoryIndex: number,
    questionIndex: number,
  ): void => {
    const globalIndex = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === globalIndex ? null : globalIndex);
  };

  const answerVariants: Variants = {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <section className="faq-section">
      <div className="faq-background">
        <div className="faq-grid-pattern" />
        <motion.div
          className="faq-gradient-orb faq-orb-1"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="faq-gradient-orb faq-orb-2"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
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
            <HelpCircle size={16} color="var(--color-gold-primary)" />
            <span className="faq-badge-text">Frequently Asked Questions</span>
          </motion.div>
          <h2 className="faq-headline">
            Everything You Need to Know
            <span className="faq-gradient-text"> About 47 Accountants</span>
          </h2>
          <p className="faq-subheadline">
            Have questions about our accounting services or switching to 47 Accountants?
            <span
              className="faq-contact-link"
              onClick={() => navigate("/contact")}
            >
              {" "}
              Speak with an accountant
            </span>{" "}
            today.
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
                <div className="faq-category-icon">
                  <category.icon size={20} strokeWidth={2} />
                </div>
                <h3 className="faq-category-title">{category.category}</h3>
              </div>

              <div className="faq-questions-container">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;
                  return (
                    <motion.div key={questionIndex} className="faq-item">
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
                            <Minus size={20} strokeWidth={2.5} />
                          ) : (
                            <Plus size={20} strokeWidth={2.5} />
                          )}
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={answerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="faq-answer-wrapper"
                          >
                            <motion.div
                              className="faq-answer-content"
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              <div className="faq-answer-border" />
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
            <h3 className="faq-cta-headline">Ready to discuss your accounting needs?</h3>
            <p className="faq-cta-text">
              Our team of dedicated accountants is here to help optimize your business finance and tax structure.
            </p>
          </div>
          <div className="faq-cta-buttons">
            <motion.button
              className="faq-primary-button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/contact")}
            >
              Book Free Consultation
            </motion.button>
            <motion.button
              className="faq-secondary-button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/services/bookkeeping")}
            >
              Explore Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
