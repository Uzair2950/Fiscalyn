import { Suspense } from "react";
import { Route, Routes, StaticRouter } from "react-router";
import About from "./screen/About";
import Blog from "./screen/Blog";
import BlogDetail from "./screen/BlogDetail";
import Contact from "./screen/Contact";
import EditorialPolicy from "./screen/EditorialPolicy";
import ForBusinessesPage from "./screen/ForBusinessesPage";
import Home from "./screen/Home";
import Industries from "./screen/Industries";
import NotFound from "./screen/NotFound";
import Privacy from "./screen/Privacy";
import ServiceDetailPage from "./screen/ServiceDetailPage";
import Services from "./screen/Services";
import Sitemap from "./screen/Sitemap";
import Terms from "./screen/Terms";
import WorkloadOutsourcingPage from "./screen/WorkloadOutsourcingPage";

interface ServerAppProps {
  location: string;
}

const ServerApp = ({ location }: ServerAppProps) => (
  <StaticRouter location={location}>
    <Suspense fallback={null}>
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
  </StaticRouter>
);

export default ServerApp;
