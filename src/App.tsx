import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./screen/Home";
import About from "./screen/About";
import ServiceDetailPage from "./screen/ServiceDetailPage";
import Industries from "./screen/Industries";
import ForBusinessesPage from "./screen/ForBusinessesPage";
import WorkloadOutsourcingPage from "./screen/WorkloadOutsourcingPage";
import Pricing from "./screen/Pricing";
import Contact from "./screen/Contact";
import Collaboration from "./screen/Collaboration";
import Blog from "./screen/Blog";
import BlogDetail from "./screen/BlogDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Navigate to="/services/bookkeeping" replace />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/solutions/for-businesses" element={<ForBusinessesPage />} />
        <Route path="/solutions/outsource-workload" element={<WorkloadOutsourcingPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
