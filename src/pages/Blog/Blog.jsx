
import React, { useState } from 'react';
import './Blog.css'; 
import SkipLink from '../../Components/SkipLink'; 

const Blog = () => {
  const [username, setUsername] = useState("USERNAME");
  const [isUsernameChanged, setIsUsernameChanged] = useState(false); 

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUsername = event.target.elements.username.value;
    setUsername(newUsername);
    setIsUsernameChanged(true); 
    closeModal(); 
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleReset = () => {
    setUsername("USERNAME");
  };
  
  return (
    <div className="blog-container">
      
      <SkipLink targetId="main-content" text="Skip to main content" />

      <h1 id="main-content">Blog</h1>
      
      <p>Hello <span className={isUsernameChanged ? "changed-username" : "default-username"}>{username}</span> You are reading my Blogs</p>
     <p>Tap here to change username <button onClick={openModal}>Change Username</button></p>
      
      
      {isModalOpen && (
        <dialog open onClose={closeModal}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">New Username:</label>
            <input type="text" id="username" name="username" required />
            <button type="submit">Save</button>
          </form>
          <button onClick={closeModal}>Close</button> 
          <button type="button" onClick={handleReset}>Reset</button>
        </dialog>
      )}
      <div className="blog-posts">
        <div className="blog-post">
          <h2>Exploring the Streets of Paris</h2>
          <p>Paris, often dubbed as the "City of Lights," holds a timeless allure that captivates visitors from around the globe. Steeped in history, culture, and romance, this enchanting city offers a myriad of experiences waiting to be discovered. Join us on a virtual journey as we explore the hidden gems and iconic landmarks that make Paris an irresistible destination.</p>
          <p>One of the most delightful aspects of Paris is its enchanting streets, each offering a unique glimpse into the city's rich tapestry of life. From the cobblestone lanes of Montmartre to the bustling boulevards of the Marais district, wandering through Parisian streets is a journey through history and culture. Every corner reveals a charming cafe, a quaint boutique, or a hidden courtyard, inviting you to immerse yourself in the city's timeless beauty.</p>
          <p>No visit to Paris would be complete without marveling at its iconic landmarks, each a symbol of the city's grandeur and elegance. The Eiffel Tower stands tall as the epitome of Parisian romance, offering breathtaking views of the city from its lofty heights. The majestic Notre-Dame Cathedral, with its Gothic architecture and storied past, is a testament to Paris's rich cultural heritage. And who can forget the splendid Louvre Museum, home to some of the world's most treasured masterpieces, including the enigmatic Mona Lisa?</p>
          <p>Paris pulsates with a vibrant cultural scene that celebrates art, music, cuisine, and fashion in all its glory. From the bohemian ambiance of the Latin Quarter to the chic sophistication of the Champs-Élysées, the city offers a wealth of cultural experiences to indulge in. Immerse yourself in the works of renowned artists at the Musée d'Orsay, savor exquisite French cuisine at a sidewalk bistro, or lose yourself in the melodies of a jazz performance along the Seine – Paris never disappoints when it comes to cultural immersion.</p>
          <p>Beyond its famous landmarks lie hidden gems waiting to be uncovered by intrepid explorers. Stumble upon secret gardens tucked away from the bustling streets, stumble upon quirky boutiques showcasing local craftsmanship, or stumble upon cozy bookshops where time seems to stand still. These hidden treasures offer a glimpse into the soul of Paris, revealing its intimate charm and offbeat allure.</p>
          <p>Paris, with its timeless beauty and undeniable charm, continues to enchant and inspire visitors from near and far. Whether you're strolling along the Seine at sunset, admiring the glittering lights of the city from atop the Eiffel Tower, or savoring a croissant at a sidewalk cafe, every moment spent in Paris is a testament to its enduring magic. So come, embark on a journey through the City of Lights, and discover the enchantment that awaits around every corner.</p>
        </div>
        <div className="blog-post">
          <h2>A Serene Retreat in the Swiss Alps</h2>
          <p>Escape the hustle and bustle of city life and find solace in the tranquility of the Swiss Alps. Switzerland's picturesque mountain villages and stunning landscapes offer the perfect retreat for nature lovers seeking serenity.</p>
          <p>Nestled amidst the towering peaks of the Alps, Switzerland boasts an abundance of natural beauty waiting to be explored. Embark on a journey through pristine wilderness, hiking along scenic trails that wind through lush forests and alpine meadows.</p>
          <p>For thrill-seekers, Switzerland offers a playground of outdoor activities, from skiing in the winter to hiking and paragliding in the summer. But amidst the adventure, there's also ample opportunity to relax in cozy mountain lodges and indulge in hearty Swiss cuisine.</p>
          <p>In Switzerland, the Swiss Alps beckon with their timeless allure, offering a haven of peace and tranquility. So pack your bags, leave your worries behind, and escape to the breathtaking beauty of Switzerland's alpine paradise.</p>
        </div>
        <div className="blog-post">
          <h2>Adventures in the Amazon Rainforest</h2>
          <p>Embark on a thrilling journey to the heart of the Amazon rainforest, where every step unveils the wonders of one of the world's most biodiverse ecosystems. As you delve into the dense jungles, you'll be immersed in a world teeming with life, from vibrant birds and elusive jaguars to colorful insects and fascinating plant species. Each moment brings the opportunity to encounter exotic wildlife and witness the intricate interplay of species that call the Amazon home.</p>
          <p>Beyond the awe-inspiring wildlife, the Amazon rainforest offers a profound connection to nature and a chance to learn about its rich biodiversity. Guided by expert naturalists, you'll gain insights into the delicate balance of this complex ecosystem and the importance of conservation efforts to protect its treasures for future generations. Whether trekking through towering trees, cruising along winding rivers, or listening to the symphony of sounds that fill the air, your adventure in the Amazon promises to be an unforgettable experience of exploration and discovery.</p>
        </div>
        <div className="blog-post">
          <h2>Island Paradise: Exploring the Maldives</h2>
          <p>The Maldives, with its crystal-clear waters and powdery white sand beaches, stands as a quintessential paradise for travelers seeking an escape from the ordinary. This archipelago of over 1,000 coral islands offers a haven of serenity and natural beauty in the heart of the Indian Ocean. From the moment you arrive, you'll be mesmerized by the stunning turquoise lagoons teeming with vibrant marine life, making it a diver's paradise.</p>
          <p>But beyond its postcard-perfect scenery, the Maldives invites you to indulge in a world of luxury and relaxation. Whether you choose to unwind in a private overwater villa, enjoy a romantic candlelit dinner under the stars, or embark on a thrilling adventure through the vibrant coral reefs, every moment in the Maldives promises to be unforgettable. Join us as we delve into the magic of this island paradise and uncover the hidden treasures that await beneath its azure waters.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
