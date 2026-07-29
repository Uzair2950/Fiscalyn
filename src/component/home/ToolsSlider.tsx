import React from "react";
import { motion } from "framer-motion";
import "../../css/home/tools-slider.css";

import xeroLogo from "../../assets/image/toolsSlider/xero_logo.webp";
import sageLogo from "../../assets/image/toolsSlider/sage_logo.webp";
import paypalLogo from "../../assets/image/toolsSlider/paypal_logo.webp";
import squareLogo from "../../assets/image/toolsSlider/square_logo.webp";
import freeAgentLogo from "../../assets/image/toolsSlider/freeagent_logo.webp";
import hubSpotLogo from "../../assets/image/toolsSlider/hubstop_logo.webp";

interface Tool {
  id: number;
  name: string;
  logo: string;
}

const ToolsSlider: React.FC = () => {
  const tools: Tool[] = [
    {
      id: 1,
      name: "Xero",
      logo: xeroLogo,
    },
    {
      id: 2,
      name: "QuickBooks",
      logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg",
    },
    {
      id: 3,
      name: "Stripe",
      logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    },
    {
      id: 4,
      name: "Sage",
      logo: sageLogo,
    },
    {
      id: 5,
      name: "PayPal",
      logo: paypalLogo,
    },
    {
      id: 6,
      name: "Square",
      logo: squareLogo,
    },
    {
      id: 7,
      name: "FreeAgent",
      logo: freeAgentLogo,
    },
    {
      id: 8,
      name: "Shopify",
      logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    },
    {
      id: 9,
      name: "HubSpot",
      logo: hubSpotLogo,
    },
    {
      id: 10,
      name: "Salesforce",
      logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
    },
  ];

  // Triple the array for seamless infinite loop
  const duplicatedTools: Tool[] = [...tools, ...tools, ...tools];

  return (
    <section className="tools-slider-section">
      <div className="tools-slider-wrapper">
        <motion.div
          className="tools-slider-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            We Work With All Major
            <span className="tools-gradient-text"> Accounting Platforms & Software</span>
          </h2>
          <p className="tools-intro">
            Our qualified accountants seamlessly manage your finances across industry-leading global accounting software, payment systems, and financial platforms.
          </p>
        </motion.div>

        <div className="slider-track-container">
          <motion.div
            className="slider-track"
            animate={{
              x: [0, -100 / 3 + "%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <div key={`${tool.id}-${index}`} className="tool-logo-item">
                <div className="tool-logo-wrapper">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `<div class="logo-fallback">${tool.name}</div>`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="tools-cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="tools-cta-text">
            <strong>Supported across 100+ global financial systems</strong>. Using custom software?{" "}
            <span
              className="tools-cta-link"
              onClick={() => (window.location.href = "/contact")}
            >
              Ask our accounting team →
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSlider;
