import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Award, Users, TrendingUp, Shield, LucideIcon } from "lucide-react";
import "../../css/home/assurance-scorecard.css";

interface CountUpResult {
  count: number | string;
  ref: React.RefObject<HTMLDivElement>;
}

const useCountUp = (
  end: number | string,
  duration: number = 2000,
): CountUpResult => {
  const [count, setCount] = useState<number | string>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const endValue =
        typeof end === "number" ? end : parseFloat(end as string);
      const startTime = performance.now();

      const animate = (currentTime: number): void => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);

        if (typeof end === "string" && (end as string).includes(".")) {
          const value = progress * endValue;
          setCount(value.toFixed(1));
        } else {
          const value = Math.floor(progress * endValue);
          setCount(value);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(
            typeof end === "string" && (end as string).includes(".")
              ? endValue.toFixed(1)
              : endValue,
          );
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return { count, ref };
};

interface Stat {
  icon: LucideIcon;
  title: string;
  value: CountUpResult;
  suffix: string;
  description: string;
  color: string;
}

const AssuranceScorecard: React.FC = () => {
  const stats: Stat[] = [
    {
      icon: Award,
      title: "Years in Practice",
      value: useCountUp(12),
      suffix: "+",
      description:
        "Over a decade of specialist expertise in global accountancy, tax compliance, and business advisory.",
      color: "var(--color-gold-primary)",
    },
    {
      icon: Users,
      title: "Clients Served",
      value: useCountUp(1200),
      suffix: "+",
      description:
        "Trusted by over 1,200 global businesses—from sole traders and startups to growing SMEs.",
      color: "var(--color-navy-light)",
    },
    {
      icon: TrendingUp,
      title: "On-Time Filing Rate",
      value: useCountUp("99.8"),
      suffix: "%",
      description:
        "Near-perfect record for timely HMRC submissions, VAT returns, and year-end accounts.",
      color: "var(--color-gold-primary)",
    },
    {
      icon: Shield,
      title: "Client Retention",
      value: useCountUp(97),
      suffix: "%",
      description:
        "Industry-leading retention rate—our clients stay because we deliver real, measurable value.",
      color: "var(--color-red)",
    },
  ];

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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="scorecard-section">
      <div className="scorecard-container">
        <motion.div
          className="scorecard-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="scorecard-badge">
            <span className="scorecard-badge-text">Why Choose Us</span>
          </div>

          <h2 className="scorecard-headline">
            Why Global Businesses
            <span className="scorecard-gradient-text">
              {" "}
              Trust 47 Accountants
            </span>
          </h2>
          <p className="scorecard-subheadline">
            Our track record speaks for itself. These aren't just
            numbers—they're a testament to our commitment to getting
            your finances right.
          </p>
        </motion.div>

        <motion.div
          className="scorecard-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="scorecard-card"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div
                className="scorecard-metric-value"
                ref={stat.value.ref}
                style={{ color: stat.color }}
              >
                {typeof stat.value.count === "number"
                  ? stat.value.count.toLocaleString()
                  : stat.value.count}
                {stat.suffix}
              </div>

              <h3 className="scorecard-metric-label">{stat.title}</h3>
              <p className="scorecard-metric-desc">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AssuranceScorecard;
