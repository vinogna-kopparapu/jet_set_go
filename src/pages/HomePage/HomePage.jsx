import React from 'react';
import './HomePage.css'; 
import SkipLink from '../../Components/SkipLink'; 

const HomePage = () => {
  return (
    <div>
      
      <SkipLink targetId="main-content" text="Skip to main content" />
   
      <div className="home-container" id="main-content">
        <img src="/images/Home.gif" alt="gif with scenic beauty" className="gif-image" />
        <h1>JET SET GO</h1>
        <p>"Your pathway to memorable and exceptional travel adventures."</p>
        <p>At Jet Set Go, we pride ourselves on offering a comprehensive range of services designed to enhance your travel experience. Our dedicated team is committed to providing you with convenience, comfort, and peace of mind throughout your journey. From booking services that take the hassle out of travel planning to airport pickup/drop services that ensure a smooth transition upon arrival at your destination, we have you covered. Additionally, our city tours provide an immersive experience, allowing you to explore the culture, history, and attractions of your destination with knowledgeable local guides. For those seeking personalized travel experiences, we offer customized itineraries tailored to your preferences and interests. Celebrate love and embark on the perfect romantic getaway with our specially curated honeymoon packages, or capture your special moments with our photoshoot packages. Whatever your travel needs may be, Jet Set Go is here to make your journey unforgettable.</p>
      </div>
    </div> 
  );
};

export default HomePage;
