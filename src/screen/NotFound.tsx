import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import "../css/legal/legal.css";

const NotFound: React.FC = () => (
  <>
    <NavBar />
    <main className="legal-page not-found-page">
      <div className="legal-container">
        <p className="legal-eyebrow">404</p>
        <h1>Page not found</h1>
        <p>
          The page may have moved, or the address may be incorrect. Return to
          the <Link to="/">homepage</Link> or browse the <Link to="/sitemap">sitemap</Link>.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default NotFound;
