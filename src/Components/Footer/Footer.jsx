import React from 'react';
import Navigation from '../Navigation'; 
import './Footer.css';



const Footer = ({ handleNavigation }) => {
  return (
    <footer>
      <div className="footer-container">
        <Navigation handleNavigation={handleNavigation} customClassName="footer-navigation"  />
        <p>&copy; 2024 JET SET GO!. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
