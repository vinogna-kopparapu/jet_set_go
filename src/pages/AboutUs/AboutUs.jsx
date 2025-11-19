import React from 'react';
import './AboutUs.css';
import SkipLink from '../../Components/SkipLink'; 

const AboutUs = () => {
  return (
    <div>
      <SkipLink targetId="main-content" text="Skip to main content" />
      <div className="about-us-container" id="main-content">
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>"Welcome to Jet Set Go! At Jet Set Go, we're not just about booking trips; we're dedicated to creating unforgettable travel experiences that will leave you with lasting memories. Our team is made up of passionate travelers who have explored various destinations around the globe. We understand the thrill of discovering new places and the importance of having a well-planned itinerary.</p>
          <p>Whether you're dreaming of a relaxing beach getaway, an adventurous trek through the mountains, or an immersive cultural experience, we're here to help you plan every detail. From selecting the perfect destination to finding unique activities and accommodations, we'll tailor your trip to suit your preferences and ensure a seamless travel experience.</p>
          <p>We're committed to providing personalized service and making your travel dreams a reality. Let's embark on this journey together and create memories that will last a lifetime!"</p>
        </div>
        <div className="about-us-image"> 
          <img src="/images/about.jpg" alt="choosing next travel" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
