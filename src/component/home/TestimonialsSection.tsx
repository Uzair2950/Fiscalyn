import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import "../../css/home/testimonials.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  metric: string;
  color: string;
}

interface Company {
  name: string;
  logo: string;
}

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Director",
      company: "TechFlow Solutions Ltd",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      rating: 5,
      text: "Switching to 47accountants was the best business decision I made. Our accounts are always done on time, and they’ve already saved us over £18,000 in tax through smart planning. Couldn’t be happier.",
      metric: "£18K tax saved",
      color: "#635bff",
    },
    {
      id: 2,
      name: "James Rodriguez",
      role: "Finance Director",
      company: "GrowthMetrics Ltd",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      rating: 5,
      text: "Our monthly management accounts are crystal clear. The 47accountants team takes the time to explain exactly where our money is going and what we can do to improve margins. Genuinely proactive advice.",
      metric: "23% margin improvement",
      color: "#00d4ff",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Founder",
      company: "Nova Ventures",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      rating: 5,
      text: "As a startup founder, I used to dread tax season. Now I don’t even think about it. 47accountants handles everything seamlessly—and they helped us structure our director salaries to save nearly £12,000 a year.",
      metric: "£12K saved per year",
      color: "#00e676",
    },
    {
      id: 4,
      name: "Michael Thompson",
      role: "Operations Manager",
      company: "Summit Consulting",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      rating: 5,
      text: "We never have to worry about HMRC deadlines or MTD submissions anymore. Every VAT return, payroll run, and tax filing is done accurately and on time. The compliance burden has completely lifted from our shoulders.",
      metric: "100% on-time filing",
      color: "#ff6b6b",
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "CFO",
      company: "Digital Dynamics",
      image:
        "https://images.unsplash.com/photo-1508214751196-bfd1411309df?w=400&h=400&fit=crop",
      rating: 5,
      text: "We’ve worked with three different accountants over the years. 47accountants is by far the most responsive and knowledgeable. They feel like a genuine partner in our growth, not just someone who files our returns.",
      metric: "97% retention rate",
      color: "#ffd93d",
    },
  ];

  const companies: Company[] = [
    {
      name: "Xero",
      logo: "https://cdn.worldvectorlogo.com/logos/xero-1.svg",
    },
    {
      name: "QuickBooks",
      logo: "https://cdn.worldvectorlogo.com/logos/quickbooks.svg",
    },
    {
      name: "Sage",
      logo: "https://cdn.worldvectorlogo.com/logos/sage-logo.svg",
    },
    {
      name: "Stripe",
      logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    },
    {
      name: "HMRC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/HM_Revenue_and_Customs_logo.svg",
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-background">
        <div className="testimonials-grid-pattern" />
        <motion.div
          className="testimonials-gradient-orb testimonials-orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="testimonials-gradient-orb testimonials-orb-2"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="testimonials-badge">
            <span className="testimonials-badge-dot" />
            <span className="testimonials-badge-text">
              Loved by 10,000+ Businesses
            </span>
          </motion.div>

          <h2 className="testimonials-headline">
            Don't Just Take Our Word for It—
            <span className="testimonials-gradient-text">
              {" "}
              Hear from Our Clients
            </span>
          </h2>

          <p className="testimonials-subheadline">
            Join thousands of satisfied businesses who've transformed their
            financial operations with 47accountants.
          </p>
        </motion.div>

        <div
          className="testimonials-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="testimonial-quote-icon">
                <Quote
                  size={32}
                  color={activeTestimonial.color}
                  strokeWidth={1.5}
                />
              </div>

              <div className="testimonial-rating">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#ffd93d"
                    color="#ffd93d"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p className="testimonial-text">"{activeTestimonial.text}"</p>

              <div className="testimonial-footer">
                <div className="testimonial-author-info">
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="testimonial-author-image"
                  />
                  <div className="testimonial-author-details">
                    <div className="testimonial-author-name">
                      {activeTestimonial.name}
                    </div>
                    <div className="testimonial-author-role">
                      {activeTestimonial.role} at {activeTestimonial.company}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="testimonial-metric-badge"
                  style={{
                    background: `${activeTestimonial.color}15`,
                    border: `1px solid ${activeTestimonial.color}30`,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span
                    className="testimonial-metric-text"
                    style={{ color: activeTestimonial.color }}
                  >
                    {activeTestimonial.metric}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            className="testimonial-nav-button testimonial-nav-button-left"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            className="testimonial-nav-button testimonial-nav-button-right"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </motion.button>

          <div className="testimonials-dots-container">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className="testimonial-dot"
                style={{
                  background:
                    index === activeIndex ? "#635bff" : "rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="testimonials-companies-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="testimonials-companies-text">
            Trusted Integrations & Partners
          </p>
          <div className="testimonials-companies-grid">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="testimonial-company-logo"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="testimonial-company-logo-img"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<div class="testimonial-logo-fallback">${company.name}</div>`;
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
