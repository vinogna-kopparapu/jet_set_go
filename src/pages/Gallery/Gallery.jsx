import React, { useState } from 'react';
import './Gallery.css';
import SkipLink from '../../Components/SkipLink'; 

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    { id: 1, title: 'Majestic Multnomah falls ', category: 'nature', image: '/images/nature1.jpg' },
    { id: 2, title: 'Impressive Iconic skyscrapers', category: 'city', image: '/images/city.jpg' },
    { id: 3, title: 'Lush green vines adorn the landscape', category: 'nature', image: '/images/Nature.jpg' },
    { id: 4, title: 'Shore beneath fluffy white clouds', category: 'beach', image: '/images/Beautifulbeach.jpg' },
    { id: 5, title: 'Beautiful view of Pragser Widsee', category: 'mountain', image: '/images/GalleryMountain.jpg' },
    { id: 6, title: 'Mountains covered with snow', category: 'mountain', image: '/images/mountain1.jpg' },
  ];

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="Gallery-container">
      
      <SkipLink targetId="main-content" text="Skip to main content" />

      <h1 id="main-content">Gallery</h1>
      <p>Explore our stunning collection of images showcasing breathtaking landscapes, vibrant cityscapes, serene beaches, majestic mountains, and more. Each image captures the essence of its category, inviting you to embark on a visual journey filled with beauty and inspiration.</p>
      <div className="filter-container">
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="nature">Nature</option>
          <option value="city">City</option>
          <option value="beach">Beach</option>
          <option value="mountain">Mountain</option>
        </select>
      </div>
      <div className="gallery">
        {filteredItems.map(item => (
          <div key={item.id} className="gallery-item">
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p>Category: {item.category}</p>
          </div>
        ))}
      </div>
      <p>This is our gallery you're planning your next adventure or simply seeking inspiration, let our gallery ignite your wanderlust and imagination.</p>
    </div>
  );
};

export default Gallery;
