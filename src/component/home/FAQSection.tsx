import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  Sparkles,
  Shield,
  Zap,
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

  const faqs: FAQCategory[] = [
    {
      category: "Getting Started",
      icon: Sparkles,
      color: "var(--color-gold-primary)",
      questions: [
        {
          question: "How quickly can I get started with 47 Accountants?",
          answer:
            "Getting started is simple. Contact us for an initial consultation, and our qualified accountants will manage your complete onboarding and hassle-free transition from your previous accountant within 2–3 working days.",
        },
        {
          question: "Do I need to manage my own accounting software?",
          answer:
            "No. As part of our service, we set up, configure, and maintain leading global cloud accounting platforms (such as Xero or QuickBooks) for you. If you already have software set up, we seamlessly take over its management.",
        },
        {
          question: "How is my historical financial data migrated?",
          answer:
            "Our team of qualified accountants handles the complete migration of your historical books, tax records, and payroll data, ensuring full HMRC compliance and continuous audit readiness.",
        },
      ],
    },
    {
      category: "Pricing & Fixed Fees",
      icon: Zap,
      color: "var(--color-gold-primary)",
      questions: [
        {
          question: "Are your monthly accounting fees fixed?",
          answer:
            "Yes! We provide transparent, agreed-upon fixed monthly pricing with no hidden charges, unexpected billing, or setup fees. You get comprehensive accounting, tax filing, and dedicated advice included.",
        },
        {
          question: "What is included in your monthly packages?",
          answer:
            "Our packages include dedicated accountant support, complete bookkeeping, VAT returns, Corporation Tax, Year-End statutory accounts, payroll processing, and proactive tax optimization advice.",
        },
        {
          question: "Can I upgrade or adjust my service package as my business grows?",
          answer:
            "Absolutly. Whether you are expanding from a sole trader to a limited company or require fractional CFO advisory, we adapt your service plan smoothly to match your evolving business requirements.",
        },
      ],
    },
    {
      category: "Compliance & Security",
      icon: Shield,
      color: "var(--color-gold-primary)",
      questions: [
        {
          question: "Are your accountants qualified and registered?",
          answer:
            "Yes, 47 Accountants is powered by ACCA-qualified accountants, fully registered and adhering strictly to global accounting standards and corporate regulations.",
        },
        {
          question: "Is 47 Accountants compliant with global tax and regulatory rules?",
          answer:
            "We handle 100% of your HMRC statutory filings, Making Tax Digital (MTD) compliance, VAT submissions, and CIS reporting, keeping your business fully compliant and penalty-free.",
        },
        {
          question: "How is my confidential financial information protected?",
          answer:
            "We enforce bank-grade 256-bit encryption and strict GDPR controls. Your personal and corporate financial data is accessible only by your dedicated accounting team and stored on secure enterprise servers.",
        },
      ],
    },
    {
      category: "Services & Advisory",
      icon: HelpCircle,
      color: "var(--color-gold-primary)",
      questions: [
        {
          question: "Which accounting platforms do your accountants work with?",
          answer:
            "Our accounting team works with all major global platforms including Xero, QuickBooks, Sage, FreeAgent, KashFlow, Dext, and AutoEntry. We optimize your workflow across whatever software you prefer.",
        },
        {
          question: "Will I have a dedicated accountant assigned to my business?",
          answer:
            "Yes. You will be assigned a named, dedicated accountant who understands your industry, answers your calls and emails promptly, and offers proactive advice throughout the year.",
        },
        {
          question: "Do you assist with HMRC tax audits and enquiries?",
          answer:
            "Yes. In the event of an HMRC enquiry or tax review, your dedicated accountant will represent your business, manage all communications, and present all necessary documentation directly to HMRC.",
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
            Have questions about switching to 47 Accountants or our accounting services?
            <span
              className="faq-contact-link"
              onClick={() => (window.location.href = "/contact")}
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
              onClick={() => (window.location.href = "/contact")}
            >
              Book Free Consultation
            </motion.button>
            <motion.button
              className="faq-secondary-button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/services")}
            >
              View Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
