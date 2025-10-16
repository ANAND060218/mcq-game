import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaHome, FaPaperPlane, FaLightbulb } from 'react-icons/fa';

const QuizView = ({ questions, onComplete, onGoHome }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState(() =>
    questions.map(q => (q.isMultipleChoice ? [] : null))
  );
  const [showSolution, setShowSolution] = useState(false);

  const question = questions[currentQIndex];
  const isShortAnswer = question.answerOptions.length === 1;

  // Handler for all answer selections
  const handleAnswerChange = (value, isCheckbox = false) => {
    if (showSolution) return;
    const newAnswers = [...answers];

    if (isCheckbox) { // Handle checkbox (MSQ) logic
      const currentSelection = newAnswers[currentQIndex] || [];
      const newSelection = currentSelection.includes(value)
        ? currentSelection.filter(ans => ans !== value)
        : [...currentSelection, value];
      newAnswers[currentQIndex] = newSelection;
    } else { // Handle text input and single-choice buttons
      newAnswers[currentQIndex] = value;
    }
    setAnswers(newAnswers);
  };
  
  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      setShowSolution(false);
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(currentQIndex - 1);
      setShowSolution(false);
    }
  };

  // Gets styling for MCQ/MSQ options
  const getOptionClass = (optionText) => {
    const currentAnswer = answers[currentQIndex];
    const isSelected = Array.isArray(currentAnswer)
      ? (currentAnswer || []).includes(optionText)
      : currentAnswer === optionText;

    if (!showSolution) {
      return isSelected ? 'selected' : '';
    }
    
    const isCorrect = question.correctAnswersList.includes(optionText);
    if (isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    return '';
  };
  
  // Gets styling for short answer input
  const getShortAnswerClass = () => {
      if (!showSolution) return '';
      const userAnswer = (answers[currentQIndex] || '').trim().toLowerCase();
      const correctAnswer = question.correctAnswersList[0].toLowerCase();
      return userAnswer === correctAnswer ? 'correct' : 'incorrect';
  }

  const isCurrentQuestionAnswered = Array.isArray(answers[currentQIndex])
    ? (answers[currentQIndex] || []).length > 0
    : answers[currentQIndex] !== null && answers[currentQIndex] !== '';

  const renderAnswers = () => {
    if (isShortAnswer) {
      return (
        <div className="short-answer-container">
          <input
            type="text"
            className={`short-answer-input ${getShortAnswerClass()}`}
            value={answers[currentQIndex] || ''}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder="Type your answer here..."
            disabled={showSolution}
          />
        </div>
      );
    }

    if (question.isMultipleChoice) {
      return (
        <div className="options-grid">
          {question.answerOptions.map((option, index) => (
            <div key={index} className={`checkbox-option ${getOptionClass(option.answerText)}`}>
              <input
                type="checkbox"
                id={`q${currentQIndex}-opt${index}`}
                checked={(answers[currentQIndex] || []).includes(option.answerText)}
                onChange={() => handleAnswerChange(option.answerText, true)}
                disabled={showSolution}
              />
              <label htmlFor={`q${currentQIndex}-opt${index}`}>{option.answerText}</label>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="options-grid">
        {question.answerOptions.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${getOptionClass(option.answerText)}`}
            onClick={() => handleAnswerChange(option.answerText)}
            disabled={showSolution}
          >
            <span>{option.answerText}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="card">
      <div className="quiz-header">
        <div className="progress">Question {currentQIndex + 1} / {questions.length}</div>
        <div className="topic">{question.topic}</div>
      </div>

      <div className="question-text-container">
        <p className="question-text">{question.questionText}</p>
      </div>
      
      {renderAnswers()}

      {isCurrentQuestionAnswered && !showSolution && (
        <div className="quiz-navigation" style={{ justifyContent: 'center', marginTop: '1rem' }}>
          <button onClick={() => setShowSolution(true)} className="btn btn-secondary">
            <FaLightbulb /> If not sure, View Solution
          </button>
        </div>
      )}
      
      {showSolution && (
        <div className="solution-box">
          <h4>Explanation:</h4>
          <p>{question.solution}</p>
        </div>
      )}

      <div className="quiz-navigation">
        <button onClick={handlePrev} className="btn btn-secondary" disabled={currentQIndex === 0}>
          <FaArrowLeft /> Prev
        </button>
        <button onClick={onGoHome} className="btn btn-secondary">
          <FaHome/> Home
        </button>

        {currentQIndex < questions.length - 1 && (
          <button onClick={handleNext} className="btn btn-primary">
            Next <FaArrowRight />
          </button>
        )}

        {currentQIndex === questions.length - 1 && (
          <button onClick={() => onComplete(answers)} className="btn btn-primary">
            Submit Quiz <FaPaperPlane />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizView;

