// Importing React and useState hook from React library
import React, { useState } from 'react';

// Defining the Tile functional component with props `id` and `image`
function Tile({ id, image }) {
  // State hook for managing hover state
  const [isHovered, setIsHovered] = useState(false);

  // Creating audio objects for hover and display sounds
  const hoverSound = new Audio('/assets/hov.wav');
  const displaySound = new Audio('/assets/id-highlight.wav');

  // Setting the volume for both audio objects
  hoverSound.volume = 0.5;
  displaySound.volume = 0.5;

  // Variable to store the timeout ID for hover effect
  let hoverTimeout;

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    // Reset and play hover sound
    hoverSound.currentTime = 0;
    hoverSound.play();
    // Set a timeout to change hover state and play display sound after 800ms
    hoverTimeout = setTimeout(() => {
      setIsHovered(true);
      displaySound.currentTime = 0;
      displaySound.play();
    }, 800);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    // Find the element with class 'id-box' and add 'fade-out' class to it
    const idBox = document.querySelector('.id-box');
    if (idBox) {
      idBox.classList.add('fade-out');
    }
    // Clear the hover timeout
    clearTimeout(hoverTimeout);
    // Set a timeout to reset hover state after 40ms
    setTimeout(() => {
      setIsHovered(false);
    }, 40);
  };

  // Conditional styling: if an image is provided, use it as the background
  const tileStyle = image ? { backgroundImage: `url(${image})` } : {};

  // Render the component
  return (
    <div 
      id={id} 
      className="empty-tile" 
      onMouseEnter={handleMouseEnter} // Attach mouse enter event handler
      onMouseLeave={handleMouseLeave} // Attach mouse leave event handler
      style={tileStyle} // Apply conditional styling
    >
      {isHovered && <div className="id-box">{id}</div>} 
    </div>
  );
}

// Export the Tile component for use in other parts of the application
export default Tile;