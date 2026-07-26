import React from "react";
import NavBar from "../component/common/Navbar";
import CollaborationHero from "../component/collaboration/CollaborationHero";
import OutsourcingModels from "../component/collaboration/OutsourcingModels";
import CollaborationProcess from "../component/collaboration/CollaborationProcess";
import CollaborationCTA from "../component/collaboration/CollaborationCTA";
import Footer from "../component/common/Footer";

const Collaboration: React.FC = () => {
  return (
    <>
      <NavBar />
      <CollaborationHero />
      <OutsourcingModels />
      <CollaborationProcess />
      <CollaborationCTA />
      <Footer />
    </>
  );
};

export default Collaboration;
