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

        <img src="/budget_new .png" alt="Tax Services Icon" className="service-card-icon" />
        <h3>Tax Services</h3>
        <p>Strategic planning to reduce liabilities and keep you compliant.</p>
      </div>

      {/* Service Card 2: Accounting - NOW USING AN IMAGE */}
      <div className="service-card reveal">
        {/* Corrected path: Removed project folder and public folder from src */}
        <img src="/accounting.png" alt="Accounting Icon" className="service-card-icon" />
        <h3>Accounting</h3>
        <p>Accurate books, payroll, and financial reports that support growth.</p>
      </div>

      {/* Service Card 3: Management Support - NOW USING AN IMAGE */}
      <div className="service-card reveal">
        {/* Corrected path: Removed project folder and public folder from src */}
        <img src="/presentation.png" alt="Management Support Icon" className="service-card-icon" />
        <h3>Management Support</h3>
        <p>Cash flow management, budgeting, and forecasting tailored to you.</p>
      </div>
    </div>
  </div>
</section>


<section className="why-us reveal">
  <div className="container">
    <h2>Why Choose PGMS?</h2>
    <p>We’re not just accountants — we’re your long-term partners in success. Since 2006, PGMS has helped entrepreneurs thrive by offering:</p>
    <div className="benefits-grid">
      <div className="benefit-item reveal">
        <span className="benefit-icon" aria-hidden="true">🤝</span>
        <p><strong>Personalized service</strong> tailored to your business</p>
      </div>
      <div className="benefit-item reveal">
        <span className="benefit-icon" aria-hidden="true">🛡️</span>
        <p><strong>Reliable, expert advice</strong> you can trust</p>
      </div>
      <div className="benefit-item reveal">
        <span className="benefit-icon" aria-hidden="true">💡</span>
        <p><strong>A proactive approach</strong> that saves you time and money</p>
      </div>

    </div>

    <p>Imagine having a team of dedicated professionals by your side, navigating the intricate world of taxes. Our tax services go beyond mere compliance – we strategically plan and optimize your tax position to help you minimize liabilities and maximize savings. With us, tax season becomes an opportunity for growth rather than a burden.</p>
    <p>We are more than just number crunchers. Our accounting services offer a comprehensive suite of solutions to keep your financial operations in order. From precise bookkeeping and financial statement preparation to meticulous payroll processing and compliance, we ensure accuracy and timeliness in all aspects of your accounting needs. Let us transform your numbers into valuable insights that drive informed decision-making.</p>
    <p>Success requires effective management, and that's where our expertise truly shines. Our management support services empower you to take control of your financial future. With our assistance in budgeting, forecasting, and cash flow management, you'll gain the confidence to make informed choices that lead to sustainable growth.</p>
    <p>Together, we'll optimize your business processes and track key performance indicators, unlocking new levels of efficiency and profitability.</p>
    <p>What truly sets us apart is our commitment to your success. We are passionate about making a difference in your organization, and we serve you with unwavering dedication. Our personalized approach ensures that we truly understand your goals and challenges, enabling us to provide solutions that align with your vision.</p>
    <p>Join forces with PGMS Accountants and experience the power of collaboration and expertise. We are not just service providers – we become your trusted partners on your path to success. Let us simplify the complexities of tax, accounting, and management support, while you focus on driving your business to new heights.</p>
    <p>Contact us today and embark on a transformative journey towards financial excellence. Together, we'll make your business thrive in today's competitive landscape.</p>
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