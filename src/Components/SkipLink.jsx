import React, { useState, useEffect } from 'react';
import './SkipLink.css';
const SkipLink = ({ targetId, text }) => {
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 9) { 
        setIsKeyboardNavigation(true);
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardNavigation(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <a
      href={`#${targetId}`}
      className={`skip-link ${isKeyboardNavigation ? 'visible' : 'hidden'}`}
    >
      {text}
    </a>
  );
};

export default SkipLink;
