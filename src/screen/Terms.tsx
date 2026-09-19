import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import "../css/legal/legal.css";

const Terms: React.FC = () => (
  <>
    <NavBar />
    <main className="legal-page">
      <article className="legal-container">
        <header className="legal-header">
          <p className="legal-eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p>Last updated: 19 September 2026</p>
        </header>

        <section>
          <h2>Website terms</h2>
          <p>
            These terms govern your use of the 47 Accountants website. By using
            the website, you agree to these terms. If you do not agree, please do
            not use the website.
          </p>
        </section>

        <section>
          <h2>Information is not professional advice</h2>
          <p>
            Website content is general information and does not constitute
            accounting, tax, legal, investment or other professional advice.
            Rules vary by jurisdiction and individual circumstances. Do not act
            or refrain from acting solely on website content; obtain advice based
            on your facts and current law.
          </p>
        </section>

        <section>
          <h2>No client relationship through the website</h2>
          <p>
            Sending a form, booking a meeting or receiving an initial response
            does not create an accountant-client relationship. Services begin
            only after required checks are completed and both parties accept a
            written engagement letter or other service agreement. That agreement
            will control if it conflicts with these website terms.
          </p>
        </section>

        <section>
          <h2>Acceptable use</h2>
          <p>You must not misuse the website, including by:</p>
          <ul>
            <li>Submitting unlawful, deceptive, abusive or malicious content.</li>
            <li>Attempting unauthorised access or interfering with availability.</li>
            <li>Using automated systems to spam forms or burden the service.</li>
            <li>Copying or exploiting protected content beyond what law permits.</li>
          </ul>
        </section>

        <section>
          <h2>Accuracy, availability and third parties</h2>
          <p>
            We aim to keep the website accurate and available but do not guarantee
            that all content is complete, current or error-free. Tax and regulatory
            information can change quickly. Third-party links and services,
            including Calendly and Web3Forms, are operated by their respective providers.
          </p>
        </section>

        <section>
          <h2>Intellectual property</h2>
          <p>
            Unless otherwise stated, website text, design, branding and original
            materials belong to 47 Accountants Ltd or its licensors. You may use
            the website for lawful personal or internal business purposes but may
            not republish substantial content without permission.
          </p>
        </section>

        <section>
          <h2>Liability</h2>
          <p>
            To the fullest extent permitted by law, we are not liable for losses
            arising from reliance on general website information, website
            unavailability, or third-party services. Nothing in these terms
            excludes liability that cannot lawfully be excluded.
          </p>
        </section>

        <section>
          <h2>Changes, governing law and contact</h2>
          <p>
            We may update these terms by publishing a revised version here. These
            terms are governed by the laws of England and Wales, subject to any
            mandatory rights that apply where you live. Questions can be sent to
            <a href="mailto:info@47accountants.com"> info@47accountants.com</a>.
            Our handling of personal information is described in the{" "}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </section>
      </article>
    </main>
    <Footer />
  </>
);

export default Terms;
