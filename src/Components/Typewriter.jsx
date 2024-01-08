import React, { useEffect, useState } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length - 1) {
        clearInterval(intervalId);
      }
    }, 175);

    return () => clearInterval(intervalId);
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const decodedText = displayText.replace(/&apos;/g, "'").replace(/&quot;/g, '"');

  return (
    <div className='animation_layer parallax text-6xl font-semibold text-white relative'>
      <div className='inline-block'>{decodedText}</div>
      {showCursor && <span className='inline-block w-1 h-15 bg-white'>&nbsp;</span>}
    </div>
  );
};

export default Typewriter;