import React from 'react';
import { motion } from 'framer-motion';
import { BookA, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import '../../css/home/services-overview.css';

const pipelineSteps = [
  {
    icon: BookA,
    title: "1. Seamless Cloud Bookkeeping",
    subtitle: "Real-Time Clarity",
    description: "Your records are managed daily on integrated cloud software (Xero, QBO). We process every transaction, giving you an accurate, real-time picture of your finances for smarter decisions.",
    color: "#635BFF", // Primary Purple
    gradient: { start: "#7e57ff", end: "#5a33ff" } // Dynamic gradient colors
  },
  {
    icon: TrendingUp,
    title: "2. Proactive VAT & Compliance",
    subtitle: "Guaranteed Compliance",
    description: "We handle all UK regulatory submissions, including MTD for VAT and CIS. We ensure every deadline is met, every document is filed correctly, and you avoid penalties.",
    color: "#4CAF50", // Success Green
    gradient: { start: "#81c784", end: "#4CAF50" }
  },
  {
    icon: DollarSign,
    title: "3. Maximum Tax Efficiency",
    subtitle: "Tax Minimization",
    description: "We analyze your year-end data to identify all legal deductions and allowances. Our goal is simple: maximize your take-home profit and secure your future growth.",
    color: "#FF5F56", // Danger Red
    gradient: { start: "#e57373", end: "#FF5F56" }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 10 
    } 
  },
};

const ServicesOverview = () => {
  return (
    <section className="services-pipeline-section">
      <div className="pipeline-wrapper">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Your Three-Step Path to UK Accounting Success
        </motion.h2>

        <motion.p 
          className="pipeline-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We guide UK businesses through the complex compliance journey with an efficient, transparent, and digitally optimized process.
        </motion.p>
        
        <motion.div
          className="pipeline-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Timeline Connector Line (Animated via CSS/Framer) */}
          <motion.div 
            className="timeline-line"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {pipelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isRightSide = index % 2 !== 0;
            
            return (
              <motion.div
                key={index}
                className={`pipeline-item ${isRightSide ? 'right-side' : 'left-side'}`}
                custom={index}
                variants={itemVariants}
                animate={isRightSide ? { opacity: 1, x: 0, scale: 1 } : { opacity: 1, x: 0, scale: 1 }}
                initial={isRightSide ? { opacity: 0, x: 100, scale: 0.9 } : { opacity: 0, x: -100, scale: 0.9 }}
              >
                <div className="pipeline-dot" style={{ backgroundColor: step.color }}>
                  <Icon size={24} color="#fff" />
                </div>
                
                <div 
                    className="pipeline-card"
                    // --- EPIC ADDITION: Dynamic CSS Variables for Gradients ---
                    style={{
                        '--card-gradient-start': step.gradient.start,
                        '--card-gradient-end': step.gradient.end,
                    }}
                >
                  <span className="step-subtitle" >{step.subtitle}</span> {/* Ensure subtitle is white too */}
                  <h3 >{step.title}</h3> {/* Ensure title is white */}
                  <p>{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.a 
            href="/process" 
            className="pipeline-cta-link"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 1.8 }}
        >
            Explore Our Full Digital Workflow <ArrowRight size={18} />
        </motion.a>

      </div>
    </section>
  );
};

export default ServicesOverview;