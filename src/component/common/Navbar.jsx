import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/common/navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
  ];

  const menuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.05
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren"
      },
    },
  };
  
  const linkVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <motion.div 
            className="logo-icon"
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="32" height="32" rx="8" fill="url(#logoGradient)" />
              <path d="M12 16h16M12 20h12M12 24h16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <defs>
                <linearGradient id="logoGradient" x1="4" y1="4" x2="36" y2="36">
                  <stop offset="0%" stopColor="#635bff" />
                  <stop offset="100%" stopColor="#00d4ff" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          <span className="logo-text">Fiscalyn</span>
        </Link>

        <div className="desktop-nav-content">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <motion.li 
                key={link.path}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? "active" : ""}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" className="nav-cta-button">
              <span>Get Started</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <motion.button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="mobile-menu-content">
              {navLinks.map((link) => (
                <motion.div 
                  variants={linkVariants} 
                  key={link.path}
                  className="mobile-menu-item"
                >
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? "active-mobile" : ""}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div 
                        className="mobile-active-dot"
                        layoutId="mobileActiveDot"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                variants={linkVariants}
                className="mobile-cta-wrapper"
              >
                <Link to="/contact" className="mobile-cta-button">
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;