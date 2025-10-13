import { useState, useEffect } from 'react';

/**
 * A custom hook for creating a repeating typing animation effect.
 * @param {string} text - The full text to be typed out.
 * @param {number} typingSpeed - The speed of typing in milliseconds.
 * @param {number} pauseDuration - The pause duration in milliseconds after typing completes.
 */
const useTypingEffect = (text, typingSpeed = 150, pauseDuration = 2000) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    if (!text) return;

    const handleTyping = () => {
      const i = loopNum % 2; // Simple way to alternate between typing and pausing
      const fullText = text;

      // Determine if we are typing or deleting
      const updatedText = isDeleting
        ? fullText.substring(0, typedText.length - 1)
        : fullText.substring(0, typedText.length + 1);

      setTypedText(updatedText);

      // Logic for switching between typing and deleting states
      if (!isDeleting && updatedText === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && updatedText === '') {
        // Stop deleting and move to the next loop
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    // Set the interval for the typing/deleting effect
    const timer = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);

    // Cleanup function
    return () => clearTimeout(timer);

  }, [typedText, isDeleting, loopNum, text, typingSpeed, pauseDuration]);

  return typedText;
};

export default useTypingEffect;