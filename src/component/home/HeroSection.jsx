import React from "react";
import { motion } from "framer-motion";
import "../../css/home/hero.css";

const StripeInspiredDashboard = () => (
  <svg
    className="dashboard-svg"
    viewBox="0 0 800 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* --- DEFINITIONS: Gradient for Chart Area --- */}
    <defs>
      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="100%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#635BFF" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* --- DELAY BASELINE: 0.8s --- */}
    
    {/* Background card (White) */}
    <motion.rect
      x="50" y="50" width="700" height="400" rx="20" fill="#FFFFFF"
      stroke="#DCDCDC" /* Slightly softer border color */
      strokeWidth="1"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
    />

    {/* Header bar (Light Gray) */}
    <motion.rect
      x="70" y="70" width="660" height="40" rx="8" fill="#F7F7FA"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
    />
    {/* Traffic Lights - slightly more defined fill colors */}
    <motion.circle cx="95" cy="90" r="8" fill="#F44336" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} />
    <motion.circle cx="120" cy="90" r="8" fill="#FFC107" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
    <motion.circle cx="145" cy="90" r="8" fill="#4CAF50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} />

    {/* Left Sidebar (Light Gray) */}
    <motion.rect
      x="70" y="130" width="120" height="300" rx="8" fill="#F7F7FA"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
    />
    
    {/* Sidebar Menu Items */}
    <motion.rect x="85" y="150" width="90" height="15" rx="4" fill="#E0E0E0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />
    <motion.rect x="85" y="180" width="70" height="15" rx="4" fill="#E0E0E0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />
    
    {/* Currency Icon for 'Reports' section */}
    <motion.path 
        d="M90 220 L105 235 L90 250 L105 265 L90 280" 
        stroke="#635BFF" strokeWidth="2" fill="none" 
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} 
    />
    <motion.rect x="115" y="240" width="40" height="15" rx="4" fill="#635BFF" opacity="0.8" /* Increased Opacity */ initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} />
    
    <motion.rect x="85" y="290" width="80" height="15" rx="4" fill="#E0E0E0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} />


    {/* --- MAIN CONTENT: CHART AREA --- */}
    
    <motion.rect
      x="210" y="130" width="520" height="200" rx="8" fill="#F7F7FA"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.9 }}
    />
    
    {/* Y-Axis Markers (Context) */}
    <motion.text x="225" y="160" fontSize="12" fill="#909090" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}>$150k</motion.text>
    <motion.line x1="255" y1="160" x2="710" y2="160" stroke="#E5E5E5" strokeDasharray="3 3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }} />

    <motion.text x="225" y="230" fontSize="12" fill="#909090" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>$100k</motion.text>
    <motion.line x1="255" y1="230" x2="710" y2="230" stroke="#E5E5E5" strokeDasharray="3 3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} />

    <motion.text x="225" y="300" fontSize="12" fill="#909090" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}>$50k</motion.text>
    <motion.line x1="255" y1="300" x2="710" y2="300" stroke="#E5E5E5" strokeDasharray="3 3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }} />

    {/* --- ADDITION: Gradient Fill Area Animation --- */}
    <motion.path
        d="M260 300 C300 200, 340 250, 380 180 S460 220, 500 310 C540 240, 580 290, 620 200 S700 260, 740 200 L740 300 L260 300 Z"
        fill="url(#chartGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 2.4 }} 
    />

    {/* Chart Line Animation (Over the gradient) */}
    <motion.path
        d="M260 300 C300 200, 340 250, 380 180 S460 220, 500 310 C540 240, 580 290, 620 200 S700 260, 740 200"
        stroke="#635BFF" 
        strokeWidth="3" /* Slightly thinner line for elegance */
        fill="none"
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 2.4 }} 
    />
    
    {/* X-Axis Labels (Time periods) - Slightly darker fill */ }
    <motion.rect x="290" y="310" width="40" height="20" rx="4" fill="#D0D0D0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} />
    <motion.rect x="390" y="310" width="40" height="20" rx="4" fill="#D0D0D0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7 }} />
    <motion.rect x="490" y="310" width="40" height="20" rx="4" fill="#D0D0D0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }} />
    <motion.rect x="590" y="310" width="40" height="20" rx="4" fill="#D0D0D0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9 }} />
    <motion.rect x="690" y="310" width="40" height="20" rx="4" fill="#D0D0D0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }} />


    {/* --- FOOTER CARDS (Key Metrics) --- */}
    
    {/* Card 1: Revenue Metric */}
    <motion.rect
      x="210" y="350" width="250" height="80" rx="8" fill="#F7F7FA"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 2.2 }}
    />
    {/* Dollar Icon - Now aligned with primary color */}
    <motion.text x="230" y="390" fontSize="30" fill="#635BFF" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.1 }}>$</motion.text>
    <motion.rect x="260" y="370" width="120" height="15" rx="4" fill="#D0D0D0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }} />
    <motion.rect x="260" y="400" width="80" height="15" rx="4" fill="#4CAF50" /* Clearer Green */ opacity="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.3 }} />


    {/* Card 2: Expense Metric */}
    <motion.rect
      x="480" y="350" width="250" height="80" rx="8" fill="#F7F7FA"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 2.3 }}
    />
     {/* Bank/Building Icon - Now aligned with danger color */}
     <motion.rect x="500" y="375" width="20" height="15" rx="2" fill="#F44336" opacity="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4 }} />
     <motion.rect x="500" y="395" width="20" height="5" rx="1" fill="#F44336" opacity="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} />

    <motion.rect x="530" y="370" width="120" height="15" rx="4" fill="#D0D0D0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.6 }} />
    <motion.rect x="530" y="400" width="80" height="15" rx="4" fill="#F44336" opacity="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.7 }} />

  </svg>
);

const HeroSection = () => {
  // Define motion variants for cleaner code and sequencing
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="hero-container">
      <div className="background-grid" /> {/* Subtle background pattern */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          The Infrastructure for Modern{" "}
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
        </motion.h1>

        <motion.p variants={itemVariants}>
          Empower your business with programmable money and next-generation
          financial services. From compliance to complex tax logic, we handle the
          hard stuff.
        </motion.p>

        <motion.div className="cta-buttons" variants={itemVariants}>
          <motion.button whileHover={{ scale: 1.03 }} className="primary-btn">
            Start Building
          </motion.button>
          <motion.button whileHover={{ scale: 1.03 }} className="secondary-btn">
            Contact Sales
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="hero-graphic" aria-hidden>
        <motion.div
          className="graphic-wrapper"
          initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          whileHover={{ rotate: 1, scale: 1.01 }}
        >
          <StripeInspiredDashboard /> {/* Using the new dashboard component */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;