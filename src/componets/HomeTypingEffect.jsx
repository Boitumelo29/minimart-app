import React, { useEffect, useRef } from 'react';
import '../styles/HomeTypingEffect.css';

const HomeTypingEffect = () => {
  const typingRef = useRef(null);
  const idxRef = useRef(1);
  const prog = 'Easy.';

  useEffect(() => {
    const interval = setInterval(() => {
      if (typingRef.current) {
        typingRef.current.innerHTML = prog.slice(0, idxRef.current);
        idxRef.current++;
        if (idxRef.current > prog.length) idxRef.current = 1;
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <h3>
      Shopping made <span className='typing' ref={typingRef}>Easy.</span>
    </h3>
  );
};

export default HomeTypingEffect;
