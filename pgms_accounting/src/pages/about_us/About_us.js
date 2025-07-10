import Header from '../header/header';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import  Navbar from '../Navbar/Navbar'

function Aboutus(){
    return(

        <>
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

        <Header></Header>
          <Navbar></Navbar>
        <p>hello</p>
          <h2>Why Choose PGMS?</h2>
  <p>We're not just accountants — we're your long-term partners in success. Since 2006, PGMS has helped entrepreneurs thrive by offering:</p>
  
  <ul>
    <li>✅ Personalized service tailored to your business</li>
    <li>✅ Reliable, expert advice you can trust</li>
    <li>✅ A proactive approach that saves you time and money</li>
  </ul>
        </>
    )
    
}

export default Aboutus;