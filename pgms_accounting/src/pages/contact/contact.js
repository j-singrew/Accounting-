import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../header/header';
import Navbar from '../Navbar/Navbar';
import './contact.css';


function Contact() {
    const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submission is not yet implemented. Check console for details.');
    // In a real application, you'd send this data to a server
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Submitted:', data);
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
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
        <meta property="og:description" content="Find our address, office hours, and contact number." />
        <meta property="og:image" content="https://yourdomain.com/images/pgms-contact-preview.png" />
        <meta property="og:url" content="https://www.edenbiz.info/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="contact-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>You will find the latest information about our company here...</p>

          {/* This div will now be the single card containing all contact info */}
          <div className="contact-card-main">
            <div className="contact-item">
              <i className="contact-icon fas fa-map-marker-alt"></i>
              <h3>Address</h3>
              <p>28 Harry Mann Square, 112 York St, George, 6530</p>
            </div>

            <div className="contact-item">
              <i className="contact-icon fas fa-clock"></i>
              <h3>Hours</h3>
              <ul>
                <li>Open 8h30 - 17h00 Monday - Thursday</li>
                <li>Open 8h30 - 13h00 - Friday</li>
                <li>Closed Weekends and Public Holidays</li>
              </ul>
            </div>

            <div className="contact-item">
              <i className="contact-icon fas fa-phone-alt"></i>
              <h3>Office</h3>
              <p>068 251 2998</p>
            </div>
          </div>
        </div>
      </section>

<section className="team-section">
        <div className="container">
  <h2>Meet Our Team</h2>
<div className="team-grid">
  {/* Melanie Burrows Card */}
  <div className="person-card">
    <img src="/Malny_burrows.png" alt="Melanie Burrows" className="person-image" />
    <h3>Melanie Burrows</h3>
    <p className="title">Managing Member</p>
    <p className="contact-detail"><strong>Contact:</strong> 081 561 0508</p>
    <p className="contact-detail"><strong>Email:</strong> pgms@edenbiz.info</p>
    <p className="contact-detail"><strong>Address:</strong> 112 York Street, George, 6530</p>
  </div>
              <div className="person-card">
            <img src="/theo_burrows.png" alt="Florence De Abreu" className="person-image" />
              <h3>Theo Burrows</h3>
              <p className="title">Tax Practitioner</p>
              <p className="contact-detail"><strong>Contact:</strong> 067 900 5232</p>
              <p className="contact-detail"><strong>Email:</strong> admin@edenbiz.info</p>
              <p className="contact-detail"><strong>Address:</strong> 112 York Street, George, 6530</p>
            </div> 

  {/* Florence De Abreu Card */}
  <div className="person-card">
    <img src="/images/theo.png" alt="Theo Burrows" className="person-image" /> {/* Placeholder image */}
    <h3>Florence De Abreu</h3>
    <p className="title">Administrator</p>
    <p className="contact-detail"><strong>Contact:</strong> 068 251 2998</p>
    <p className="contact-detail"><strong>Email:</strong> reception@edenbiz.info</p>
    <p className="contact-detail"><strong>Address:</strong> 112 York Street, George, 6530</p>
  </div>

            {/* Theo Burrows Card */}
          </div>
        </div>
      </section>

       <section className="contact-form-section">
        <div className="container">
          <h2>Send Us a Message</h2>
          <p>Have a question or need assistance? Fill out the form below and we'll get back to you shortly.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row"> {/* New: Container for side-by-side inputs */}
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="john.doe@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label> {/* New: Subject field */}
              <input type="text" id="subject" name="subject" placeholder="Inquiry about Tax Services" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="6" placeholder="Type your message here..." required></textarea>
            </div>
            <button type="submit" className="btn submit-btn">Send Message</button>
          </form>
        </div>
      </section>

    </>
  );
}

export default Contact;
