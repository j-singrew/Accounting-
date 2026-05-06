import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import Navbar from '../Navbar/Navbar';
import './services.css';
import Footer from '../../components/Footer/Footer';

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
        <meta property="og:description" content="Detailed overview of tax, accounting, and management support services." />
        <meta property="og:image" content="https://yourdomain.com/images/pgms-services-preview.png" />
        <meta property="og:url" content="https://www.edenbiz.info/services" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="services-intro reveal">
        <div className="container">
          <h2>Our Services</h2>
          <p>Making life easier for you!</p>
          <p>At PGMS, we specialize in providing high-quality services in the following key areas:</p>
        </div>
      </section>

      <section className="service-details reveal">
        <div className="container">
          <div className="service-detail-grid">
    
            <div className="service-detail-card reveal">
              <span className="service-detail-icon" aria-hidden="true">📄</span>
              <h3>Tax Services</h3>
              <ul>
                <li>Tax planning and strategy</li>
                <li>Preparation and filing of tax returns</li>
                <li>Tax compliance and regulatory support</li>
                <li>Tax advisory and consultation</li>
                <li>Resolution of tax issues and disputes</li>
              </ul>
              <p>Our experienced tax professionals stay up-to-date with the latest tax regulations and developments to ensure accurate and efficient tax planning and compliance for your organization. We work closely with you to optimize your tax position and minimize any potential risks or liabilities.</p>
            </div>

            <div className="service-detail-card reveal">
              <span className="service-detail-icon" aria-hidden="true">🧮</span>
              <h3>Accounting Services</h3>
              <ul>
                <li>Financial statement preparation</li>
                <li>Bookkeeping and general ledger maintenance</li>
                <li>Accounts payable and receivable management</li>
                <li>Payroll processing and compliance</li>
                <li>Financial analysis and reporting</li>
              </ul>
              <p>Our dedicated accounting team takes care of your day-to-day financial operations, providing accurate and timely information to support your decision-making process. With our expertise in financial reporting and analysis, we help you gain valuable insights into your organization's financial health and performance.</p>
            </div>

       
            <div className="service-detail-card reveal">
              <span className="service-detail-icon" aria-hidden="true">📊</span>
              <h3>Management Support</h3>
              <ul>
                <li>Budgeting and forecasting</li>
                <li>Cash flow management</li>
                <li>Financial planning and analysis</li>
                <li>Key performance indicators (KPIs) tracking</li>
                <li>Business process improvement</li>
              </ul>
              <p>Our management support services assist you in effectively managing your organization's financial resources and optimizing its overall performance. We work closely with you to develop strategic plans, set achievable financial goals, and implement systems that enhance operational efficiency.</p>
            </div>
          </div>

          <p className="final-paragraph">At PGMS, we understand that every organization has unique requirements and challenges. Therefore, our services are tailored to meet your specific needs and goals. With our expertise in tax, accounting, and management support, we become your trusted partner in driving your organization's success.</p>
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
