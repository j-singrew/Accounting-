import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail } from "lucide-react";
import "./StickyCTA.css";

function StickyCTA() {
  return (
    <div className="sticky-cta-bar" role="navigation" aria-label="Quick contact actions">

      {/* WhatsApp */}
      <a
        href="https://wa.me/27682512998"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-cta-btn whatsapp"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>

      {/* Call */}
      <a href="tel:+27682512998" className="sticky-cta-btn secondary">
        <Phone size={18} />
        <span>Call</span>
      </a>

      {/* Email / Consultation */}
      <Link to="/contact" className="sticky-cta-btn">
        <Mail size={18} />
        <span>Consultation</span>
      </Link>

    </div>
  );
}

export default StickyCTA;