import React, { useEffect, useState } from 'react';
import headerImage from '../assets/pexels-leeloothefirst-6929024.jpg'; 


const headerContainer = {
  position: 'relative',
  backgroundImage: `url(${headerImage })`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '300px',
  overflow: 'hidden', 
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.7)', 
  zIndex: 1,
};

const contentStyle = (visible) => ({
  position: 'relative',
  zIndex: 2,
  color: 'black',
  textAlign: 'center',
  transform: visible ? 'translateY(0)' : 'translateY(-100%)',
  transition: 'transform 0.8s ease-out',
  paddingTop: '100px',
});

function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    setVisible(true);
  }, []);

  return (
    <header style={headerContainer}>
      <div style={overlayStyle}></div>
      <div style={contentStyle(visible)}>
        <h1>Making life easier for you</h1>
        <h3>~PGMS Accountants~</h3>
      </div>
    </header>
  );
}

export default Header;
