import React from "react";
import NavBar from "../component/common/Navbar";
import HeroSection from "../component/home/HeroSection";
import ServicesOverview from "../component/home/ServicesOverview";
import AssuranceScorecard from "../component/home/AssuranceScorecard";
import ToolsSlider from "../component/home/ToolsSlider";
import AboutSection from "../component/home/AboutSection";
import TestimonialsSection from "../component/home/TestimonialsSection";
import FAQSection from "../component/home/FAQSection";
import CTASection from "../component/home/CTASection";
import Footer from "../component/common/Footer";



const Home = () => {
  return (
      <>
      <NavBar />
      <HeroSection />
      <ServicesOverview />
      <AssuranceScorecard />
      <ToolsSlider />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>

  );
};

export default Home;
