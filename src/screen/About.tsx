import React from "react";
import NavBar from "../component/common/Navbar";
import AboutHero from "../component/about/AboutHero";
import ValuesSection from "../component/about/ValuesSection";
import TeamSection from "../component/about/TeamSection";
import Footer from "../component/common/Footer";

const About: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <AboutHero />
        {/* <OurStory /> */}
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
