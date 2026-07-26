import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import "../../css/collaboration/collaboration-cta.css";

const CollaborationCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    practiceName: "",
    contactName: "",
    email: "",
    phone: "",
    servicesNeeded: "White-Label Outsourcing",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const bodyFormData = new FormData(e.currentTarget);
    const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "90e33005-9188-488c-94c9-f77126a0b480";
    bodyFormData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: bodyFormData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || "Failed to submit proposal. Please try again.");
      }
    } catch (error) {
      setErrorMsg("An error occurred while submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="collab-cta-section" id="outsourcing-cta">
      <div className="collab-cta-container">
        <motion.div
          className="collab-cta-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="collab-cta-title">
            Ready to Scale Your Accounting Practice?
          </h2>
          <p className="collab-cta-desc">
            Fill out the form below or email <strong style={{ color: 'var(--color-gold-primary)' }}>info@47accountants.com</strong> to discuss white-label outsourcing, peak season subcontracting, or custom SLA pricing for your firm.
          </p>
        </motion.div>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <h3 style={{ fontSize: "1.8rem", color: "var(--color-gold-primary)", marginBottom: "12px" }}>
              Enquiry Received!
            </h3>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
              Thank you for contacting 47 Accountants. A senior partner will get back to you within 1 business day with a practice outsourcing proposal.
            </p>
          </div>
        ) : (
          <form className="collab-cta-form" onSubmit={handleSubmit}>
            {errorMsg && (
              <div
                style={{
                  gridColumn: "1 / -1",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  background: "rgba(239, 68, 68, 0.15)",
                  border: "1px solid #ef4444",
                  color: "#ef4444",
                }}
              >
                {errorMsg}
              </div>
            )}

            <div>
              <input
                type="text"
                name="practiceName"
                placeholder="Practice / Firm Name *"
                required
                className="collab-input"
                value={formData.practiceName}
                onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
              />
            </div>
            <div>
              <input
                type="text"
                name="contactName"
                placeholder="Contact Person Name *"
                required
                className="collab-input"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Work Email Address *"
                required
                className="collab-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                className="collab-input"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="collab-form-full">
              <select
                name="servicesNeeded"
                className="collab-input"
                value={formData.servicesNeeded}
                onChange={(e) => setFormData({ ...formData, servicesNeeded: e.target.value })}
              >
                <option value="White-Label Outsourcing">White-Label Bookkeeping &amp; Accounts</option>
                <option value="Peak Season Subcontracting">Peak Tax Season Subcontracting</option>
                <option value="Dedicated Pod">Dedicated Practice Pod</option>
                <option value="Custom Partnership">Custom Partnership / Advisory</option>
              </select>
            </div>
            <div className="collab-form-full">
              <textarea
                name="message"
                placeholder="Tell us about your practice workload, client volume, or requirements..."
                rows={4}
                className="collab-input"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <div className="collab-form-full">
              <button
                type="submit"
                className="collab-submit-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Submitting Proposal..." : "Request Practice Proposal"}</span>
                <Send size={18} />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default CollaborationCTA;
