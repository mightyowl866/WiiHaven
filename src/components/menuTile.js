import React, { useState } from 'react';

function Tile({ children, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverSound = new Audio('/assets/hov.wav');
  const displaySound = new Audio('/assets/id-highlight.wav');
  hoverSound.volume = 0.5;
  displaySound.volume = 0.5;
  let hoverTimeout;

  const handleMouseEnter = () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
    hoverTimeout = setTimeout(() => {
      setIsHovered(true);
      displaySound.currentTime = 0;
      displaySound.play();
    }, 800);
  };

  const handleMouseLeave = () => {
    const idBox = document.querySelector('.id-box');
    if (idBox) {
      idBox.classList.add('fade-out');
    }
    clearTimeout(hoverTimeout);
    setTimeout(() => {
      setIsHovered(false);
    }, 40);
  };

  return (
    <div 
      id={id} 
      className="empty-tile" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && <div className="id-box">{id}</div>}
      {children}
    </div>
  );
}

export default Tile;