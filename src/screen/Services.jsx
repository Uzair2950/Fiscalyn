import React from "react";
import NavBar from "../component/common/Navbar";
import ServicesHero from "../component/services/ServicesHero";
import ServiceDetail from "../component/services/ServiceDetail";
import ProcessSection from "../component/services/ProcessSection";
import ServicesCTA from "../component/services/ServicesCTA";
import Footer from "../component/common/Footer";

const Services = () => {
  return (
    <>
      <NavBar />
      <ServicesHero />
      <ServiceDetail />
      <ProcessSection />
      <ServicesCTA />
      <Footer />
    </>
  );
};

export default Services;