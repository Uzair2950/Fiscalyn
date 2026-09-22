import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import { servicesData } from "../data/servicesData";
import { ALL_BLOG_POSTS } from "../data/blogData";
import "../css/legal/legal.css";

const primaryLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Contact", "/contact"],
  ["For Businesses", "/solutions/for-businesses"],
  ["Workload Outsourcing", "/solutions/outsource-workload"],
  ["Blog", "/blog"],
  ["Editorial Policy", "/editorial-policy"],
  ["Privacy Policy", "/privacy"],
  ["Terms of Service", "/terms"],
] as const;

const Sitemap: React.FC = () => (
  <>
    <NavBar />
    <main className="legal-page">
      <div className="legal-container sitemap-container">
        <header className="legal-header">
          <p className="legal-eyebrow">Navigation</p>
          <h1>Website Sitemap</h1>
          <p>Browse every public section of the 47 Accountants website.</p>
        </header>

        <section>
          <h2>Main pages</h2>
          <ul className="sitemap-link-grid">
            {primaryLinks.map(([label, path]) => (
              <li key={path}><Link to={path}>{label}</Link></li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Services</h2>
          <ul className="sitemap-link-grid">
            {Object.values(servicesData).map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Articles</h2>
          <ul className="sitemap-article-list">
            {ALL_BLOG_POSTS.map((post) => (
              <li key={post.id}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Sitemap;
