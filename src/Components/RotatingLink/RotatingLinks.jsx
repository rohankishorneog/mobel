import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./RotatingLinks.css"

const RotatingLinks = () => {
  const links = [
    { id: 1, to: '/newCollection', label: 'NEW' },
    { id: 2, to: '/rugCollection', label: 'RUG' }
  ];

  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLinkIndex((prevIndex) => (prevIndex + 1) % links.length);
    }, 5000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, [links.length]);

  return (
    <div className='RotatingLinks-main-div'>
      <Link to={links[currentLinkIndex].to}>{links[currentLinkIndex].label}
      </Link>
    </div>
  );
};

export default RotatingLinks;
