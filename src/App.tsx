import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeoManager from "./component/common/SeoManager";

const Home = lazy(() => import("./screen/Home"));
const About = lazy(() => import("./screen/About"));
const Services = lazy(() => import("./screen/Services"));
const ServiceDetailPage = lazy(() => import("./screen/ServiceDetailPage"));
const Industries = lazy(() => import("./screen/Industries"));
const ForBusinessesPage = lazy(() => import("./screen/ForBusinessesPage"));
const WorkloadOutsourcingPage = lazy(() => import("./screen/WorkloadOutsourcingPage"));
const Contact = lazy(() => import("./screen/Contact"));
const Blog = lazy(() => import("./screen/Blog"));
const BlogDetail = lazy(() => import("./screen/BlogDetail"));
const Privacy = lazy(() => import("./screen/Privacy"));
const Terms = lazy(() => import("./screen/Terms"));
const EditorialPolicy = lazy(() => import("./screen/EditorialPolicy"));
const Sitemap = lazy(() => import("./screen/Sitemap"));
const NotFound = lazy(() => import("./screen/NotFound"));

const routeFallback = (
  <div
    role="status"
    aria-live="polite"
    style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "var(--bg-main)",
      color: "var(--text-secondary)",
    }}
  >
    Loading page…
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <SeoManager />
      <Suspense fallback={routeFallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/solutions/for-businesses" element={<ForBusinessesPage />} />
          <Route path="/solutions/outsource-workload" element={<WorkloadOutsourcingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
