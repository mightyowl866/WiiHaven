// src/components/WarningPage.js
import React, { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { ReactComponent as Warning} from '../svg/warning.svg';
import '../css/warning.css';

const WarningPage = () => {
  const textRef = useRef(null);
  const navigate = useNavigate();
  const overlayRef = useRef(null);

  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.classList.add('fade-out');
    }
  }, []);

  const handleProceed = () => {
    if (overlayRef.current) {
      overlayRef.current.classList.remove('fade-out');
      overlayRef.current.classList.add('fade-in');
    }
    if (textRef.current) {
      textRef.current.classList.remove('fade-in-out');
      textRef.current.classList.add('fade-out');
    }
  setTimeout(() => {
    // Create a new Audio object, set the volume to 0.5, and play the audio file
    const audio = new Audio('/assets/wiimenu.mp3');
    audio.volume = 0.5;
    audio.play();
  }
  , 1300);
  setTimeout(() => {
    // Create a new Audio object, set the volume to 0.5, and play the audio file
    const audio = new Audio('/assets/startup.mp3');
    audio.volume = 0.5;
    audio.play();
  }
  , 1200);
  
    // Add a delay of 2 seconds before navigating to the new page
    setTimeout(() => {
      navigate('/main-menu');
    }, 2000);
  };

  return (
    <div onClick={handleProceed}>
      <div ref={overlayRef} className='black-overlay'></div>
      <div className='warning_start'>

      <div className='warn_top'>
        <Warning />
        <h1>WARNING - HEALTH AND SAFETY</h1>
      </div>
      <h2>BEFORE PLAYING, READ YOUR OPERATIONS
        MANUAL FOR IMPORTANT INFORMATION ABOUT YOUR HEALTH AND SAFETY.
      </h2>
      <p>
        Also online at
      </p>
      <h4>https://github.com/mightyowl866/WiiHaven</h4>
      
      <h3 ref={textRef} className='fade-in-out'>Please Click Anywhere to Continue.</h3>
    </div>
    </div>
  );
};

export default WarningPage;