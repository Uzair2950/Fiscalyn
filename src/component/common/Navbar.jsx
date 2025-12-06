import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/common/navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setScrolled(true); // Increased scroll threshold
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
  ];
  
  // Separate CTA link
  const ctaLink = { name: "Contact Us", path: "/contact" };


  // Mobile menu animation variants
  const menuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.05
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        when: "afterChildren"
      },
    },
  };
  
  const linkVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };


  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          Accounting<span>Empire</span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-nav-content">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <motion.li key={link.path} whileHover={{ y: -2 }}>
                <Link to={link.path} className={location.pathname === link.path ? "active" : ""}>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <Link to={ctaLink.path} className="cta-button">
            {ctaLink.name}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {[...navLinks, ctaLink].map((link) => (
              <motion.div variants={linkVariants} key={link.path}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? "active-mobile" : ""}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;