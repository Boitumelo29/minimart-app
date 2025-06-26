import React, { useEffect, useRef } from 'react';
import '../styles/HomeTypingEffect.css';

const HomeTypingEffect = () => {
  const typingRef = useRef(null);
  const indexRef = useRef(1);
  const prog = 'Easy.';

  useEffect(() => {
    const interval = setInterval(() => {
      if (typingRef.current) {
        typingRef.current.innerHTML = prog.slice(0, indexRef.current);
        indexRef.current++;
        if (indexRef.current > prog.length) indexRef.current = 1;
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
