import React, { useEffect, useState } from 'react';
import headerImage from '../assets/pexels-leeloothefirst-6929024.jpg'; 
import './header.css';

function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <header className="pgms-header" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="overlay"></div>
      <div className={`header-content ${visible ? 'visible' : ''}`}>
        <h1>Making life easier for you</h1>
        <h3>Trusted tax and accounting support</h3>
      </div>
    </header>
  );
}

export default Header;
