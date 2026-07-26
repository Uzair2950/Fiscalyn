import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sun, Moon, ChevronDown, BookOpen, Users } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import LogoBadge from "../../assets/image/LogoBadge.webp";
import "../../css/common/navbar.css";

interface NavLink {
  name: string;
  path: string;
}

interface DropdownItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(false);

  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  const dropdownItems: DropdownItem[] = [
    { name: "Blogs", path: "/blog", icon: BookOpen },
    { name: "Collaboration", path: "/collaboration", icon: Users },
  ];

  const isDropdownActive = dropdownItems.some((item) => location.pathname === item.path);

  const menuVariants: Variants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren",
      },
    },
  };

  const linkVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const dropdownVariants: Variants = {
    initial: { opacity: 0, y: 12, x: "-50%", scale: 0.95 },
    animate: { opacity: 1, y: 0, x: "-50%", scale: 1, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: 12, x: "-50%", scale: 0.95, transition: { duration: 0.15 } },
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
            className="logo-icon-wrapper"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={LogoBadge}
              alt="47 Accountants logo badge"
              className="nav-logo-badge"
            />
          </motion.div>
          <span className="logo-text">47 Accountants</span>
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

            {/* Dropdown Menu (Blogs & Collaboration) */}
            <li
              ref={dropdownRef}
              className="nav-dropdown-container"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`nav-dropdown-trigger ${isDropdownActive ? "active" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                <span>More</span>
                <ChevronDown
                  size={16}
                  className={`dropdown-chevron ${dropdownOpen ? "open" : ""}`}
                />
                {isDropdownActive && (
                  <span className="active-indicator" />
                )}
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="nav-dropdown-menu"
                    variants={dropdownVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`dropdown-item ${location.pathname === item.path ? "active" : ""}`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        <item.icon size={18} className="dropdown-item-icon" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={20} className="theme-icon sun-icon" />
            ) : (
              <Moon size={20} className="theme-icon moon-icon" />
            )}
          </motion.button>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" className="nav-cta-button">
              <span>Book Consultation</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="mobile-actions">
          {/* Mobile Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="theme-toggle-btn mobile-theme-btn"
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={22} className="theme-icon sun-icon" />
            ) : (
              <Moon size={22} className="theme-icon moon-icon" />
            )}
          </motion.button>

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
                    className={
                      location.pathname === link.path ? "active-mobile" : ""
                    }
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

              {/* Mobile Accordion for More (Blogs & Collaboration) */}
              <motion.div variants={linkVariants} className="mobile-menu-item">
                <button
                  className={`mobile-dropdown-trigger ${isDropdownActive ? "active-mobile" : ""}`}
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                >
                  <span>More</span>
                  <ChevronDown
                    size={18}
                    className={`dropdown-chevron ${mobileDropdownOpen ? "open" : ""}`}
                  />
                </button>
                {mobileDropdownOpen && (
                  <div className="mobile-dropdown-list">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`mobile-dropdown-subitem ${location.pathname === item.path ? "active" : ""}`}
                      >
                        <item.icon size={16} />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>

              <motion.div
                variants={linkVariants}
                className="mobile-cta-wrapper"
              >
                <Link to="/contact" className="mobile-cta-button">
                  <span>Book Consultation</span>
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
