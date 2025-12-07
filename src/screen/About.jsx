import React from "react";
import NavBar from "../component/common/Navbar";
import AboutHero from "../component/about/AboutHero";
import OurStory from "../component/about/OurStory";
import ValuesSection from "../component/about/ValuesSection";
import TeamSection from "../component/about/TeamSection";
import CareersPreview from "../component/about/CareersPreview";
import Footer from "../component/common/Footer";

const About = () => {
  return (
    <>
      <NavBar />
      <AboutHero />
      <OurStory />
      <ValuesSection />
      <TeamSection />
      <CareersPreview />
      <Footer />
    </>
  );
};

export default About;