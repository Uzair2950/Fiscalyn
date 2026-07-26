import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screen/Home";
import About from "./screen/About";
import Services from "./screen/Services";
import Pricing from "./screen/Pricing";
import Contact from "./screen/Contact";
import Collaboration from "./screen/Collaboration";
import Blog from "./screen/Blog";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
