import React, { useState } from 'react';
import './OurServices.css';
import SkipLink from '../../Components/SkipLink'; 
const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const toggleService = (index, event) => {
    if (!event || event.key === 'Enter' || event.key === ' ') {
      setSelectedService(selectedService === index ? null : index);
    }
  };

  return (
    <div>
      
      <SkipLink targetId="main-content" text="Skip to main content" />

      <div className="services-container" id="main-content">
        <h1>Our Services</h1>
        <p>At Jet Set Go, we pride ourselves on offering a comprehensive range of services to enhance your travel experience. Our dedicated team is committed to providing you with convenience, comfort, and peace of mind throughout your journey. Here's a closer look at the services we offer</p>
        <p className="click-text">Click on service to know more</p>
        <div className="service-categories">
          <div className="service-category">
            <div className="category-content">
              <div
                className="category-text"
                onClick={() => toggleService(0)}
                onKeyDown={(event) => toggleService(0, event)}
                role="button"
                tabIndex="0"
              >
                <h3>Booking Services</h3>
                {selectedService === 0 && (
                  <p>We take the hassle out of travel planning by assisting you with ticket bookings for flights, trains, buses, and other modes of transportation. Whether you're flying across continents or embarking on a scenic train ride, we ensure smooth and hassle-free reservations.</p>
                )}
              </div>
              {selectedService === 0 && (
                <div className="category-image">
                  <img src="/images/Booking.jpg" alt="Booking Services" />
                </div>
              )}
            </div>
          </div>
          <div className="service-category">
            <div className="category-content">
              <div
                className="category-text"
                onClick={() => toggleService(1)}
                onKeyDown={(event) => toggleService(1, event)}
                role="button"
                tabIndex="0"
              >
                <h3>Airport Pickup/Drop</h3>
                {selectedService === 1 && (
                  <p>Arriving at a new destination can be daunting, which is why we offer reliable airport pickup and drop-off services. Our professional drivers will greet you at the airport, assist with your luggage, and ensure a comfortable transfer to your accommodation or desired destination.</p>
                )}
              </div>
              {selectedService === 1 && (
                <div className="category-image">
                  <img src="/images/Airport.jpg" alt="Airport Pickup/Drop" />
                </div>
              )}
            </div>
          </div>
          <div className="service-category">
            <div className="category-content">
              <div
                className="category-text"
                onClick={() => toggleService(2)}
                onKeyDown={(event) => toggleService(2, event)}
                role="button"
                tabIndex="0"
              >
                <h3>City Tours</h3>
                {selectedService === 2 && (
                  <p>Immerse yourself in the culture, history, and attractions of your destination with our guided city tours. Led by knowledgeable local guides, our tours take you to iconic landmarks, hidden gems, and off-the-beaten-path attractions, providing you with insights and experiences you won't find in guidebooks.</p>
                )}
              </div>
              {selectedService === 2 && (
                <div className="category-image">
                  <img src="/images/Citytour.jpg" alt="City Tours" />
                </div>
              )}
            </div>
          </div>
          <div className="service-category">
            <div className="category-content">
              <div
                className="category-text"
                onClick={() => toggleService(3)}
                onKeyDown={(event) => toggleService(3, event)}
                role="button"
                tabIndex="0"
              >
                <h3>Customized Itineraries</h3>
                {selectedService === 3 && (
                  <p>Tailor your travel experience to your preferences with our customized itinerary planning services. Whether you're seeking adventure, relaxation, cultural immersion, or gastronomic delights, we'll work with you to create a personalized itinerary that perfectly matches your interests and desires.</p>
                )}
              </div>
              {selectedService === 3 && (
                <div className="category-image">
                  <img src="/images/iti.jpg" alt="Customized Itineraries" />
                </div>
              )}
            </div>
          </div>
          <div className="service-category">
            <div className="category-content">
              <div
                className="category-text"
                onClick={() => toggleService(4)}
                onKeyDown={(event) => toggleService(4, event)}
                role="button"
                tabIndex="0"
              >
                <h3>Honeymoon Packages</h3>
                {selectedService === 4 && (
                  <p>Celebrate your love and embark on the perfect romantic getaway with our specially curated honeymoon packages. From idyllic beach resorts to charming countryside retreats, we offer a variety of romantic destinations and experiences to create cherished memories with your loved one.</p>
                )}
              </div>
              {selectedService === 4 && (
                <div className="category-image">
                  <img src="/images/Honeymoon.jpg" alt="Honeymoon Packages" />
                </div>
              )}
            </div>
          </div>
          <div className="service-category">
            <div className="category-content">
              <div
                className="category-text"
                onClick={() => toggleService(5)}
                onKeyDown={(event) => toggleService(5, event)}
                role="button"
                tabIndex="0"
              >
                <h3>Photoshoot Packages</h3>
                {selectedService === 5 && (
                  <p>Immerse yourself in the beauty of your destinations with our photoshoot our talented photographers will skillfully capture your special moments in picturesque settings.</p>
                )}
              </div>
              {selectedService === 5 && (
                <div className="category-image">
                  <img src="/images/ps.jpg" alt="Photoshoot Packages" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
