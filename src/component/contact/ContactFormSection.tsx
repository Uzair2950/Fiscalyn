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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      description:
        "Send us an email anytime and we'll respond within 24 hours.",
      detail: "hello@fiscalyn.com",
      color: "#635bff",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description:
        "Speak directly with our support team Monday to Friday, 9am-6pm GMT.",
      detail: "+44 20 1234 5678",
      color: "#00d4ff",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description:
        "Get instant answers to your questions via our live chat support.",
      detail: "Available 24/7",
      color: "#00e676",
    },
  ];

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-form-grid">
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-form-title">Send Us a Message</h2>
            <p className="contact-form-subtitle">
              Fill out the form below and our team will get back to you as soon
              as possible.
            </p>

            <div className="contact-form">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="firstName">
                    First Name <span className="contact-form-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="contact-form-input"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="lastName">
                    Last Name <span className="contact-form-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="contact-form-input"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="email">
                    Email Address{" "}
                    <span className="contact-form-required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact-form-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="contact-form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 20 1234 5678"
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="company">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="contact-form-input"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="subject">
                  Subject <span className="contact-form-required">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="contact-form-select"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="message">
                  Message <span className="contact-form-required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <motion.button
                className="contact-form-submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="contact-info-cards"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-info-card-header">
                  <div
                    className="contact-info-card-icon"
                    style={{
                      background: `${info.color}15`,
                      border: `2px solid ${info.color}`,
                    }}
                  >
                    <info.icon size={28} color={info.color} strokeWidth={2} />
                  </div>
                  <h3 className="contact-info-card-title">{info.title}</h3>
                </div>
                <p className="contact-info-card-description">
                  {info.description}
                </p>
                <div
                  className="contact-info-card-detail"
                  style={{ color: info.color }}
                >
                  <info.icon size={18} />
                  <span>{info.detail}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
