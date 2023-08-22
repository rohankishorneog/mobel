import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./RotatingLinks.css"

const RotatingLinks = () => {
  const links = [
    { id: 1, to: '/categories/chairs', label: 'LOOK INTO SOME CHAIRS' },
    { id: 2, to: '/categories/sofas', label: 'SOFAS FOR COMFORT' },
    { id: 2, to: '/categories/lamps', label: 'LAMPS TO IGNITE MIND' }
  ];

  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLinkIndex((prevIndex) => (prevIndex + 1) % links.length);
    }, 3000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, [links.length]);

  return (
    <div className='RotatingLinks-main-div'>
      <Link to={links[currentLinkIndex].to} className='RotatingLinks-main-div-link'> {links[currentLinkIndex].label}
      </Link>
    </div>
  );
};

export default RotatingLinks;
