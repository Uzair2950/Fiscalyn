import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Shield, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import '../../css/home/services-overview.css';

const ServicesOverview = () => {
  const services = [
    {
      icon: BookOpen,
      number: "01",
      title: "Cloud Bookkeeping",
      subtitle: "Real-Time Financial Clarity",
      description: "Automated bookkeeping with instant insights. Every transaction processed, categorized, and reconciled in real-time for smarter business decisions.",
      features: ["Daily reconciliation", "Multi-currency support", "Custom reports"],
      color: "#635bff"
    },
    {
      icon: Shield,
      number: "02",
      title: "Compliance & Tax",
      subtitle: "Zero-Stress Regulation",
      description: "Stay ahead of regulations with automated compliance. We handle MTD, VAT, CIS, and all UK tax requirements so you never miss a deadline.",
      features: ["Automated filing", "HMRC integration", "Penalty protection"],
      color: "#00d4ff"
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Growth Analytics",
      subtitle: "Data-Driven Decisions",
      description: "Transform financial data into actionable insights. Advanced analytics, forecasting, and strategic guidance to fuel your business growth.",
      features: ["Predictive analytics", "Cash flow forecasting", "Performance benchmarks"],
      color: "#00e676"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        ease: [0.16, 1, 0.3, 1]
      } 
    },
  };

  return (
    <section className="services-overview-section">
      <div className="services-wrapper">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Complete Financial Solutions
            <span className="services-gradient-text"> Built for Modern Business</span>
          </h2>
          <p className="services-intro">
            From day-to-day operations to strategic planning, Fiscalyn delivers 
            end-to-end financial services that scale with your success.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="service-card-header">
                <div 
                  className="service-icon-wrapper"
                  style={{ background: `${service.color}15` }}
                >
                  <service.icon 
                    size={28} 
                    color={service.color}
                    strokeWidth={2}
                  />
                </div>
                <span 
                  className="service-number"
                  style={{ color: service.color }}
                >
                  {service.number}
                </span>
              </div>

              <div className="service-card-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} color={service.color} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div 
                className="service-card-footer"
                whileHover={{ x: 5 }}
              >
                <span style={{ color: service.color }}>Learn More</span>
                <ArrowRight size={18} color={service.color} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="services-cta-content">
            <h3>Ready to transform your financial operations?</h3>
            <p>Join thousands of businesses already using Fiscalyn to streamline their finances.</p>
          </div>
          <motion.button 
            className="services-cta-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Services</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;