import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingForward, setIsTypingForward] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTypingForward) {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Start typing backwards
          setIsTypingForward(false);
          setCurrentIndex(currentIndex - 1);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(text.substring(0, currentIndex));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Start typing forward again
          setIsTypingForward(true);
          setCurrentIndex(currentIndex + 1);
        }
      }
    }, 200); // Adjust typing speed here (milliseconds)

    // Clear timeout when component unmounts
    return () => clearTimeout(timer);
  }, [currentIndex, isTypingForward, text]);

  return (
    <div>
      <h1>{displayText}</h1>
    </div>
  );
};

export default Typewriter;
