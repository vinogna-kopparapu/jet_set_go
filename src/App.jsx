import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Tours from './pages/OurTours/OurTours';
import Services from './pages/OurServices/OurServices';
import PopularTours from './pages/PopularTours/PopularTours';
import Gallery from './pages/Gallery/Gallery';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';

const App = () => {
  
  const [currentPage, setCurrentPage] = useState('home');

  
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header handleNavigation={handleNavigation} />
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <AboutUs />}
        {currentPage === 'tours' && <Tours />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'popular-tours' && <PopularTours />}
        {currentPage === 'gallery' && <Gallery />}
        {currentPage === 'blog' && <Blog />}
        {currentPage === 'contact' && <Contact />}
      </main>
      <Footer handleNavigation={handleNavigation} />
    </div>
  );
};

export default App;
