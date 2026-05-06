import React from 'react';
import { Link } from 'react-router-dom';
import './StickyCTA.css';

function StickyCTA() {
  return (
    <div className="sticky-cta-bar">
      <a
        href="https://wa.me/27682512998"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-cta-btn whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <span aria-hidden="true">💬</span>
        <span>WhatsApp</span>
      </a>
      <a href="tel:+27682512998" className="sticky-cta-btn secondary">
        <span aria-hidden="true">📞</span>
        <span>Call</span>
      </a>
      <Link to="/Contact" className="sticky-cta-btn">
        <span aria-hidden="true">✉️</span>
        <span>Consultation</span>
      </Link>
    </div>
  );
}

export default StickyCTA;
