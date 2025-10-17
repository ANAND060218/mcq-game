import React from 'react';
import { FaHome } from 'react-icons/fa';

const ReviewView = ({ questions, userAnswers, onGoHome, user }) => {
  const score = questions.reduce((acc, question, index) => {
    const userAnswer = userAnswers[index];
    const { correctAnswersList, isMultipleChoice } = question;
    let isCorrect = false;

    if (userAnswer === null || userAnswer === undefined) return acc;

    if (question.answerOptions.length === 1) {
      // FIX: Ensure userAnswer is treated as a string before .toLowerCase()
      isCorrect = String(userAnswer || '').trim().toLowerCase() === correctAnswersList[0].toLowerCase();
    } else if (isMultipleChoice) {
      const selectedSet = new Set(userAnswer);
      const correctSet = new Set(correctAnswersList);
      isCorrect = selectedSet.size === correctSet.size &&
        [...selectedSet].every(ans => correctSet.has(ans));
    } else {
      isCorrect = userAnswer === correctAnswersList[0];
    }
    return isCorrect ? acc + 1 : acc;
  }, 0);

  const getOptionClass = (optionText, question, userAnswer) => {
    const isSelected = userAnswer === optionText || (Array.isArray(userAnswer) && userAnswer.includes(optionText));
    const isCorrect = question.correctAnswersList.includes(optionText);

    if (isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    return '';
  };
  
  const renderAnswers = (question, index) => {
    const userAnswer = userAnswers[index];
    const isShortAnswer = question.answerOptions.length === 1;

    if (isShortAnswer) {
      // FIX: Ensure userAnswer is treated as a string before .toLowerCase()
      const isCorrect = String(userAnswer || '').trim().toLowerCase() === question.correctAnswersList[0].toLowerCase();
      return (
        <div className="short-answer-container">
          <input
            type="text"
            className={`short-answer-input ${isCorrect ? 'correct' : 'incorrect'}`}
            value={userAnswer || ''}
            disabled
          />
        </div>
      );
    }

    if (question.isMultipleChoice) {
      return (
        <div className="options-grid">
          {question.answerOptions.map((option, optIndex) => (
            <div key={optIndex} className={`checkbox-option disabled ${getOptionClass(option.answerText, question, userAnswer)}`}>
              <input
                type="checkbox"
                id={`rev${index}-opt${optIndex}`}
                checked={(userAnswer || []).includes(option.answerText)}
                disabled
              />
              <label htmlFor={`rev${index}-opt${optIndex}`}>{option.answerText}</label>
            </div>
          ))}
        </div>
      );
    }

    return (
       <div className="options-grid">
        {question.answerOptions.map((option, optIndex) => (
          <button key={optIndex} className={`option-btn disabled ${getOptionClass(option.answerText, question, userAnswer)}`}>
            <span>{option.answerText}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="card review-container">
      <div className="score-summary">
        <h2>Quiz Review for {user.displayName}</h2>
        <p>You scored <strong>{score}</strong> out of <strong>{questions.length}</strong></p>
      </div>

      {questions.map((question, index) => (
        <div key={index} className="review-item-card">
          <div className="review-header">
            <strong>Question {index + 1}</strong>
            <span className="topic">{question.topic}</span>
          </div>

          <div className="question-text-container">
            <p className="question-text">{question.questionText}</p>
          </div>
          
          {renderAnswers(question, index)}

          <div className="solution-box">
            <h4>Explanation:</h4>
            <p>{question.solution}</p>
          </div>
        </div>
      ))}
      <div className="quiz-navigation">
        <button onClick={onGoHome} className="btn btn-primary">
          <FaHome /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default ReviewView;
