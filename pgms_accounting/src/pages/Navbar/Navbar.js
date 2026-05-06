import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-container">
      <NavLink to="/" className="brand" onClick={closeMenu}>
        <img src="/PGMS Main.png" alt="PGMS Accounting Services Logo" className="logo" />
        <h1>PGMS Accountants</h1>
      </NavLink>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" end className="nav-link" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/About" className="nav-link" onClick={closeMenu}>About us</NavLink>
        <NavLink to="/Service" className="nav-link" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/Blog" className="nav-link" onClick={closeMenu}>Blog</NavLink>
        <NavLink to="/Contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
