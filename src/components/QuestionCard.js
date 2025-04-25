import React from 'react';
import './QuestionCard.css';

function QuestionCard({ question, questionNumber, totalQuestions, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="question-card">
      <header className="game-header">
        <h1>MCQ Game</h1>
      </header>
      <div className="question-header">
        <div className="question-number">
          Question {questionNumber} of {totalQuestions}
        </div>
        <div className="question-topic">
          <em>Topic: {question.week}</em>
        </div>
      </div>
      <div className="question-text">
        {question.questionText.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="answer-section">
        {question.answerOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`answer-button ${selectedAnswer === index ? 'selected' : ''}`}
          >
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
