import React from 'react';
import './OurTours.css'; 
import SkipLink from '../../Components/SkipLink'; 

const OurTours = () => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
    }
  };
  return (
    <div>
      
      <SkipLink targetId="main-content" text="Skip to main content" />

      <div className="our-tours-container" id="main-content">
        <h2>Our Tours</h2>
        <p>Jet Set Go offers an exhilarating array of tours, inviting you to embark on unforgettable adventures across various landscapes and vibrant cities. Whether you're drawn to the serenity of picturesque landscapes or the bustling energy of cosmopolitan hubs, our tours are meticulously crafted to cater to diverse preferences and interests.</p>
        <p>From the majestic beauty of natural wonders to the cultural richness of historic sites, each tour promises a unique and enriching experience. Immerse yourself in the awe-inspiring beauty of breathtaking landscapes, where towering mountains, cascading waterfalls, and serene lakes await exploration.</p>
        <p>Alternatively, dive into the heart of bustling cities, where the rhythm of life pulses through vibrant streets adorned with architectural marvels, bustling markets, and cultural landmarks. Our tours offer something for everyone, from nature enthusiasts and adventure seekers to history buffs and culture aficionados.</p>
        <p>Join us on one of our meticulously curated tours and create memories that will last a lifetime. Whether you're seeking adrenaline-pumping activities, tranquil retreats, or immersive cultural experiences, our expertly guided tours ensure an unforgettable journey filled with discovery, excitement, and lasting impressions.</p>
        <div className="image-cell">
          
          <div className="image-container">
            <img src="/images/maldivestours.jpg" alt="Maldives Tour" />
            <div className="image-details">
              <h3>Maldives</h3>
              <p>The Maldives, an archipelago of breathtaking coral islands scattered across the Indian Ocean, is renowned for its pristine white-sand beaches, crystal-clear turquoise waters, and vibrant coral reefs teeming with marine life. It's a tropical paradise perfect for relaxation, water sports, and exploring the vibrant underwater world.</p>
            </div>
          </div>

          
          <div className="image-container">
            <img src="/images/bali.jpg" alt="Bali Tour" />
            <div className="image-details">
              <h3>Bali</h3>
              <p>Bali, the "Island of the Gods," boasts lush landscapes, volcanic mountains, and pristine beaches. With vibrant local culture, ancient temples, and thrilling adventures, Bali offers a perfect blend of relaxation and exploration for travelers. Whether seeking serene retreats or cultural immersion, Bali promises unforgettable experiences amidst breathtaking natural beauty.</p>
            </div>
          </div>

          
          <div className="image-container">
            <img src="/images/singaporetours.jpg" alt="Singapore Tour" />
            <div className="image-details">
              <h3>Singapore</h3>
              <p>Singapore, a modern metropolis, boasts futuristic architecture, lush gardens, and a vibrant street food scene, making it a cultural melting pot in Southeast Asia. Explore iconic landmarks like Marina Bay Sands, Gardens by the Bay, and Sentosa Island, and immerse yourself in the city's rich heritage, bustling markets, and world-class shopping districts. Experience the perfect blend of tradition and innovation in this dynamic city-state.</p>
            </div>
          </div>

          
          <div className="image-container">
            <img src="/images/hawaiitours.jpg" alt="Hawaii Tour" />
            <div className="image-details">
              <h3>Hawaii</h3>
              <p>Hawaii, a tropical paradise in the Pacific Ocean, beckons with its stunning beaches, lush rainforests, and volcanic landscapes. Immerse yourself in the aloha spirit, surf the legendary waves of the North Shore, and witness mesmerizing sunsets against the backdrop of volcanic peaks. Explore vibrant marine life while snorkeling, and embrace the rich Hawaiian culture through hula dances and traditional feasts.</p>
            </div>
          </div>

          <div className="image-container">
            <img src="/images/dubaitours.jpg" alt="Dubai Tour" />
            <div className="image-details">
              <h3>Dubai</h3>
              <p>Dubai, a dazzling desert city, offers opulent skyscrapers, luxurious shopping malls, and world-class entertainment. Experience the thrill of desert safaris, admire the architectural wonders of Burj Khalifa and Palm Jumeirah, and indulge in the vibrant nightlife and cultural experiences. Discover a blend of modernity and tradition in this cosmopolitan hub of the United Arab Emirates.</p>
            </div>
          </div>

          
          <div className="image-container">
            <img src="/images/Japntours.jpg" alt="Japan Tour" />
            <div className="image-details">
              <h3>Japan</h3>
              <p>Japan, a fusion of tradition and modernity, beckons with its vibrant cities, historic temples, and stunning natural scenery. Explore Tokyo's bustling streets, Kyoto's serene temples, and the iconic Mount Fuji. Immerse yourself in Japan's rich culture, from its traditional art forms to its culinary delights, for an unforgettable experience.</p>
            </div>
          </div>

          
          <div className="image-container">
            <img src="/images/indiatours.jpg" alt="India Tour" />
            <div className="image-details">
              <h3>India</h3>
              <p>India, a land of diversity and contrasts, offers a tapestry of experiences ranging from ancient landmarks like the Taj Mahal to bustling markets and serene beaches. Dive into its rich cultural heritage, savor its flavorful cuisine, and embark on spiritual journeys amidst majestic landscapes for an immersive adventure.</p>
            </div>
          </div>

          
          <div className="image-container">
            <img src="/images/sey.jpg" alt="Seychelles Tour" />
            <div className="image-details">
              <h3>Seychelles</h3>
              <p>Seychelles, a tropical paradise nestled in the Indian Ocean, boasts pristine beaches, lush rainforests, and vibrant coral reefs. Explore its idyllic islands, indulge in luxury resorts, and immerse yourself in the breathtaking natural beauty. With crystal-clear waters and diverse marine life, Seychelles offers an unforgettable escape into serenity and tranquility.</p>
            </div>
          </div>

          
          <div className="image-container">
            <img src="/images/icelandtours.jpg" alt="Iceland Tour" />
            <div className="image-details">
              <h3>Iceland</h3>
              <p>Iceland, known as the Land of Fire and Ice, is a land of dramatic contrasts, featuring volcanic landscapes, towering glaciers, and cascading waterfalls. Explore its rugged terrain, soak in natural hot springs, and witness the mesmerizing Northern Lights dance across the sky. With its unique geological wonders and untamed wilderness, Iceland offers an otherworldly adventure unlike any other.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTours;
