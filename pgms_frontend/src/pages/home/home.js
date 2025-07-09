import "./home.css"
import React from 'react';
import { Helmet } from 'react-helmet-async';

function Home(){
    return(
        <>
        <Helmet>
        <title>PGMS Accounting Services | Tax & Payroll in George</title>
        <meta
          name="description"
          content="Expert accounting, tax planning, and management support tailored for George, Western Cape businesses."
        />
      </Helmet>
        <div className="Header">
            <h1>Header</h1>
        </div>
        </>
    )
}
export default Home;