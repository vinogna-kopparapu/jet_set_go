import React, { useState } from 'react';
import './PopularTours.css';
import SkipLink from '../../Components/SkipLink';

const TourForm = () => {
  const [destination, setDestination] = useState('');
  const [selectedTour, setSelectedTour] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleDestinationChange = (event) => {
    const selectedDestination = event.target.value;
    setDestination(selectedDestination);
    setSelectedTour('');
    setSelectedPlace('');
    setFormSubmitted(false);
  };

  const handleTourChange = (event) => {
    const selectedTourName = event.target.value;
    setSelectedTour(selectedTourName);
    setSelectedPlace('');
  };

  const handlePlaceChange = (event) => {
    const selectedPlaceName = event.target.value;
    setSelectedPlace(selectedPlaceName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const handleClose = () => {
    setFormSubmitted(false);
    setDestination('');
    setSelectedTour('');
    setSelectedPlace('');
  };

  const getTourOptions = () => {
    switch (destination) {
      case 'Europe':
        return ['London Tour', 'Paris Tour', 'Rome Tour'];
      case 'Asia':
        return ['Tokyo Tour', 'Bangkok Tour', 'Seoul Tour'];
      case 'North America':
        return ['New York City Tour', 'Los Angeles Tour', 'San Francisco Tour'];
      case 'Africa':
        return ['Cape Town Tour', 'Nairobi Tour', 'Marrakech Tour'];
      default:
        return [];
    }
  };

  const getPlaceOptions = () => {
    switch (selectedTour) {
      case 'London Tour':
        return ['Westminster Abbey', 'The British Museum', 'Tower of London'];
      case 'Paris Tour':
        return ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'];
      case 'Rome Tour':
        return ['Colosseum', 'Vatican Museums', 'Trevi Fountain'];
      case 'Tokyo Tour':
        return ['Sensoji Temple', 'Shibuya Crossing', 'Tokyo Disneyland'];
      case 'Bangkok Tour':
        return ['Grand Palace', 'Wat Arun', 'Chatuchak Weekend Market'];
      case 'Seoul Tour':
        return ['Gyeongbokgung Palace', 'N Seoul Tower', 'Myeongdong Shopping Street'];
      case 'New York City Tour':
        return ['Statue of Liberty', 'Central Park', 'Times Square'];
      case 'Los Angeles Tour':
        return ['Hollywood Walk of Fame', 'Universal Studios Hollywood', 'Santa Monica Pier'];
      case 'San Francisco Tour':
        return ['Golden Gate Bridge', 'Alcatraz Island', 'Fisherman\'s Wharf'];
      case 'Cape Town Tour':
        return ['Table Mountain', 'Robben Island', 'Victoria & Alfred Waterfront'];
      case 'Nairobi Tour':
        return ['Maasai Mara National Reserve', 'Nairobi National Park', 'David Sheldrick Wildlife Trust'];
      case 'Marrakech Tour':
        return ['Jemaa el-Fnaa', 'Bahia Palace', 'Majorelle Garden'];
      default:
        return [];
    }
  };

  return (
    <div>
      <SkipLink targetId="main-content" text="Skip to main content" />

      <div className="popular-tours-container">
        <h1 id="main-content">Popular Tours</h1>

        <img src="/images/aboutus.jpg" alt="Tours Image" className="tour-image" />

        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="destination">Select Destination:</label>
            <select id="destination" value={destination} onChange={handleDestinationChange}>
              <option value="">Select Destination</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="North America">North America</option>
              <option value="Africa">Africa</option>
            </select>
          </div>

          {destination && (
            <div>
              <label htmlFor="tourOption">Select Tour:</label>
              <select id="tourOption" value={selectedTour} onChange={handleTourChange}>
                <option value="">Select Tour</option>
                {getTourOptions().map((tour, index) => (
                  <option key={index} value={tour}>{tour}</option>
                ))}
              </select>
            </div>
          )}

          {selectedTour && (
            <div>
              <label htmlFor="place">Select Place:</label>
              <select id="place" value={selectedPlace} onChange={handlePlaceChange}>
                <option value="">Select Place</option>
                {getPlaceOptions().map((place, index) => (
                  <option key={index} value={place}>{place}</option>
                ))}
              </select>
            </div>
          )}

          <button type="submit">Submit</button>
          <button type="button" onClick={handleClose}>Reset</button>
        </form>

        {formSubmitted && selectedPlace && (
          <div className="success-message">
            <p>"Great selection! </p>
            <p>Feel free to reach out at 123-456-7890, and we'll coordinate your tours for you!</p>
            <p>For further information, be sure to explore our Contact Us page." </p>
            <button onClick={handleClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourForm;
