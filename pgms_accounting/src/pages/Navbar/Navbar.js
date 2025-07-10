import React from 'react';
import './Navbar.css';



function Navbar() {
  return (
    <div className="navbar-container"> 
      <img src="/pgms.png" alt="PGMS Accounting Services Logo" className="logo" />
      <h1>PGMS Accountants</h1>
      <nav className="navbar">
        <a href="/" className="nav-link">Home</a>
        <a href="/About" className="nav-link">About us</a>
        <a href="/Service" className="nav-link">Services</a>
        <a href="/Contact" className="nav-link">Contact</a>
      </nav>
    </div>
  );
}

export default Navbar;
