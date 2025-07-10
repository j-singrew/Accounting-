import React from 'react';

const navbarStyle = {
  backgroundColor: '#E18D4B',
  color: '#333',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '60px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
};

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <a href="/" style={linkStyle}>Home</a>
      <a href="#contact" style={linkStyle}>About us</a>
      <a href="#services" style={linkStyle}>Services</a>
      <a href="#contact" style={linkStyle}>Contact</a>
    </nav>
  );
}

export default Navbar;
