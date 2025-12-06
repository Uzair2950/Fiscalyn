import React from 'react';
import { motion } from 'framer-motion';
import '../../css/home/tools-slider.css';
import tool1 from '../../assets/image/xeroTool1.webp'

const toolsLogos = [
    { id: 1, name: "Xero", src: tool1 }, // Placeholder, will be generated
    { id: 2, name: "QuickBooks", src: tool1 }, // Placeholder
    { id: 3, name: "FreeAgent", src: tool1 }, // Placeholder
    { id: 4, name: "Sage", src: tool1 }, // Placeholder
    { id: 5, name: "Capium", src:tool1 }, // Placeholder
    { id: 6, name: "Dext Prepare", src: tool1 }, // Placeholder
    { id: 7, name: "Receipt Bank", src: tool1 }, // Placeholder
    { id: 8, name: "GoCardless", src:tool1}, // Placeholder
    { id: 9, name: "Stripe", src:tool1}, // Placeholder
    { id: 10, name: "Pleo", src: tool1 }, // Placeholder
];

const ToolsSlider = () => {
    // Duplicate logos to create a seamless infinite scroll effect
    const duplicatedLogos = [...toolsLogos, ...toolsLogos];

    const sliderVariants = {
        animate: {
            x: ['0%', '-100%'], // Move from 0% to -100% of the content width
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40, // Adjust speed here
                    ease: "linear",
                },
            },
        },
    };

    return (
        <section className="tools-slider-section">
            <div className="tools-slider-wrapper">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    Seamlessly Integrated with UK's Leading Digital Tools
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="tools-slider-intro"
                >
                    We leverage cutting-edge cloud software to automate processes, ensure accuracy, and keep your business MTD-compliant.
                </motion.p>

                <div className="slider-container">
                    <motion.div
                        className="logo-slider"
                        variants={sliderVariants}
                        animate="animate"
                    >
                        {duplicatedLogos.map((tool, index) => (
                            <div key={`${tool.id}-${index}`} className="logo-item">
                                <img src={`${tool.src}`} alt={tool.name} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ToolsSlider;