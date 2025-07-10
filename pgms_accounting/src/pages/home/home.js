import "./home.css"
import Header from '../header/header';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import  Navbar from '../Navbar/Navbar'

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
      <div className="intro-slide">
  <h1>Making Life Easier for Your Business</h1>
  <p>Partnering with you to simplify tax, accounting, and management — so you can focus on growth.</p>
</div>

<section className="services">
  <h2>What We Do</h2>
  <ul>
    <li>Tax Services: Strategic planning to reduce liabilities and keep you compliant.</li>
    <li><strong>Accounting:</strong> Accurate books, payroll, and financial reports that support growth.</li>
    <li><strong>Management Support:</strong> Cash flow management, budgeting, and forecasting tailored to you.</li>
  </ul>
</section>

<section className="why-us">
  <h2>Why Choose PGMS?</h2>
  <p>We’re not just accountants — we’re your long-term partners in success. Since 2006, PGMS has helped entrepreneurs thrive by offering:</p>
  <ul>
    <li>✅ Personalized service tailored to your business</li>
    <li>✅ Reliable, expert advice you can trust</li>
    <li>✅ A proactive approach that saves you time and money</li>
  </ul>
</section>

<section className="cta">
  <h2>Ready to Make Life Easier?</h2>
  <p>Let’s simplify your tax and accounting, so you can focus on growing your business.</p>
  <a href="contact.html" className="btn">Contact Us Today</a>
</section>

        </>
    )
}
export default Home;