import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>PGMS Accountants</h3>
          <p>
            Boutique accounting and tax specialists helping businesses in George
            make better financial decisions with confidence.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Service">Services</Link>
            <Link to="/Contact">Contact</Link>
          </nav>
        </div>
        <div>
          <h4>Contact</h4>
          <p>112 York Street, George</p>
          <p>068 251 2998</p>
          <p>pgms@edenbiz.info</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PGMS Accountants. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
