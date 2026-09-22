import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  Sun,
  Moon,
  ChevronDown,
  BookOpen,
  Users,
  Shield,
  BarChart3,
  Receipt,
  Briefcase,
  Building2,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import LogoBadge from "../../assets/image/LogoBadge.webp";
import OptimizedImage from "./OptimizedImage";
import "../../css/common/navbar.css";

interface ServiceDropdownItem {
  name: string;
  path: string;
  icon: React.ElementType;
  desc: string;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState<boolean>(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState<boolean>(false);

  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const servicesDropdownRef = useRef<HTMLLIElement>(null);
  const solutionsDropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileSolutionsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        solutionsDropdownRef.current &&
        !solutionsDropdownRef.current.contains(event.target as Node)
      ) {
        setSolutionsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceDropdownItems: ServiceDropdownItem[] = [
    {
      name: "All Accounting Services",
      path: "/services",
      icon: BookOpen,
      desc: "Compare our complete service range",
    },
    {
      name: "Managed Bookkeeping",
      path: "/services/bookkeeping",
      icon: BookOpen,
      desc: "Real-time ledgers & reconciliations",
    },
    {
      name: "Tax & Compliance",
      path: "/services/tax-compliance",
      icon: Shield,
      desc: "Corporation Tax & statutory returns",
    },
    {
      name: "Business Advisory",
      path: "/services/business-advisory",
      icon: BarChart3,
      desc: "Financial forecasting & strategy",
    },
    {
      name: "Payroll & Pensions",
      path: "/services/payroll-pensions",
      icon: Users,
      desc: "PAYE, payslips & pension admin",
    },
    {
      name: "VAT Services",
      path: "/services/vat-services",
      icon: Receipt,
      desc: "MTD filings & scheme optimization",
    },
    {
      name: "Company Secretarial",
      path: "/services/company-secretarial",
      icon: Briefcase,
      desc: "Statutory governance & filings",
    },
  ];

  const solutionsDropdownItems: ServiceDropdownItem[] = [
    {
      name: "For Businesses",
      path: "/solutions/for-businesses",
      icon: Building2,
      desc: "Accounting, tax & advisory for growing companies",
    },
    {
      name: "Workload Outsourcing",
      path: "/solutions/outsource-workload",
      icon: Layers,
      desc: "White-label accounting & capacity for CPA practices",
    },
  ];

  const isServicesActive = location.pathname.startsWith("/services");
  const isSolutionsActive = location.pathname.startsWith("/solutions");

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
    animate: {
      opacity: 1,
      y: 0,
      x: "-50%",
      scale: 1,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: 12,
      x: "-50%",
      scale: 0.95,
      transition: { duration: 0.15 },
    },
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
            <OptimizedImage
              src={LogoBadge}
              alt="47 Accountants logo badge"
              className="nav-logo-badge"
              width={283}
              height={310}
              priority
            />
          </motion.div>
          <span className="logo-text">47 Accountants</span>
        </Link>

        <div className="desktop-nav-content">
          <ul className="nav-links">
            <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
                {location.pathname === "/" && (
                  <motion.span
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </Link>
            </motion.li>

            <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
                {location.pathname === "/about" && (
                  <motion.span
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </Link>
            </motion.li>

            {/* Services Dropdown Menu */}
            <li
              ref={servicesDropdownRef}
              className="nav-dropdown-container"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`nav-dropdown-trigger ${isServicesActive ? "active" : ""}`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`dropdown-chevron ${servicesDropdownOpen ? "open" : ""}`}
                />
                {isServicesActive && <span className="active-indicator" />}
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    className="services-dropdown-menu"
                    variants={dropdownVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {serviceDropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`service-dropdown-item ${location.pathname === item.path ? "active" : ""}`}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <div className="service-dropdown-icon">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <span className="service-dropdown-title">{item.name}</span>
                          <span className="service-dropdown-desc">{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Solutions Dropdown Menu */}
            <li
              ref={solutionsDropdownRef}
              className="nav-dropdown-container"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                className={`nav-dropdown-trigger ${isSolutionsActive ? "active" : ""}`}
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                aria-expanded={solutionsDropdownOpen}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={16}
                  className={`dropdown-chevron ${solutionsDropdownOpen ? "open" : ""}`}
                />
                {isSolutionsActive && <span className="active-indicator" />}
              </button>

              <AnimatePresence>
                {solutionsDropdownOpen && (
                  <motion.div
                    className="services-dropdown-menu solutions-dropdown-custom"
                    variants={dropdownVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {solutionsDropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`service-dropdown-item ${location.pathname === item.path ? "active" : ""}`}
                        onClick={() => setSolutionsDropdownOpen(false)}
                      >
                        <div className="service-dropdown-icon">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <span className="service-dropdown-title">{item.name}</span>
                          <span className="service-dropdown-desc">{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/industries"
                className={location.pathname === "/industries" ? "active" : ""}
              >
                Industries
                {location.pathname === "/industries" && (
                  <motion.span
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </Link>
            </motion.li>

            <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/blog"
                className={location.pathname.startsWith("/blog") ? "active" : ""}
              >
                Blog
                {location.pathname.startsWith("/blog") && (
                  <motion.span
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </Link>
            </motion.li>

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
              <motion.div variants={linkVariants} className="mobile-menu-item">
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active-mobile" : ""}
                >
                  Home
                  {location.pathname === "/" && (
                    <motion.div
                      className="mobile-active-dot"
                      layoutId="mobileActiveDot"
                    />
                  )}
                </Link>
              </motion.div>

              <motion.div variants={linkVariants} className="mobile-menu-item">
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active-mobile" : ""}
                >
                  About
                  {location.pathname === "/about" && (
                    <motion.div
                      className="mobile-active-dot"
                      layoutId="mobileActiveDot"
                    />
                  )}
                </Link>
              </motion.div>

              {/* Mobile Accordion for Services */}
              <motion.div variants={linkVariants} className="mobile-menu-item">
                <button
                  className={`mobile-dropdown-trigger ${isServicesActive ? "active-mobile" : ""}`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    className={`dropdown-chevron ${mobileServicesOpen ? "open" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="mobile-dropdown-list">
                    {serviceDropdownItems.map((item) => (
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

              {/* Mobile Accordion for Solutions */}
              <motion.div variants={linkVariants} className="mobile-menu-item">
                <button
                  className={`mobile-dropdown-trigger ${isSolutionsActive ? "active-mobile" : ""}`}
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    size={18}
                    className={`dropdown-chevron ${mobileSolutionsOpen ? "open" : ""}`}
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div className="mobile-dropdown-list">
                    {solutionsDropdownItems.map((item) => (
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

              <motion.div variants={linkVariants} className="mobile-menu-item">
                <Link
                  to="/industries"
                  className={location.pathname === "/industries" ? "active-mobile" : ""}
                >
                  Industries
                  {location.pathname === "/industries" && (
                    <motion.div
                      className="mobile-active-dot"
                      layoutId="mobileActiveDot"
                    />
                  )}
                </Link>
              </motion.div>

              <motion.div variants={linkVariants} className="mobile-menu-item">
                <Link
                  to="/blog"
                  className={location.pathname.startsWith("/blog") ? "active-mobile" : ""}
                >
                  Blog
                  {location.pathname.startsWith("/blog") && (
                    <motion.div
                      className="mobile-active-dot"
                      layoutId="mobileActiveDot"
                    />
                  )}
                </Link>
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
