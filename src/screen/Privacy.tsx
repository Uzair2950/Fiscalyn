import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import "../css/legal/legal.css";

const Privacy: React.FC = () => (
  <>
    <NavBar />
    <main className="legal-page">
      <article className="legal-container">
        <header className="legal-header">
          <p className="legal-eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>Last updated: 19 September 2026</p>
        </header>

        <section>
          <h2>Who controls your information</h2>
          <p>
            47 Accountants Ltd is responsible for the personal information
            collected through this website. Questions and privacy requests can
            be sent to <a href="mailto:info@47accountants.com">info@47accountants.com</a>.
          </p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p>
            We collect information you submit through our enquiry, consultation,
            collaboration and newsletter forms. This may include your name,
            business name, email address, telephone number, service interests and
            message. If you choose to load or use Calendly, Calendly separately
            receives the scheduling information you provide and technical data
            associated with the embedded service.
          </p>
          <p>
            Our hosting, security and content-delivery providers may also process
            technical information such as IP address, browser type, device type,
            requested URL and timestamps to deliver and protect the website.
          </p>
        </section>

        <section>
          <h2>Why we use your information</h2>
          <ul>
            <li>To respond to enquiries and arrange consultations.</li>
            <li>To assess and prepare requested service or collaboration proposals.</li>
            <li>To process newsletter subscription requests and related preferences.</li>
            <li>To operate, secure and improve the website.</li>
            <li>To meet legal, regulatory and professional obligations.</li>
          </ul>
          <p>
            Depending on the interaction, we rely on your consent, steps taken at
            your request before entering a contract, our legitimate interests in
            operating and protecting the business, or compliance with legal obligations.
          </p>
        </section>

        <section>
          <h2>Service providers and international transfers</h2>
          <p>
            Website forms are processed by Web3Forms and forwarded to our email.
            Web3Forms states that its servers are in the United States. Scheduling
            is provided by Calendly only after you choose to load the embedded
            scheduler. Those providers process information under their own terms
            and privacy documentation. We may also use hosting, email and security
            providers that process information on our behalf.
          </p>
          <p>
            Where information is processed outside your country, we use provider
            contractual commitments and other lawful safeguards where required.
          </p>
        </section>

        <section>
          <h2>Retention and security</h2>
          <p>
            We keep personal information only as long as needed for the purpose
            collected, an ensuing client relationship, dispute management and
            applicable legal or professional recordkeeping requirements. We apply
            reasonable organisational and technical safeguards, but no internet
            transmission can be guaranteed completely secure.
          </p>
        </section>

        <section>
          <h2>Your choices and rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct,
            delete, restrict or object to processing, withdraw consent, or receive
            a portable copy of your information. You may also complain to your
            local data-protection authority. Contact us using the email above to
            exercise a right. We may need to verify your identity first.
          </p>
          <p>
            You can avoid loading Calendly and instead contact us by email or
            telephone. You can also ask us to stop newsletter communications at any time.
          </p>
        </section>

        <section>
          <h2>Updates and contact</h2>
          <p>
            We may update this policy when our services or legal obligations
            change. The current version and effective date will remain on this page.
            For general website terms, see our <Link to="/terms">Terms of Service</Link>.
          </p>
        </section>
      </article>
    </main>
    <Footer />
  </>
);

export default Privacy;
