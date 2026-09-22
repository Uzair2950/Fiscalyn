import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../component/common/Breadcrumbs";
import Footer from "../component/common/Footer";
import NavBar from "../component/common/Navbar";
import ServicesOverview from "../component/home/ServicesOverview";
import "../css/services/service-page.css";

const Services: React.FC = () => {
  return (
    <div className="services-hub-page">
      <NavBar />
      <main>
        <header className="services-hub-hero">
          <div className="services-hub-container">
            <Breadcrumbs items={[{ label: "Services" }]} />
            <p className="service-section-badge">Accounting support that scales</p>
            <h1>Accounting, Tax and Finance Services</h1>
            <p>
              Choose focused support for day-to-day finance operations, statutory
              compliance, team administration and strategic decision-making.
            </p>
            <Link to="/contact" className="service-primary-btn">
              Discuss your requirements <ArrowRight size={18} />
            </Link>
          </div>
        </header>
        <ServicesOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
