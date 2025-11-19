import React from 'react';

const Navigation = ({ handleNavigation }) => {
 
  const handleClick = (page) => {
    
    event.preventDefault();
    
    handleNavigation(page);
  };

  return (
    <nav>
      <ul>
        <li><a href="/home" onClick={() => handleClick('home')}>Home</a></li>
        <li><a href="/about" onClick={() => handleClick('about')}>About Us</a></li>
        <li><a href="/tours" onClick={() => handleClick('tours')}>Tours</a></li>
        <li><a href="/services" onClick={() => handleClick('services')}>Services</a></li>
        <li><a href="/popular-tours" onClick={() => handleClick('popular-tours')}>Popular Tours</a></li>
        <li><a href="/gallery" onClick={() => handleClick('gallery')}>Gallery</a></li>
        <li><a href="/blog" onClick={() => handleClick('blog')}>Blog</a></li>
        <li><a href="/contact" onClick={() => handleClick('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
