import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import "../../css/pricing/pricing-faq.css";

const PricingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can I switch from my current accountant easily?",
      answer:
        "Yes, switching to 47 Accountants is completely hassle-free. We handle the entire transfer process on your behalf—contacting your previous accountant, collecting your records, and setting up your new account. Most clients are fully onboarded within 2–3 working days. There's no disruption to your business.",
    },
    {
      question: "What's included in the free consultation?",
      answer:
        "Your free consultation is a 30-minute call with a qualified accountant where we'll discuss your business needs, review your current financial situation, identify any immediate tax-saving opportunities, and recommend the most suitable package for you. There's absolutely no obligation to proceed.",
    },
    {
      question: "Are your fees fixed or variable?",
      answer:
        "All our packages are priced at a fixed monthly fee so you always know exactly what you'll pay—no surprises, no hourly rates, and no unexpected bills. Any additional one-off services (such as a business valuation or specialist R&D claim) would be quoted separately and agreed in advance.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards (Visa, MasterCard, American Express) as well as direct debit. Annual plans paid upfront receive a 20% discount. All payments are processed securely and invoices are issued monthly.",
    },
    {
      question: "Do I need to provide my own accounting software?",
      answer:
        "No. Your monthly fee includes full access to our recommended cloud accounting platform (such as Xero or QuickBooks), which we'll set up and maintain for you. If you already use a platform, we can work with that too—we support all major global accounting software.",
    },
    {
      question: "Will I have a dedicated accountant?",
      answer:
        "Yes. Every client is assigned a dedicated, qualified accountant who handles all aspects of your account and becomes familiar with your business. You'll have their direct contact details and can reach them by email or phone whenever you need. You'll never be passed around a call centre.",
    },
    {
      question: "What if I miss a tax deadline?",
      answer:
        "We take full responsibility for meeting all statutory deadlines on your behalf, including Corporation Tax, Self-Assessment, VAT returns, and Companies House filings. We have robust internal systems to ensure nothing is ever missed. In the unlikely event of an error on our part, we cover any resulting HMRC penalties.",
    },
    {
      question: "Do you offer discounts for early-stage startups?",
      answer:
        "Yes! We offer a 25% introductory discount for the first 3 months for newly incorporated companies (less than 12 months old). We also offer special pricing for social enterprises and non-profits. Contact us to discuss your situation and we'll find a suitable arrangement.",
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
          <div className="pricing-faq-badge">
            <span className="pricing-faq-badge-text">Pricing FAQs</span>
          </div>

          <h2 className="pricing-faq-headline">
            Common Questions About
            <span className="pricing-faq-gradient-text"> Our Pricing</span>
          </h2>

          <p className="pricing-faq-subheadline">
            Have a question that's not answered here? Contact our support team
            and we'll help you out.
          </p>
        </motion.div>

        <div className="pricing-faq-accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="pricing-faq-item">
              <button
                className="pricing-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="pricing-faq-icon">
                  {openIndex === index ? (
                    <Minus size={20} strokeWidth={2.5} />
                  ) : (
                    <Plus size={20} strokeWidth={2.5} />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pricing-faq-answer"
                  >
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
