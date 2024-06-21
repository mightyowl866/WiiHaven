import React, { useEffect, useRef } from 'react';

function BlackScreen({ children }) {
  const blackScreenRef = useRef(null);

  useEffect(() => {
    if (blackScreenRef.current) {
      blackScreenRef.current.classList.add('fade-out');

      setTimeout(() => {
        blackScreenRef.current.classList.add('hidden');
        blackScreenRef.current.classList.remove('black-screen');
      }, 1000);
    }
  }, []);

  return (
    <div ref={blackScreenRef} className="black-screen">
      {children}
    </div>
  );
}

export default BlackScreen;