import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
import "../../css/contact/contact-form.css";

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMsg, setResultMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMsg(null);

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
        setIsSuccess(true);
        setResultMsg("Thank you! Your message has been sent successfully. We will get back to you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setIsSuccess(false);
        setResultMsg(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setResultMsg("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description:
        "Send us your enquiry anytime and a qualified accountant will respond within 1 business day.",
      detail: "info@47accountants.com",
      accentBg: "var(--color-navy-soft)",
      accentColor: "var(--color-navy-light)",
    },
    {
      icon: Phone,
      title: "Call Us",
      description:
        "Speak directly with your accountant Monday to Friday, 9am–6pm GMT. No call centres.",
      detail: "+44 7462229006",
      accentBg: "var(--color-gold-soft)",
      accentColor: "var(--color-gold-primary)",
    },
    {
      icon: MessageCircle,
      title: "Book a Meeting",
      description:
        "Schedule a free 30-minute consultation with one of our ACCA-qualified accountants at your convenience.",
      detail: "Free & No Obligation",
      accentBg: "var(--color-red-soft)",
      accentColor: "var(--color-red)",
    },
  ];

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-info-card">
          <h2 className="contact-info-title">Get in Touch</h2>
          <p className="contact-info-desc">
            We are here to answer your questions and assist with your business tax and accounting needs.
          </p>

          <div className="contact-info-list">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div
                  className="contact-item-icon"
                  style={{
                    background: info.accentBg,
                    color: info.accentColor,
                    borderColor: info.accentColor,
                  }}
                >
                  <info.icon size={22} strokeWidth={2} />
                </div>
                <div className="contact-item-details">
                  <h4>{info.title}</h4>
                  <p>{info.description}</p>
                  <p style={{ fontWeight: 700, color: info.accentColor, marginTop: "4px" }}>
                    {info.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-card">
          <h2 className="contact-info-title" style={{ marginBottom: "20px" }}>
            Send Us a Message
          </h2>
          
          {resultMsg && (
            <div
              style={{
                padding: "14px 18px",
                borderRadius: "12px",
                marginBottom: "20px",
                fontSize: "0.95rem",
                fontWeight: 600,
                background: isSuccess ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)",
                border: `1px solid ${isSuccess ? "#22c55e" : "#ef4444"}`,
                color: isSuccess ? "#22c55e" : "#ef4444",
              }}
            >
              {resultMsg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">First &amp; Last Name</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <input
                  type="text"
                  name="firstName"
                  className="form-input"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  className="form-input"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <select
                name="subject"
                className="form-select"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="Bookkeeping Services">Bookkeeping Services</option>
                <option value="Tax & Compliance">Tax &amp; Compliance</option>
                <option value="VAT Services">VAT Services</option>
                <option value="Payroll & Pensions">Payroll &amp; Pensions</option>
                <option value="Business Advisory">Business Advisory</option>
                <option value="Other Enquiry">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-textarea"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help your business?"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="form-submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{isSubmitting ? "Sending..." : "Book Consultation"}</span>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
