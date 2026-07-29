import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NavBar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, CheckCircle2, Tag, ArrowRight, ShieldCheck } from "lucide-react";
import { ALL_BLOG_POSTS } from "../data/blogData";
import "../css/blog/blog-detail.css";

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find article by slug or id
  const post = ALL_BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!post) {
    return (
      <>
        <NavBar />
        <main className="blog-detail-page" style={{ textAlign: "center", padding: "180px 20px" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "2.5rem", color: "var(--text-primary)", marginBottom: "16px" }}>
              Article Not Found
            </h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>
              The global accounting article you are looking for might have been moved or updated.
            </p>
            <Link to="/blog" className="back-to-blogs-btn">
              <ArrowLeft size={16} />
              <span>Back to All Articles</span>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <main className="blog-detail-page">
        <article className="blog-detail-container">
          {/* Navigation link back */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/blog" className="back-to-blogs-btn">
              <ArrowLeft size={16} />
              <span>Back to Articles</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <header className="blog-detail-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="blog-detail-category">{post.category}</span>
              <h1 className="blog-detail-title">{post.title}</h1>

              <div className="blog-detail-meta">
                <div className="author-detail-wrapper">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="author-detail-avatar"
                  />
                  <div>
                    <span className="author-detail-name">{post.author.name}</span>
                    <span className="author-detail-role">{post.author.role}</span>
                  </div>
                </div>

                <div className="blog-detail-stats">
                  <div className="blog-detail-stat-item">
                    <Calendar size={16} style={{ color: "var(--color-gold-primary)" }} />
                    <span>{post.date}</span>
                  </div>
                  <div className="blog-detail-stat-item">
                    <Clock size={16} style={{ color: "var(--color-gold-primary)" }} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </header>

          {/* Featured Header Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="blog-detail-hero-img-wrapper"
          >
            <img
              src={post.image}
              alt={post.title}
              className="blog-detail-hero-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80&fm=jpg&fit=crop";
              }}
            />
          </motion.div>

          {/* Article Content */}
          <div className="blog-article-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="blog-intro-lead">{post.intro}</p>

              {post.sections.map((section, idx) => (
                <div key={idx} className="blog-section-block">
                  <h2 className="blog-section-heading">{section.heading}</h2>
                  <p className="blog-section-body">{section.body}</p>
                </div>
              ))}

              {/* Key Takeaways Box */}
              <div className="key-takeaways-box">
                <div className="key-takeaways-header">
                  <ShieldCheck size={24} />
                  <span>Key Takeaways for Global Businesses</span>
                </div>
                <ul className="key-takeaways-list">
                  {post.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="key-takeaway-item">
                      <CheckCircle2 className="takeaway-check-icon" size={20} />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Keywords / SEO Tags */}
              <div className="blog-footer-tags-wrapper">
                <Tag size={16} style={{ color: "var(--color-gold-primary)" }} />
                {post.keywords.map((kw, idx) => (
                  <span key={idx} className="blog-tag-pill">
                    #{kw}
                  </span>
                ))}
              </div>

              {/* Consultation Call to Action */}
              <div className="blog-consultation-cta">
                <h3>Need Strategic Global Tax or Outsourcing Guidance?</h3>
                <p>
                  Our team of FCCA and CTA specialists can help your business or accountancy practice optimize profits, ensure 100% HMRC compliance, and scale efficiently.
                </p>
                <Link to="/contact" className="blog-cta-button">
                  <span>Book Free Consultation</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;
