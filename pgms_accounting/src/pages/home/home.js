import "./home.css"
import Header from '../header/header';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import  Navbar from '../Navbar/Navbar'
import CountUp from 'react-countup';
import Footer from '../../components/Footer/Footer';


function Home(){
    return(
        <>
        <Navbar /> 
        <Header />

        <Helmet>
        <title>PGMS Accounting Services | Tax & Payroll in George</title>
        <meta
          name="description"
          content="Expert accounting, tax planning, and management support tailored for George, Western Cape businesses."
        />
        <meta property="og:title" content="PGMS Accounting Services | George" />
        <meta property="og:description" content="Expert tax planning and accounting support tailored for your business." />
        <meta property="og:image" content="https://yourdomain.com/images/pgms-preview.png" />
        <meta property="og:url" content="https://www.edenbiz.info/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="intro-slide container reveal">
  <h1>Making Life Easier for Your Business</h1>
  <p>Partnering with you to simplify tax, accounting, and management — so you can focus on growth.</p>
</div>

<section className="experience-section reveal">
  <div className="experience-content">
  <h2>17 Years of Trusted Accounting Expertise</h2>
  <p>
    For over 17 years, we have been helping businesses navigate their finances with accuracy, integrity, and personalized service.
    Our experienced team is committed to providing solutions tailored to your unique needs.
  </p>
  <div className="experience-stats">
    <div className="stat reveal">
      <span className="number">
        <CountUp end={17} duration={2} enableScrollSpy scrollSpyOnce />
      </span>
      <span className="label">Years of Experience</span>
    </div>
    <div className="stat reveal">
      <span className="number">
        <CountUp end={500} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
      </span>
      <span className="label">Satisfied Clients</span>
    </div>
    <div className="stat reveal">
      <span className="number">
        <CountUp end={1000} duration={3} suffix="+" enableScrollSpy scrollSpyOnce />
      </span>
      <span className="label">Tax Returns Filed</span>
    </div>
  </div>
</div>
</section>
<section className="services reveal">
  <div className="container">
    <h2>What We Do</h2>
    <div className="services-grid">
      {/* Service Card 1: Tax Services - NOW USING AN IMAGE */}
      <div className="service-card reveal">
        {/* Corrected path: Removed project folder and public folder from src */}

         <img src={process.env.PUBLIC_URL + "/budget_new .png"} alt="Tax Services Icon" className="service-card-icon" />
        <h3>Tax Services</h3>
        <p>Strategic planning to reduce liabilities and keep you compliant.</p>
      </div>

      {/* Service Card 2: Accounting - NOW USING AN IMAGE */}
      <div className="service-card reveal">
        {/* Corrected path: Removed project folder and public folder from src */}
        <img src={process.env.PUBLIC_URL + "/accounting.png"} alt="Accounting Icon" className="service-card-icon" />
        <h3>Accounting</h3>
        <p>Accurate books, payroll, and financial reports that support growth.</p>
      </div>

      {/* Service Card 3: Management Support - NOW USING AN IMAGE */}
      <div className="service-card reveal">
        {/* Corrected path: Removed project folder and public folder from src */}
        <img src={process.env.PUBLIC_URL + "/presentation.png"} alt="Management Support Icon" className="service-card-icon" />
        <h3>Management Support</h3>
        <p>Cash flow management, budgeting, and forecasting tailored to you.</p>
      </div>
    </div>
  </div>
</section>


<section className="why-us reveal">
  <div className="container">
    <h2>Why Choose PGMS?</h2>
    <p>Since 2006, PGMS has been a trusted partner for businesses in George, providing comprehensive accounting, tax, and management support services.</p>
    <div className="benefits-grid">
      <div className="benefit-item reveal">
        <span className="benefit-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M7 12.5 3.8 9.3a1.6 1.6 0 1 1 2.2-2.2L9.3 10.4a2.5 2.5 0 0 0 3.5 0l2.1-2.1a1.6 1.6 0 1 1 2.2 2.2l-3 3a5.6 5.6 0 0 1-7.9 0Z" />
            <path d="M5.5 14.2a2 2 0 0 1 2.8 0l1.3 1.3a2 2 0 1 1-2.8 2.8L5.5 17a2 2 0 0 1 0-2.8Zm8.2 0a2 2 0 0 1 2.8 0l1.3 1.3a2 2 0 1 1-2.8 2.8L13.7 17a2 2 0 0 1 0-2.8Z" />
          </svg>
        </span>
        <p><strong>Personalized service</strong> tailored to your business</p>
      </div>
      <div className="benefit-item reveal">
        <span className="benefit-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M12 2 4 5v6c0 5.6 3.8 9.8 8 11 4.2-1.2 8-5.4 8-11V5l-8-3Z" />
            <path d="m9.5 11.8 1.8 1.8 3.2-3.3" />
          </svg>
        </span>
        <p><strong>Reliable, expert advice</strong> you can trust</p>
      </div>
      <div className="benefit-item reveal">
        <span className="benefit-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M12 3a6.5 6.5 0 0 0-4.7 11 3.7 3.7 0 0 1 1.1 2.6h7.2a3.7 3.7 0 0 1 1.1-2.6A6.5 6.5 0 0 0 12 3Z" />
            <path d="M9.5 19h5M10 21h4" />
          </svg>
        </span>
        <p><strong>A proactive approach</strong> that saves you time and money</p>
      </div>

    </div>

    <p>Our tax services include strategic planning, compliance, and optimization to minimize liabilities and maximize savings. We transform tax season from a burden into an opportunity for growth.</p>
    <p>Beyond traditional accounting, we provide comprehensive financial solutions including precise bookkeeping, payroll processing, and financial analysis to support informed decision-making.</p>
    <p>Our management support encompasses budgeting, forecasting, and cash flow management, empowering you to achieve sustainable growth and operational efficiency.</p>
    <p>Choose PGMS for personalized service, expert advice, and a proactive approach that prioritizes your business success.</p>
  </div>
</section>

<section className="trust-strip reveal">
  <div className="container trust-strip-inner">
    <span>Registered Tax Practitioners</span>
    <span>17+ Years of Experience</span>
    <span>Tailored SME Advisory</span>
    <span>Local Team in George</span>
  </div>
</section>

<section className="cta reveal">
  <h2>Ready to Make Life Easier?</h2>
  <p>Let’s simplify your tax and accounting, so you can focus on growing your business.</p>
  <Link to="/Contact" className="btn">Contact Us Today</Link>
</section>

<section className="process-section reveal">
  <div className="container">
    <h2>How We Work With You</h2>
    <div className="process-grid">
      <article className="process-card reveal">
        <span className="process-step">01</span>
        <h3>Discovery Call</h3>
        <p>We map your challenges, timelines, and compliance priorities.</p>
      </article>
      <article className="process-card reveal">
        <span className="process-step">02</span>
        <h3>Custom Plan</h3>
        <p>We build a practical accounting and tax action plan for your business.</p>
      </article>
      <article className="process-card reveal">
        <span className="process-step">03</span>
        <h3>Execution & Support</h3>
        <p>Our team handles the detail while keeping you informed and in control.</p>
      </article>
    </div>
  </div>
</section>

<Footer />

        </>
    )
}
export default Home;