import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, ChevronLeft, ChevronRight, BookOpen, Tag } from "lucide-react";
import { ALL_BLOG_POSTS, BLOG_CATEGORIES, BlogCategory } from "../data/blogData";
import "../css/blog/blog.css";

const POSTS_PER_PAGE = 9;

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Scroll to top on page or filter change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedCategory]);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return ALL_BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.keywords.some((kw) => kw.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Calculate pagination details
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategoryChange = (category: BlogCategory) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Generate pagination page numbers with smart ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <>
      <NavBar />
      <main className="blog-page">
        {/* Header Section */}
        <header className="blog-header-container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="blog-badge">
              <BookOpen size={16} style={{ color: "var(--color-gold-primary)" }} />
              <span className="blog-badge-text">Global Accounting &amp; Tax Hub 2026</span>
            </div>
            <h1 className="blog-main-title">
              Insights, Guidance &amp;{" "}
              <span style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Global Tax Regulations
              </span>
            </h1>
            <p className="blog-subtitle">
              Explore 100+ expert articles covering international compliance, corporate tax optimizations, VAT/GST thresholds, financial planning, and practice outsourcing strategies.
            </p>
          </motion.div>
        </header>

        {/* Search & Category Filter Controls */}
        <section className="blog-controls-wrapper" aria-label="Blog Filters">
          <div className="blog-search-box">
            <Search className="blog-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search by topic, keyword (e.g. MTD, Corporation Tax, VAT)..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="blog-search-input"
              aria-label="Search blog posts"
            />
          </div>

          <div className="blog-category-filters" role="tablist">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`category-filter-btn ${selectedCategory === cat ? "active" : ""}`}
                role="tab"
                aria-selected={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Results Meta Info */}
        <div className="blog-results-meta">
          <span>
            Showing <strong>{filteredPosts.length}</strong> global accounting articles
            {selectedCategory !== "All" && ` in "${selectedCategory}"`}
          </span>
          <span>
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>
        </div>

        {/* Blog Post Grid */}
        <section className="blog-grid" aria-label="Blog Post List">
          <AnimatePresence mode="wait">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="blog-card"
                >
                  <Link to={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                    <div>
                      <div className="blog-card-img-wrapper">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="blog-card-img"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80&fm=jpg&fit=crop";
                          }}
                        />
                        <span className="blog-card-badge">{post.category}</span>
                      </div>

                      <div className="blog-card-body">
                        <h2 className="blog-card-title">{post.title}</h2>
                        <p className="blog-card-excerpt">{post.excerpt}</p>
                      </div>
                    </div>

                    <div className="blog-card-footer" style={{ marginTop: "auto" }}>
                      <div className="author-info">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="author-avatar"
                        />
                        <div>
                          <span className="author-name">{post.author.name}</span>
                          <span className="author-role">{post.author.role}</span>
                        </div>
                      </div>

                      <div className="blog-read-time">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            ) : (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "60px 20px",
                  background: "var(--bg-card)",
                  borderRadius: "20px",
                  border: "1px solid var(--border-gold)",
                }}
              >
                <Tag size={40} style={{ color: "var(--color-gold-primary)", marginBottom: "16px" }} />
                <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "8px" }}>
                  No articles found
                </h3>
                <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
                  Try adjusting your search terms or clearing selected category filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="category-filter-btn active"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </section>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <nav className="pagination-container" aria-label="Blog Pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="pagination-btn"
              aria-label="Previous Page"
            >
              <ChevronLeft size={18} />
            </button>

            {getPageNumbers().map((pageNum, index) =>
              typeof pageNum === "number" ? (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`pagination-btn ${currentPage === pageNum ? "active" : ""}`}
                >
                  {pageNum}
                </button>
              ) : (
                <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                  ...
                </span>
              )
            )}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="pagination-btn"
              aria-label="Next Page"
            >
              <ChevronRight size={18} />
            </button>
          </nav>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Blog;
