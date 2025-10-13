import React, { useState } from 'react';
import { FaBook, FaBolt, FaGlobe, FaGoogle } from 'react-icons/fa';
import { signInWithGoogle } from '../firebase';
import useTypingEffect from './useTypingEffect'; // Import the new hook

const HomePage = ({ user, onStartQuiz, onStartTest, onStartFullTest, allQuestions = [] }) => {
  const weeks = [...new Set(allQuestions.map(q => q.topic))];
  const [selectedWeek, setSelectedWeek] = useState(weeks[0] || '');

  // Prepare the text for the typing animation
  const welcomeMessage = user ? `Welcome back, ${user.displayName}!` : 'Welcome to the Ethical Hacking Arena!';
  const animatedText = useTypingEffect(welcomeMessage);

  if (!user) {
    return (
      <div className="card home-page">
        <h2>
          {/* Apply the typing effect here */}
          <span className="typing-effect">{animatedText}</span>
          <span className="cursor"></span>
        </h2>
        <p>Your practice grounds for the NPTEL Ethical Hacking course. Sign in to begin.</p>
        <button onClick={signInWithGoogle} className="btn btn-primary google-btn">
          <FaGoogle /> Sign In with Google
        </button>
      </div>
    );
  }

  return (
    <div className="card home-page">
      <h2>
        {/* And also here for logged-in users */}
        <span className="typing-effect">{animatedText}</span>
        <span className="cursor"></span>
      </h2>
      <p>Hone your skills, challenge your knowledge, and prepare for victory.</p>
      
      <div className="mode-selection">
        <div className="week-filter">
          <label htmlFor="week-select">Select a Week to Practice:</label>
          <select id="week-select" value={selectedWeek} onChange={e => setSelectedWeek(e.target.value)}>
            {weeks.map(week => <option key={week} value={week}>{week}</option>)}
          </select>
          <button onClick={() => onStartQuiz(selectedWeek)} className="btn btn-secondary">
            <FaBook /> Practice Arena
          </button>
        </div>
        
        <div className="test-modes">
          <button onClick={() => onStartTest('random')} className="btn btn-secondary">
            <FaBolt /> Rapid Fire Test (20 random Qs)
          </button>
          <button onClick={onStartFullTest} className="btn btn-primary">
            <FaGlobe /> Are you ready? Take Full Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;