import React, { useState } from "react";
import NavBar from "../component/common/Navbar";
import PricingHero from "../component/pricing/PricingHero";
import PricingCards from "../component/pricing/PricingCards";
import PricingComparison from "../component/pricing/PricingComparison";
import PricingFAQ from "../component/pricing/PricingFAQ";
import CTASection from "../component/home/CTASection";
import Footer from "../component/common/Footer";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <NavBar />
      <PricingHero isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <PricingCards isAnnual={isAnnual} />
      <PricingComparison />
      <PricingFAQ />
      <CTASection />
      <Footer />
    </>
  );
};

export default Pricing;