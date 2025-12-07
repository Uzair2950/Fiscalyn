import React from "react";
import NavBar from "../component/common/Navbar";
import ContactHero from "../component/contact/ContactHero";
import ContactFormSection from "../component/contact/ContactFormSection";
import Footer from "../component/common/Footer";

const Contact = () => {
  return (
    <>
      <NavBar />
      <ContactHero />
      <ContactFormSection />
      <Footer />
    </>
  );
};

export default Contact;