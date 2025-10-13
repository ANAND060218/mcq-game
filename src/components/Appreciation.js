import React, { useState, useEffect } from 'react';

const appreciationEmojis = ['🎉', '👍', '🚀', '💯', '✅', '🎯', '🔥'];

const Appreciation = () => {
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    // Pick a random emoji when the component mounts
    setEmoji(appreciationEmojis[Math.floor(Math.random() * appreciationEmojis.length)]);
  }, []);

  return (
    <div className="appreciation-container">
      <span className="appreciation-emoji">{emoji}</span>
    </div>
  );
};

export default Appreciation;