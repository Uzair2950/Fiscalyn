import React from 'react';
import '../../css/common/footer.css'

const Footer = () => {
  return (
    <footer className="footer-component">
      <div className="container">
        
        <div className="footer-top">
          {/* 1. Brand/Mission Section */}
          <div className="brand-mission">
            <h3 className="brand-title">Intelligence Flow</h3>
            <p className="mission-statement">
              Empowering the future of finance with clarity, security, and precision-driven data.
            </p>
            <div className="social-links">
              {/* Placeholder Icons - Replace with actual SVG or library components (e.g., Font Awesome) */}
              <a href="#" aria-label="LinkedIn"><i className="icon-linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i className="icon-twitter"></i></a>
              <a href="#" aria-label="GitHub"><i className="icon-github"></i></a>
            </div>
          </div>
          
          {/* 2. Navigation Links */}
          <div className="footer-nav">
            {/* Column 1: Platform */}
            <div className="nav-column">
              <h4 className="column-title">Platform</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
            
            {/* Column 2: Company */}
            <div className="nav-column">
              <h4 className="column-title">Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers <span className="badge">Hiring</span></a></li>
                <li><a href="#">Partnership</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            
            {/* Column 3: Resources */}
            <div className="nav-column">
              <h4 className="column-title">Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">API Status</a></li>
              </ul>
            </div>
          </div>
          
          {/* 3. Call to Action/Newsletter */}
          <div className="footer-cta">
            <h4 className="column-title">Get Started</h4>
            <p>Subscribe to our newsletter for intelligence updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" aria-label="Email for newsletter"/>
              <button type="submit" className="cta-button">Subscribe</button>
            </form>
          </div>
        </div>
        
        <hr className="footer-divider"/>
        
        {/* 4. Bottom Legal/Copyright Section */}
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Intelligence Flow, Inc. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;