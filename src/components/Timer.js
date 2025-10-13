import React, { useState, useEffect } from 'react'; // useRef has been removed from this line

// Create a reusable audio context to avoid "user must interact" errors
let audioContext;
const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
};

// Function to play a beep sound
const playBeep = () => {
  try {
    const context = getAudioContext();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = 'sine'; // A simple sine wave for a clean beep
    oscillator.frequency.setValueAtTime(880, context.currentTime); // A4 note frequency
    gainNode.gain.setValueAtTime(0.1, context.currentTime); // Volume
    gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.3);

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.3);
  } catch (error) {
    console.error("Could not play beep sound:", error);
  }
};


const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const circumference = 2 * Math.PI * 25; // radius is 25

  // Determine if the timer should be in "alert" mode
  const isAlerting = timeLeft <= 5 && timeLeft > 0;

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    // Play beep sound in the last 5 seconds
    if (isAlerting) {
      playBeep();
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp, isAlerting]);

  const progress = (timeLeft / duration) * circumference;
  const timerClass = isAlerting ? 'timer-circle-progress alert' : 'timer-circle-progress';

  return (
    <div className="timer-container">
      <svg className="timer-svg" width="60" height="60" viewBox="0 0 60 60">
        <circle className="timer-circle-bg" cx="30" cy="30" r="25"></circle>
        <circle
          className={timerClass}
          cx="30"
          cy="30"
          r="25"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        ></circle>
      </svg>
      <span className="timer-text">{timeLeft}</span>
    </div>
  );
};

export default Timer;