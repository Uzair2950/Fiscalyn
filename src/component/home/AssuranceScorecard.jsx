import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import '../../css/home/assurance-scorecard.css';

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endValue = typeof end === 'number' ? end : parseFloat(end);
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);
        
        if (typeof end === 'string' && end.includes('.')) {
          const value = progress * endValue;
          setCount(value.toFixed(1));
        } else {
          const value = Math.floor(progress * endValue);
          setCount(value);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(typeof end === 'string' && end.includes('.') ? endValue.toFixed(1) : endValue);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return { count, ref };
};

const AssuranceScorecard = () => {
  const stats = [
    {
      icon: Award,
      title: "Years of Excellence",
      value: useCountUp(12),
      suffix: "+",
      description: "Over a decade of specialized expertise in UK financial services and business compliance.",
      color: "#635bff"
    },
    {
      icon: Users,
      title: "Businesses Served",
      value: useCountUp(10000),
      suffix: "+",
      description: "Trusted by thousands of UK businesses from startups to established enterprises.",
      color: "#00d4ff"
    },
    {
      icon: TrendingUp,
      title: "Success Rate",
      value: useCountUp('99.8'),
      suffix: "%",
      description: "Near-perfect track record for timely submissions and client satisfaction.",
      color: "#00e676"
    },
    {
      icon: Shield,
      title: "Client Retention",
      value: useCountUp(97),
      suffix: "%",
      description: "Industry-leading retention rate proving our commitment to long-term partnerships.",
      color: "#ff6b6b"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      } 
    },
  };

  return (
    <section className="assurance-scorecard-section">
      <div className="scorecard-wrapper">
        <motion.div
          className="scorecard-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            Why Leading Businesses
            <span className="scorecard-gradient-text"> Choose Fiscalyn</span>
          </h2>
          <p className="scorecard-intro">
            Our track record speaks for itself. These aren't just numbers—they're 
            a testament to our unwavering commitment to client success.
          </p>
        </motion.div>

        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div 
                className="stat-icon-wrapper"
                style={{ background: `${stat.color}15` }}
              >
                <stat.icon 
                  size={32} 
                  color={stat.color}
                  strokeWidth={2}
                />
              </div>

              <div className="stat-content">
                <div className="stat-value-wrapper" ref={stat.value.ref}>
                  <span 
                    className="stat-value"
                    style={{ color: stat.color }}
                  >
                    {typeof stat.value.count === 'number' 
                      ? stat.value.count.toLocaleString()
                      : stat.value.count}
                  </span>
                  <span 
                    className="stat-suffix"
                    style={{ color: stat.color }}
                  >
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="stat-title">{stat.title}</h3>
                <p className="stat-description">{stat.description}</p>
              </div>

              <div 
                className="stat-card-glow"
                style={{ background: `radial-gradient(circle at center, ${stat.color}20, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="scorecard-trust-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="trust-badge-wrapper">
            <div className="trust-badge">
              <div className="trust-badge-icon">🏆</div>
              <div className="trust-badge-content">
                <span className="trust-badge-title">Award Winning</span>
                <span className="trust-badge-subtitle">Best Financial Platform 2024</span>
              </div>
            </div>

            <div className="trust-badge">
              <div className="trust-badge-icon">🔒</div>
              <div className="trust-badge-content">
                <span className="trust-badge-title">Bank-Grade Security</span>
                <span className="trust-badge-subtitle">SOC 2 Type II Certified</span>
              </div>
            </div>

            <div className="trust-badge">
              <div className="trust-badge-icon">⚡</div>
              <div className="trust-badge-content">
                <span className="trust-badge-title">99.9% Uptime</span>
                <span className="trust-badge-subtitle">Enterprise-Level Reliability</span>
              </div>
            </div>

            <div className="trust-badge">
              <div className="trust-badge-icon">🌟</div>
              <div className="trust-badge-content">
                <span className="trust-badge-title">4.9/5 Rating</span>
                <span className="trust-badge-subtitle">From 5,000+ Reviews</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AssuranceScorecard;