import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle, Shield, TrendingUp } from 'lucide-react';
import '../../css/home/assurance-scorecard.css';

// Custom Hook for Animated Counter (UNMODIFIED)
const useCountUp = (end, duration = 2000) => {
// ... (The hook code remains the same)
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endValue = end;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);
        // Interpolate only for number metrics
        const value = typeof endValue === 'number' ? Math.floor(progress * (endValue - start)) + start : endValue;
        
        // Handle the static 99.8 metric display correctly during animation phase
        if (endValue === 99.8 && progress < 1) {
             // For the initial animated part, we use a simple floor, then show the real number
             const animatedValue = Math.floor(progress * 99);
             setCount(animatedValue);
        } else {
             setCount(value);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else if (endValue === 99.8) {
            // Once finished, set the exact static number
             setCount(endValue);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  // Special formatting for 99.8
  const formattedCount = end === 99.8 && isInView ? end.toFixed(1) : count.toLocaleString();
  
  return { count: formattedCount, ref };
};


const AssuranceScorecard = () => {
    const yearsOfExperience = useCountUp(12);
    const taxReturns = useCountUp(540); 
    const successRate = useCountUp(99.8); // Now handles 99.8 correctly

    const metricData = [
        {
            icon: Award,
            title: "Years of UK Experience",
            value: yearsOfExperience.count, // Dynamic value
            ref: yearsOfExperience.ref,
            suffix: "+",
            description: "Over a decade specializing in UK tax law and business structures (Ltd & Sole Trader)."
        },
        {
            icon: CheckCircle,
            title: "Tax Return Success Rate",
            value: successRate.count, // Now a dynamic/formatted value
            ref: successRate.ref, 
            suffix: "%",
            description: "Near-perfect record for timely and accurate HMRC submissions, minimizing enquiries."
        },
        {
            icon: TrendingUp,
            title: "Clients Grown Digitally",
            value: taxReturns.count, // Dynamic value
            ref: taxReturns.ref,
            suffix: "+",
            description: "Hundreds of businesses transitioned to efficient, cloud-based accounting workflows."
        },
        {
            icon: Shield,
            title: "Fixed Price Assurance",
            value: "Zero", 
            ref: useRef(null), 
            suffix: " Fee Surprises",
            description: "No hourly rates, ever. Clear, fixed monthly pricing with full penalty protection included."
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 12 
            } 
        },
    };

    return (
        <section className="assurance-scorecard-section">
            <div className="scorecard-wrapper">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    Why UK Businesses Trust Us: The Assurance Scorecard
                </motion.h2>

                <motion.p 
                    className="scorecard-intro"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Accounting isn't just compliance—it's confidence. Our proven metrics are why clients switch and stay.
                </motion.p>

                <motion.div
                    className="metric-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {metricData.map((metric, index) => (
                        <motion.div
                            key={index}
                            className="metric-card"
                            variants={itemVariants}
                        >
                            {/* REMOVED INLINE STYLES. CSS CONTROLS COLOR NOW. */}
                            <div className="metric-icon-wrapper">
                                <metric.icon size={36} />
                            </div>
                            
                            <h3 className="metric-value" ref={metric.ref}>
                                {metric.value}
                                <span className="metric-suffix">{metric.suffix}</span>
                            </h3>

                            <p className="metric-title">{metric.title}</p>
                            <p className="metric-description">{metric.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* <motion.div
                    className="software-badges"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <span>Official Partners with UK's Leading Cloud Platforms:</span>
                    <div className="badge-list">
                        <span className="badge xero">XERO Certified</span>
                        <span className="badge quickbooks">QuickBooks ProAdvisor</span>
                        <span className="badge freeagent">FreeAgent Specialist</span>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default AssuranceScorecard;