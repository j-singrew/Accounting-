import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Navbar from "../Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./services.css";

// Lucide Icons
import { FileText, Calculator, BarChart3 } from "lucide-react";

function Services() {
  return (
    <>
      <Navbar />
      <Header />

      <Helmet>
        <title>Our Services | PGMS Accounting Services</title>
        <meta
          name="description"
          content="Explore the comprehensive tax, accounting, and management support services offered by PGMS Accountants."
        />
        <meta property="og:title" content="Our Services | PGMS Accounting Services" />
        <meta
          property="og:description"
          content="Detailed overview of tax, accounting, and management support services."
        />
        <meta property="og:image" content="https://yourdomain.com/images/pgms-services-preview.png" />
        <meta property="og:url" content="https://www.edenbiz.info/services" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="services-intro reveal">
        <div className="container">
          <h2>Our Services</h2>
          <p>Making life easier for you!</p>
          <p>
            At PGMS, we provide comprehensive accounting, tax, and management support services tailored to your business needs.
          </p>
        </div>
      </section>

      <section className="service-details reveal">
        <div className="container">
          <div className="service-detail-grid">

            {/* TAX */}
            <div className="service-detail-card reveal">
              <span className="service-detail-icon">
                <FileText size={26} />
              </span>

              <h3>Tax Services</h3>
              <ul>
                <li>Tax planning and strategy</li>
                <li>Preparation and filing of tax returns</li>
                <li>Tax compliance and regulatory support</li>
                <li>Tax advisory and consultation</li>
                <li>Resolution of tax issues and disputes</li>
              </ul>
              <p>
                Our tax professionals ensure compliance while optimizing your tax position and reducing liabilities.
              </p>
            </div>

            {/* ACCOUNTING */}
            <div className="service-detail-card reveal">
              <span className="service-detail-icon">
                <Calculator size={26} />
              </span>

              <h3>Accounting Services</h3>
              <ul>
                <li>Financial statement preparation</li>
                <li>Bookkeeping and ledger maintenance</li>
                <li>Accounts payable & receivable</li>
                <li>Payroll processing</li>
                <li>Financial reporting</li>
              </ul>
              <p>
                We manage your financial operations with accuracy, giving you clear insights for decision-making.
              </p>
            </div>

            {/* MANAGEMENT */}
            <div className="service-detail-card reveal">
              <span className="service-detail-icon">
                <BarChart3 size={26} />
              </span>

              <h3>Management Support</h3>
              <ul>
                <li>Budgeting and forecasting</li>
                <li>Cash flow management</li>
                <li>Financial planning</li>
                <li>KPI tracking</li>
                <li>Business improvement strategies</li>
              </ul>
              <p>
                Strategic support to improve performance, efficiency, and long-term financial growth.
              </p>
            </div>

          </div>

          <p className="final-paragraph">
            Every organization is unique. Our tailored services make us your trusted partner for business success.
          </p>
        </div>
      </section>

      <section className="cta reveal">
        <div className="container">
          <h2>Ready to Make Life Easier?</h2>
          <p>Let’s simplify your tax and accounting, so you can focus on growing your business.</p>
          <Link to="/Contact" className="btn">Contact Us Today</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;