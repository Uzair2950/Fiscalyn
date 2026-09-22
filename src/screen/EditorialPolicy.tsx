import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../component/common/Breadcrumbs";
import Footer from "../component/common/Footer";
import NavBar from "../component/common/Navbar";
import "../css/legal/legal.css";

const EditorialPolicy: React.FC = () => (
  <>
    <NavBar />
    <main className="legal-page">
      <article className="legal-container">
        <Breadcrumbs items={[{ label: "Editorial Policy" }]} />
        <header className="legal-header">
          <p className="legal-eyebrow">Publishing standards</p>
          <h1>Editorial Policy</h1>
          <p>Last updated: 19 September 2026</p>
        </header>

        <section>
          <h2>Purpose and scope</h2>
          <p>
            Our articles explain accounting, tax, compliance and business-finance
            topics for general information. They are not a substitute for advice
            based on a reader&apos;s circumstances, jurisdiction and current law.
          </p>
        </section>

        <section>
          <h2>Authorship and subject responsibility</h2>
          <p>
            Each article identifies its responsible author. Author information is
            linked to our <Link to="/about">team page</Link>. Where specialist
            review is required, the reviewer and review date will be shown on the
            article rather than implied through generic website language.
          </p>
        </section>

        <section>
          <h2>Sources, jurisdictions and dates</h2>
          <p>
            Regulatory articles should identify the relevant jurisdiction and
            effective period, distinguish rules from commentary, and link to
            primary sources where available. Publication and material update dates
            are displayed so readers can assess currency.
          </p>
        </section>

        <section>
          <h2>Updates and corrections</h2>
          <p>
            Material corrections are made directly in the article and its modified
            date is updated. Questions or correction requests can be sent to
            <a href="mailto:info@47accountants.com"> info@47accountants.com</a>.
          </p>
        </section>

        <section>
          <h2>Commercial independence</h2>
          <p>
            Service descriptions may explain how 47 Accountants can help, but
            editorial content should not conceal advertising or present a sales
            opinion as an independent regulatory conclusion.
          </p>
        </section>
      </article>
    </main>
    <Footer />
  </>
);

export default EditorialPolicy;
