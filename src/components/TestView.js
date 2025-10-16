import React, { useState, useEffect } from 'react';
import { FaHome, FaArrowLeft, FaArrowRight, FaPaperPlane } from 'react-icons/fa';

const TEST_DURATION = 20;

const TestView = ({ questions, onComplete, onGoHome }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(() => Array(questions.length).fill(null));
  const [isFinalized, setIsFinalized] = useState(() => Array(questions.length).fill(false));
  const [timeRemaining, setTimeRemaining] = useState(() => Array(questions.length).fill(TEST_DURATION));
  const [currentSelection, setCurrentSelection] = useState([]);

  const question = questions[currentQIndex];
  const isShortAnswer = question.answerOptions.length === 1;

  useEffect(() => {
    const savedAnswer = userAnswers[currentQIndex];
    setCurrentSelection(savedAnswer !== null ? (Array.isArray(savedAnswer) ? savedAnswer : [savedAnswer]) : []);
  }, [currentQIndex, userAnswers]);

  useEffect(() => {
    if (isFinalized[currentQIndex] || timeRemaining[currentQIndex] === 0) return;
    const timer = setInterval(() => {
      setTimeRemaining(prevTimes => {
        const newTimes = [...prevTimes];
        if (newTimes[currentQIndex] > 0) {
          newTimes[currentQIndex] -= 1;
        } else {
          finalizeAnswer(currentSelection);
        }
        return newTimes;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQIndex, isFinalized, timeRemaining, currentSelection]);

  const finalizeAnswer = (answerToFinalize) => {
    if (isFinalized[currentQIndex]) return;
    const newAnswers = [...userAnswers];
    if (isShortAnswer) {
      newAnswers[currentQIndex] = (answerToFinalize[0] || '').trim();
    } else {
      newAnswers[currentQIndex] = question.isMultipleChoice ? answerToFinalize : answerToFinalize[0];
    }
    setUserAnswers(newAnswers);
    const newFinalized = [...isFinalized];
    newFinalized[currentQIndex] = true;
    setIsFinalized(newFinalized);
  };

  const handleSelection = (value) => {
    if (isFinalized[currentQIndex]) return;
    if (isShortAnswer) {
      setCurrentSelection([value]);
    } else if (question.isMultipleChoice) {
      const newSelection = currentSelection.includes(value)
        ? currentSelection.filter(ans => ans !== value)
        : [...currentSelection, value];
      setCurrentSelection(newSelection);
    } else {
      setCurrentSelection([value]);
      finalizeAnswer([value]);
    }
  };

  const handleSubmit = () => {
    if (currentSelection.length > 0) finalizeAnswer(currentSelection);
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) setCurrentQIndex(currentQIndex + 1);
  };
  const handlePrev = () => {
    if (currentQIndex > 0) setCurrentQIndex(currentQIndex - 1);
  };
  const handleQuitTest = () => {
    if (window.confirm("Are you sure you want to quit? Your progress will be lost.")) onGoHome();
  };

  const handleSubmitTest = () => {
    const finalScore = questions.reduce((acc, q, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer === null) return acc;
      let isCorrect = false;
      if (q.answerOptions.length === 1) {
        isCorrect = (userAnswer || '').toLowerCase() === q.correctAnswersList[0].toLowerCase();
      } else if (q.isMultipleChoice) {
        const selectedSet = new Set(userAnswer);
        const correctSet = new Set(q.correctAnswersList);
        isCorrect = selectedSet.size === correctSet.size && [...selectedSet].every(ans => correctSet.has(ans));
      } else {
        isCorrect = q.correctAnswersList.includes(userAnswer);
      }
      return isCorrect ? acc + 1 : acc;
    }, 0);
    onComplete({ score: finalScore, answers: userAnswers });
  };

  const getOptionClass = (optionText) => {
    if (!isFinalized[currentQIndex]) return currentSelection.includes(optionText) ? 'selected' : '';
    const isCorrect = question.correctAnswersList.includes(optionText);
    if (isCorrect) return 'correct';
    if (currentSelection.includes(optionText)) return 'incorrect';
    return '';
  };

  const getShortAnswerClass = () => {
    if (!isFinalized[currentQIndex]) return '';
    const isCorrect = (userAnswers[currentQIndex] || '').toLowerCase() === question.correctAnswersList[0].toLowerCase();
    return isCorrect ? 'correct' : 'incorrect';
  };

  const renderAnswers = () => {
    if (isShortAnswer) {
      return (
        <div className="short-answer-container">
          <input type="text" className={`short-answer-input ${getShortAnswerClass()}`} value={currentSelection[0] || ''} onChange={(e) => handleSelection(e.target.value)} placeholder="Type your answer here..." disabled={isFinalized[currentQIndex]} />
        </div>
      );
    }
    if (question.isMultipleChoice) {
      return (
        <div className="options-grid">
          {question.answerOptions.map((option, index) => (
            <div key={index} className={`checkbox-option ${getOptionClass(option.answerText)}`}>
              <input type="checkbox" id={`q${currentQIndex}-opt${index}`} checked={currentSelection.includes(option.answerText)} onChange={() => handleSelection(option.answerText)} disabled={isFinalized[currentQIndex]} />
              <label htmlFor={`q${currentQIndex}-opt${index}`}>{option.answerText}</label>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="options-grid">
        {question.answerOptions.map((option, index) => (
          <button key={index} className={`option-btn ${getOptionClass(option.answerText)}`} onClick={() => handleSelection(option.answerText)} disabled={isFinalized[currentQIndex]}>
            <span>{option.answerText}</span>
          </button>
        ))}
      </div>
    );
  };

  const remaining = timeRemaining[currentQIndex];
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (remaining / TEST_DURATION) * circumference;

  return (
    <div className="card">
      <div className="quiz-header">
        <button onClick={handleQuitTest} className="btn btn-secondary quit-btn"><FaHome /> Quit</button>
        <div className="progress">Question {currentQIndex + 1} / {questions.length}</div>
        <div className="timer-container">
          <svg className="timer-svg" width="60" height="60" viewBox="0 0 60 60">
            <circle className="timer-circle-bg" cx="30" cy="30" r={radius}></circle>
            <circle className={`timer-circle-progress ${remaining <= 5 ? 'alert' : ''}`} cx="30" cy="30" r={radius} strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}></circle>
          </svg>
          <span className="timer-text">{remaining}s</span>
        </div>
      </div>
      <div className="question-text-container"><p className="question-text">{question.questionText}</p></div>
      {renderAnswers()}
      <div className="quiz-navigation">
        <button onClick={handlePrev} className="btn btn-secondary" disabled={currentQIndex === 0}><FaArrowLeft /> Prev</button>
        {!isFinalized[currentQIndex] && (isShortAnswer || question.isMultipleChoice) && (
          <button onClick={handleSubmit} className="btn btn-primary">Submit Answer</button>
        )}
        {currentQIndex < questions.length - 1 ? (
          <button onClick={handleNext} className="btn btn-primary">Next <FaArrowRight /></button>
        ) : (
          <button onClick={handleSubmitTest} className="btn btn-primary">Finish Test <FaPaperPlane /></button>
        )}
      </div>
    </div>
  );
};

export default TestView;

