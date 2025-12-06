import React from "react";
import { motion } from "framer-motion";
import "../../css/home/about.css";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 }, 
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const graphicVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
  };

const FinancialFlowGraphic = () => (
    <svg
      className="w-full h-auto"
      viewBox="0 0 800 700"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="premiumFinancialTitle"
    >
      <title id="premiumFinancialTitle">
        Financial Intelligence Visualization - Empowering Modern Finance
      </title>

      <defs>
        {/* Stripe-inspired Gradients */}
        <linearGradient id="stripePurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#635bff" stopOpacity="1" />
          <stop offset="50%" stopColor="#7c73ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#b8b5ff" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="stripeBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a2540" stopOpacity="1" />
          <stop offset="50%" stopColor="#1a3a5c" stopOpacity="1" />
          <stop offset="100%" stopColor="#2a4a6c" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="accentCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="1" />
          <stop offset="50%" stopColor="#0099ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#0066ff" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="successGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00e676" stopOpacity="1" />
          <stop offset="50%" stopColor="#00c853" stopOpacity="1" />
          <stop offset="100%" stopColor="#00a843" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="warningOrange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff9100" stopOpacity="1" />
          <stop offset="50%" stopColor="#ff6d00" stopOpacity="1" />
          <stop offset="100%" stopColor="#ff5722" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="cardGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
        </linearGradient>

        <radialGradient id="glowOrb" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(99,91,255,0.3)" />
          <stop offset="50%" stopColor="rgba(99,91,255,0.15)" />
          <stop offset="100%" stopColor="rgba(99,91,255,0)" />
        </radialGradient>

        {/* Refined Filters */}
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 12 -5" result="glow" />
          <feBlend in="SourceGraphic" in2="glow" mode="normal" />
        </filter>

        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
          <feOffset dx="0" dy="3" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.15" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="iconGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Grid Pattern */}
        <pattern id="subtleGrid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(99,91,255,0.06)" strokeWidth="0.5" />
        </pattern>

        {/* Text Styles */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
          
          .main-title {
            font-family: 'Inter', sans-serif;
            font-size: 32px;
            font-weight: 800;
            fill: #0a2540;
            letter-spacing: -0.03em;
          }
          .section-title {
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            font-weight: 700;
            fill: #525f7f;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          .metric-value {
            font-family: 'Inter', sans-serif;
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -0.02em;
          }
          .metric-small {
            font-family: 'Inter', sans-serif;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.01em;
          }
          .label-text {
            font-family: 'Inter', sans-serif;
            font-size: 11px;
            font-weight: 600;
            fill: #525f7f;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
          .chart-label {
            font-family: 'Inter', sans-serif;
            font-size: 10px;
            font-weight: 500;
            fill: #8898aa;
          }
          .percentage {
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-weight: 700;
          }
        `}</style>
      </defs>

      {/* Clean White Background */}
      <rect width="800" height="700" fill="#ffffff" />
      
      {/* Subtle Grid Background */}
      <rect width="800" height="700" fill="url(#subtleGrid)" opacity="0.5" />
      
      {/* Ambient Glow Orbs */}
      <motion.circle
        cx="150" cy="150" r="120"
        fill="url(#glowOrb)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.circle
        cx="650" cy="500" r="140"
        fill="url(#glowOrb)"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Main Title - Adjusted Y position */}
      <motion.text
        x="400" y="60" textAnchor="middle" className="main-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Financial HEHE BOI
      </motion.text>

      {/* Innovation Icon Badge - Adjusted Y position */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <circle cx="100" cy="120" r="28" fill="url(#stripePurple)" opacity="0.1" />
        <circle cx="100" cy="120" r="22" fill="url(#stripePurple)" filter="url(#iconGlow)" />
        <motion.path
          d="M100 108 L100 132 M88 120 L112 120 M95 113 L105 113 M95 127 L105 127 M93 120 L93 120"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '100px 120px' }}
        />
        <text x="100" y="158" textAnchor="middle" className="label-text" fill="#635bff">
          INNOVATION
        </text>
      </motion.g>

      {/* Security Icon Badge - Adjusted Y position */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <circle cx="400" cy="120" r="28" fill="url(#accentCyan)" opacity="0.1" />
        <circle cx="400" cy="120" r="22" fill="url(#accentCyan)" filter="url(#iconGlow)" />
        <path
          d="M400 110 L408 114 L408 126 L400 130 L392 126 L392 114 Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
        />
        <circle cx="400" cy="120" r="3" fill="#00d4ff" />
        <text x="400" y="158" textAnchor="middle" className="label-text" fill="#00d4ff">
          SECURITY
        </text>
      </motion.g>

      {/* Partnership Icon Badge - Adjusted Y position */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <circle cx="700" cy="120" r="28" fill="url(#successGreen)" opacity="0.1" />
        <circle cx="700" cy="120" r="22" fill="url(#successGreen)" filter="url(#iconGlow)" />
        <circle cx="695" cy="118" r="4" fill="white" />
        <circle cx="705" cy="118" r="4" fill="white" />
        <path d="M690 125 Q700 130 710 125" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <text x="700" y="158" textAnchor="middle" className="label-text" fill="#00e676">
          PARTNERSHIP
        </text>
      </motion.g>

      {/* Main Dashboard Card */}
      <motion.g
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <rect
          x="60" y="190" width="680" height="490" 
          rx="20"
          fill="url(#cardGlass)"
          stroke="rgba(99,91,255,0.15)"
          strokeWidth="1.5"
          filter="url(#cardShadow)"
        />
      </motion.g>

      {/* Top Metrics Row */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        {/* Portfolio Value */}
        <rect x="90" y="220" width="200" height="90" rx="12" fill="rgba(99,91,255,0.06)" stroke="rgba(99,91,255,0.15)" strokeWidth="1" />
        <text x="190" y="245" textAnchor="middle" className="label-text">Portfolio Value</text>
        <text x="110" y="280" className="metric-value" fill="url(#stripePurple)">$847K</text>
        <text x="220" y="280" className="percentage" fill="#00e676">+24.7%</text>
      </motion.g>

      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        {/* Monthly Growth */}
        <rect x="310" y="220" width="200" height="90" rx="12" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />
        <text x="410" y="245" textAnchor="middle" className="label-text">Monthly Growth</text>
        <text x="330" y="280" className="metric-value" fill="url(#accentCyan)">$12.8K</text>
        <motion.path
          d="M465 265 L472 258 L479 260 L486 254 L493 256 L500 250"
          stroke="url(#accentCyan)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          animate={{ y: [-1, 1, -1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.g>

      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
      >
        {/* Active Deals */}
        <rect x="530" y="220" width="180" height="90" rx="12" fill="rgba(0,230,118,0.06)" stroke="rgba(0,230,118,0.15)" strokeWidth="1" />
        <text x="620" y="245" textAnchor="middle" className="label-text">Active Deals</text>
        <text x="585" y="280" className="metric-value" fill="url(#successGreen)">127</text>
        <circle cx="680" cy="273" r="8" fill="none" stroke="url(#successGreen)" strokeWidth="2">
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </motion.g>

      {/* Main Chart Section */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        <text x="90" y="345" className="section-title">Performance Overview</text>
        
        {/* Chart Background */}
        <rect x="90" y="360" width="620" height="220" rx="10" fill="rgba(99,91,255,0.02)" />
        
        {/* Grid Lines */}
        <g opacity="0.2">
          <line x1="90" y1="400" x2="710" y2="400" stroke="#525f7f" strokeDasharray="4 4" strokeWidth="0.5" />
          <line x1="90" y1="460" x2="710" y2="460" stroke="#525f7f" strokeDasharray="4 4" strokeWidth="0.5" />
          <line x1="90" y1="520" x2="710" y2="520" stroke="#525f7f" strokeDasharray="4 4" strokeWidth="0.5" />
        </g>

        {/* Y-axis Labels */}
        <text x="90" y="405" className="chart-label" textAnchor="end">$10M</text>
        <text x="90" y="465" className="chart-label" textAnchor="end">$5M</text>
        <text x="90" y="525" className="chart-label" textAnchor="end">$1M</text>

        {/* X-axis Labels */}
        <text x="120" y="595" className="chart-label" textAnchor="middle">JAN</text>
        <text x="210" y="595" className="chart-label" textAnchor="middle">FEB</text>
        <text x="300" y="595" className="chart-label" textAnchor="middle">MAR</text>
        <text x="390" y="595" className="chart-label" textAnchor="middle">APR</text>
        <text x="480" y="595" className="chart-label" textAnchor="middle">MAY</text>
        <text x="570" y="595" className="chart-label" textAnchor="middle">JUN</text>
        <text x="660" y="595" className="chart-label" textAnchor="middle">JUL</text>

        {/* Area Fill */}
        <motion.path
          d="M120 520 Q175 510, 210 495 T300 465 T390 425 T480 395 T570 375 T660 365 L660 570 L120 570 Z"
          fill="url(#stripePurple)"
          opacity="0.1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />

        {/* Main Growth Line */}
        <motion.path
          d="M120 520 Q175 510, 210 495 T300 465 T390 425 T480 395 T570 375 T660 365"
          stroke="url(#stripePurple)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#softGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 2.5, ease: "easeInOut" }}
        />

        {/* Data Points */}
        {[
          { x: 120, y: 520, delay: 1.7 },
          { x: 210, y: 495, delay: 1.9 },
          { x: 300, y: 465, delay: 2.1 },
          { x: 390, y: 425, delay: 2.3 },
          { x: 480, y: 395, delay: 2.5 },
          { x: 570, y: 375, delay: 2.7 },
          { x: 660, y: 365, delay: 2.9 }
        ].map((point, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: point.delay, duration: 0.4, type: "spring", stiffness: 150 }}
          >
            <circle cx={point.x} cy={point.y} r="7" fill="#635bff" opacity="0.2" />
            <circle cx={point.x} cy={point.y} r="4" fill="#635bff" />
            <circle cx={point.x} cy={point.y} r="2" fill="white" />
          </motion.g>
        ))}
      </motion.g>

      {/* Bottom Stats Cards - Adjusted Y position to be inside main dashboard card */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.7 }}
      >
        <rect x="120" y="610" width="150" height="60" rx="10" fill="rgba(255,145,0,0.06)" stroke="rgba(255,145,0,0.12)" strokeWidth="1" />
        <text x="185" y="635" textAnchor="middle" className="label-text">Savings Rate</text>
        <text x="145" y="660" className="metric-small" fill="url(#warningOrange)">43.2%</text>
      </motion.g>

      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.7 }}
      >
        <rect x="280" y="610" width="150" height="60" rx="10" fill="rgba(0,230,118,0.06)" stroke="rgba(0,230,118,0.12)" strokeWidth="1" />
        <text x="355" y="635" textAnchor="middle" className="label-text">Annual ROI</text>
        <text x="315" y="660" className="metric-small" fill="url(#successGreen)">18.7%</text>
      </motion.g>

      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.7 }}
      >
        <rect x="450" y="610" width="150" height="60" rx="10" fill="rgba(99,91,255,0.06)" stroke="rgba(99,91,255,0.12)" strokeWidth="1" />
        <text x="525" y="635" textAnchor="middle" className="label-text">Risk Score</text>
        <text x="485" y="660" className="metric-small" fill="url(#stripePurple)">6.4/10</text>
      </motion.g>

      {/* Rocket Icon - Innovation Symbol - Adjusted position to be decorative, not overlapping cards */}
      <motion.g
        transform="translate(650, 640)" /* Moved further right and down */
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          y: [0, -8, 0]
        }}
        transition={{ 
          opacity: { delay: 2.5, duration: 0.8 },
          scale: { delay: 2.5, duration: 0.8 },
          rotate: { delay: 2.5, duration: 0.8 },
          y: { delay: 3, duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <circle cx="0" cy="0" r="30" fill="url(#stripePurple)" opacity="0.15" />
        <path
          d="M-5 10 L0 -15 L5 10 L0 5 Z"
          fill="url(#stripePurple)"
          filter="url(#softGlow)"
        />
        <path d="M-5 5 L-10 15 L-5 10 Z" fill="#ff9100" opacity="0.8" />
        <path d="M5 5 L10 15 L5 10 Z" fill="#ff9100" opacity="0.8" />
        <circle cx="0" cy="0" r="2" fill="white" />
      </motion.g>

      {/* Decorative Sparkles - Adjusted positions to be within bounds and decorative */}
      {[
        { x: 250, y: 200, delay: 3 }, /* Original Sparkle 1, kept as is relative to viewBox */
        { x: 550, y: 180, delay: 3.3 }, /* Original Sparkle 2, kept as is relative to viewBox */
        { x: 690, y: 350, delay: 3.6 } /* Adjusted Sparkle 3 to be within the main dashboard card */
      ].map((sparkle, i) => (
        <motion.g
          key={`sparkle-${i}`}
          transform={`translate(${sparkle.x}, ${sparkle.y})`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut"
          }}
        >
          <path
            d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z"
            fill="#635bff"
            opacity="0.6"
          />
        </motion.g>
      ))}
      
      {/* Removed the partially visible element at the top right. It was likely a stray component from a previous copy-paste or a default from a library. */}
    </svg>
  );



  return (
    <section className="about-container">
      <div className="background-grid" aria-hidden="true" />
      <div className="about-content-wrapper">
        <motion.div
          className="about-text-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants}>
            Our Mission: Empowering the Future of{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
                repeatType: "reverse",
              }}
            >
              Finance
            </motion.span>
          </motion.h2>
          <motion.p variants={itemVariants}>
            At **[Your Company Name]**, we believe in a world where financial services are
            seamless, intelligent, and accessible to everyone. We're building the
            next-generation infrastructure to make this vision a reality,
            transforming complex financial operations into intuitive, programmable solutions.
          </motion.p>
          <motion.p variants={itemVariants}>
            Founded by a team of innovators with deep expertise in fintech and
            enterprise software, we're driven by a passion to simplify and
            automate the intricate world of finance. From real-time transactions
            to regulatory compliance, our platform is designed to handle the
            critical challenges businesses face today and in the future.
          </motion.p>
          <motion.ul className="about-key-points" variants={containerVariants}>
            <motion.li variants={itemVariants}>
              <span className="icon">🚀</span> **Innovation:** Constantly pushing boundaries with cutting-edge technology.
            </motion.li>
            <motion.li variants={itemVariants}>
              <span className="icon">🔒</span> **Security:** Enterprise-grade protection for all your financial data.
            </motion.li>
            <motion.li variants={itemVariants}>
              <span className="icon">🤝</span> **Partnership:** Building strong relationships with our clients and community.
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="about-graphic"
          variants={graphicVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02, rotate: 2 }}
        >
          <FinancialFlowGraphic /> {/* Using the improved graphic component */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;