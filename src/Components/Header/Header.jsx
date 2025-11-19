import React from 'react';
import Navigation from '../Navigation'; 

import './Header.css';

const Header = ({ handleNavigation }) => {
  return (
    <header className="header">
      <div className="header-container">
      
        <img src="/images/aboutus.jpg" alt="Jet Set Go" className="logo" />
        <h1 className="heading">Jet Set Go</h1>
        <Navigation handleNavigation={handleNavigation} />
      </div>
    </header>
  );
};

export default Header;

