import React from 'react';
import { Link } from 'react-router-dom';
import './StickyCTA.css';

function StickyCTA() {
  return (
    <>
      <a
        className="whatsapp-fab"
        href="https://wa.me/27682512998"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        WhatsApp
      </a>
      <div className="sticky-cta-bar">
        <a href="tel:+27682512998" className="sticky-cta-btn secondary">Call Us</a>
        <Link to="/Contact" className="sticky-cta-btn">Get Free Consultation</Link>
      </div>
    </>
  );
}

export default StickyCTA;
