import React from "react";
import NavBar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Calendar, User } from "lucide-react";

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Essential UK Corporation Tax Strategies for 2026",
      category: "Tax Planning",
      date: "July 15, 2026",
      author: "Alexandra Chen, ACCA",
      excerpt: "Discover proactive tax planning techniques to optimize allowable expenses, capital allowances, and director dividend structures.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
    },
    {
      title: "Making Tax Digital (MTD) for ITSA: What You Need to Know",
      category: "Compliance & MTD",
      date: "June 28, 2026",
      author: "Marcus Johnson, CTA",
      excerpt: "A comprehensive guide for UK sole traders and property landlords preparing for quarterly digital filings with HMRC.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "Why UK Accountancy Practices Are Embracing White-Label Outsourcing",
      category: "Practice Advisory",
      date: "June 10, 2026",
      author: "Sarah Williams, FCCA",
      excerpt: "How subcontracting routine bookkeeping and VAT work allows firm partners to focus on high-value business advisory.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    },
  ];

  return (
    <>
      <NavBar />
      <section style={{ background: "var(--bg-main)", minHeight: "80vh", padding: "140px 5vw 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                background: "var(--color-gold-soft)",
                border: "1px solid var(--border-gold)",
                borderRadius: "50px",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-gold-primary)" }}>
                Accounting Insights &amp; Updates
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>
              Latest Insights &amp; <span style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>UK Tax Guides</span>
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", maxWidth: "650px", margin: "0 auto" }}>
              Stay ahead of HMRC regulatory changes, MTD compliance requirements, and proactive tax saving tips.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            {posts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                style={{
                  background: "var(--bg-card)",
                  borderRadius: "20px",
                  border: "1px solid var(--border-gold)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <img src={post.image} alt={post.title} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                <div style={{ padding: "28px" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-gold-primary)", textTransform: "uppercase", marginBottom: "10px" }}>
                    {post.category}
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px", lineHeight: 1.3 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "20px" }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text-muted)", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
