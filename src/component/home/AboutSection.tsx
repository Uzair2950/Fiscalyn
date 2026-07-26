import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Sparkles,
  Lock,
  Users,
  Target,
  Globe,
  Zap,
  LucideIcon,
} from "lucide-react";
import "../../css/home/about.css";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Feature {
  icon: LucideIcon;
  label: string;
}

const AboutSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const values: Value[] = [
    {
      icon: Sparkles,
      title: "Proactive Advice",
      description:
        "We don't just file returns—we anticipate issues and identify tax-saving opportunities.",
    },
    {
      icon: Lock,
      title: "Fully Compliant",
      description:
        "International standards compliant, certified accountants up to date with global tax legislation.",
    },
    {
      icon: Users,
      title: "Client Focused",
      description:
        "Dedicated accountants who truly understand your business operations and goals.",
    },
  ];

  const features: Feature[] = [
    { icon: Target, label: "100% on-time filing guarantee" },
    { icon: Globe, label: "Global coverage & cross-border advice" },
    { icon: Zap, label: "Transparent fixed monthly fees" },
  ];

  return (
    <section className="about-container">
      <div className="about-background">
        <div className="about-grid-pattern" />
        <motion.div
          className="about-gradient-orb about-orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="about-gradient-orb about-orb-2"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="about-content-wrapper">
        <motion.div
          className="about-text-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="about-badge">
            <span className="about-badge-dot" />
            <span>About 47 Accountants</span>
          </motion.div>

          <motion.h2 variants={itemVariants}>
            Your Global
            <span className="about-gradient-text"> Accounting Partner</span>
          </motion.h2>

          <motion.p variants={itemVariants}>
            At <strong>47 Accountants</strong>, we believe great accountancy goes
            beyond basic compliance. We're a team of qualified, experienced international
            accountants who work as a seamless extension of your business worldwide—keeping your
            books accurate, your taxes optimised, and your cash flow healthy.
          </motion.p>

          <motion.p variants={itemVariants}>
            From sole traders to growing limited companies, we provide expert
            bookkeeping, Corporation Tax, VAT, payroll, and strategic advisory
            services under one roof. With 47 Accountants, you always know exactly
            where your business stands financially—and what steps to take next.
          </motion.p>

          <motion.div
            className="about-values-grid"
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="home-value-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className="home-value-icon"
                  style={{ background: "var(--color-gold-soft)", color: "var(--color-gold-primary)" }}
                >
                  <value.icon size={24} strokeWidth={2} />
                </div>
                <div className="home-value-content">
                  <h3 style={{ color: "var(--color-gold-primary)" }}>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="about-visual-section"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="visual-card-stack" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&h=800&fit=crop"
              alt="Senior accounting partner reviewing client financial reports"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-gold)' }}
            />
          </div>

          <div className="about-features-list">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-badge"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, type: "spring" }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div
                  className="feature-badge-icon"
                  style={{ background: "var(--gradient-gold)", color: "var(--text-on-gold)" }}
                >
                  <feature.icon size={14} strokeWidth={2.5} />
                </div>
                <span>{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
