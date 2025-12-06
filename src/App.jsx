import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screen/Home";
import About from "./screen/About";
import Services from "./screen/Services";
import Pricing from "./screen/Pricing";
import Contact from "./screen/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
