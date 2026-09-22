import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import DeferredCaptcha from "../common/DeferredCaptcha";
import type { HCaptchaInstance } from "../common/Web3FormsCaptcha";
import { submitWeb3Form } from "../../lib/web3forms";
import { trackConversion } from "../../lib/analytics";
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
  const [showCaptcha, setShowCaptcha] = useState(false);
  const captchaRef = useRef<HCaptchaInstance>(null);

  const submitEnquiry = async (captchaToken: string) => {
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      await submitWeb3Form({
        practice_name: formData.practiceName,
        contact_name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        services_needed: formData.servicesNeeded,
        message: formData.message,
        subject: "Practice outsourcing proposal request",
        from_name: "47 Accountants Website",
        request_type: "Collaboration enquiry",
        botcheck: "",
        "h-captcha-response": captchaToken,
      });

      setSubmitted(true);
      setShowCaptcha(false);
      trackConversion("outsourcing_enquiry");
    } catch {
      setErrorMsg("An error occurred while submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
      captchaRef.current?.resetCaptcha();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    setShowCaptcha(true);
  };

  const handleCaptchaToken = (token: string) => {
    if (token && !isSubmitting) void submitEnquiry(token);
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
            Fill out the form below or email <strong style={{ color: 'var(--color-gold-primary)' }}>info@47accountants.com</strong> to discuss white-label outsourcing, peak season subcontracting, or custom SLA requirements for your firm.
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
                role="alert"
                aria-live="polite"
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
                autoComplete="organization"
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
                autoComplete="name"
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
                autoComplete="email"
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
                autoComplete="tel"
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
              <DeferredCaptcha
                visible={showCaptcha}
                captchaRef={captchaRef}
                onTokenChange={handleCaptchaToken}
              />
            </div>
            <p className="collab-form-full form-privacy-note">
              By submitting, you agree that we may process your details to
              respond to this enquiry. See our <Link to="/privacy">Privacy Policy</Link>.
            </p>
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
