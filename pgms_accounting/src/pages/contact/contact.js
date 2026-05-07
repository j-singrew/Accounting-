import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Header from "../header/header";
import Navbar from "../Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./contact.css";

// Lucide Icons
import { MapPin, Clock, Phone } from "lucide-react";

function Contact() {
  const [formStatus, setFormStatus] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Submitted:", data);

    setFormStatus(
      "Thanks, your message has been captured. We will contact you soon."
    );

    event.target.reset();
  };

  return (
    <>
      <Navbar />
      <Header />

      <Helmet>
        <title>Contact Us | PGMS Accounting Services</title>
        <meta
          name="description"
          content="Get in touch with PGMS Accounting Services for expert tax, accounting, and management support in George, Western Cape."
        />
        <meta property="og:title" content="Contact PGMS Accounting Services" />
        <meta
          property="og:description"
          content="Find our address, office hours, and contact number."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/pgms-contact-preview.png"
        />
        <meta property="og:url" content="https://www.edenbiz.info/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* CONTACT SECTION */}
      <section className="contact-section reveal">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>
            Speak to our team about tax, accounting, payroll, and business
            support tailored to your needs.
          </p>

          <div className="contact-card-main">

            {/* ADDRESS */}
            <div className="contact-item reveal">
              <span className="contact-icon">
                <MapPin size={26} />
              </span>
              <h3>Address</h3>
              <p>28 Harry Mann Square, 112 York St, George, 6530</p>
              <div className="contact-highlight">
                <span>Located in the heart of George</span>
              </div>
            </div>

            {/* HOURS */}
            <div className="contact-item reveal">
              <span className="contact-icon">
                <Clock size={26} />
              </span>
              <h3>Hours</h3>
              <ul>
                <li>Mon - Thu: 08h30 - 17h00</li>
                <li>Fri: 08h30 - 13h00</li>
                <li>Closed weekends & public holidays</li>
              </ul>
              <div className="contact-highlight">
                <span>Flexible scheduling available</span>
              </div>
            </div>

            {/* OFFICE */}
            <div className="contact-item reveal">
              <span className="contact-icon">
                <Phone size={26} />
              </span>
              <h3>Office</h3>
              <p>068 251 2998</p>
              <div className="contact-highlight">
                <span>Direct line to our experts</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM SECTION (unchanged) */}
      <section className="team-section reveal">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p>
            Our experienced professionals are here to provide personalized
            accounting and tax solutions.
          </p>

          <div className="team-grid">

            <div className="person-card reveal">
              <img src={process.env.PUBLIC_URL + "/Malny_burrows.png"} alt="Melanie Burrows" className="person-image" />
              <h3>Melanie Burrows</h3>
              <p className="title">Managing Member</p>
              <p className="contact-detail"><strong>Contact:</strong> 081 561 0508</p>
              <p className="contact-detail"><strong>Email:</strong> pgms@edenbiz.info</p>
              <p className="contact-detail"><strong>Address:</strong> 112 York Street, George</p>
              <div className="contact-highlight">
                <span>17+ Years Experience</span>
              </div>
            </div>

            <div className="person-card reveal">
              <img src={process.env.PUBLIC_URL + "/theo_burrows.png"} alt="Theo Burrows" className="person-image" />
              <h3>Theo Burrows</h3>
              <p className="title">Tax Practitioner</p>
              <p className="contact-detail"><strong>Contact:</strong> 067 900 5232</p>
              <p className="contact-detail"><strong>Email:</strong> admin@edenbiz.info</p>
              <p className="contact-detail"><strong>Address:</strong> 112 York Street, George</p>
              <div className="contact-highlight">
                <span>Tax Specialist</span>
              </div>
            </div>

            <div className="person-card reveal">
              
              <img src={process.env.PUBLIC_URL + "/images/theo.png"} alt="Florence De Abreu" className="person-image" />
              <h3>Florence De Abreu</h3>
              <p className="title">Administrator</p>
              <p className="contact-detail"><strong>Contact:</strong> 068 251 2998</p>
              <p className="contact-detail"><strong>Email:</strong> reception@edenbiz.info</p>
              <p className="contact-detail"><strong>Address:</strong> 112 York Street, George</p>
              <div className="contact-highlight">
                <span>Client Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <div className="container">
          <h2>Prefer a direct call?</h2>
          <p>Reach us during office hours for immediate assistance.</p>
          <Link to="/Service" className="btn">
            View Services
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;