import "./home.css"
import Header from '../header/header';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import  Navbar from '../Navbar/Navbar'

function Home(){
    return(
        <>
        <Header />
        <Navbar /> 
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
      <div className="body">
        
      </div>
        </>
    )
}
export default Home;