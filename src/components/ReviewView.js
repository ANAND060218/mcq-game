import React from 'react';
import { FaHome } from 'react-icons/fa';

const ReviewView = ({ questions, userAnswers, onGoHome, user }) => { // Added user prop
  // Calculate the final score
  const score = questions.reduce((acc, question, index) => {
    const userAnswer = userAnswers[index];
    const { correctAnswersList, isMultipleChoice } = question;
    let isCorrect = false;

    if (!userAnswer) return acc; // No answer given

    if (isMultipleChoice) {
      const selectedSet = new Set(userAnswer);
      const correctSet = new Set(correctAnswersList);
      isCorrect = selectedSet.size === correctSet.size && 
                  [...selectedSet].every(ans => correctSet.has(ans));
    } else {
      isCorrect = userAnswer === correctAnswersList[0];
    }
    return isCorrect ? acc + 1 : acc;
  }, 0);

  // Function to style each option during review
  const getOptionClass = (optionText, question, userAnswer) => {
    const isSelected = userAnswer === optionText || (Array.isArray(userAnswer) && userAnswer.includes(optionText));
    const isCorrect = question.correctAnswersList.includes(optionText);

    if (isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    return '';
  };

  return (
    <div className="card review-container">
      <div className="score-summary">
        <h2>Quiz Review for {user.displayName}</h2> {/* Added personalized greeting */}
        <p>You scored <strong>{score}</strong> out of <strong>{questions.length}</strong></p>
      </div>

      {questions.map((question, index) => (
        <div key={index} className="review-item-card">
          <div className="review-header">
            <strong>Question {index + 1}</strong>
            <span className="topic">{question.topic}</span>
          </div>
          <div className="question-image-container"> {/* This container will get updated styles */}
            <img src={question.questionText} alt={`Question ${index + 1}`} className="question-image"/>
          </div>
          <div className="options-grid">
            {question.answerOptions.map((option, optIndex) => (
              <button key={optIndex} className={`option-btn disabled ${getOptionClass(option.answerText, question, userAnswers[index])}`}>
                <span className="option-prefix">{option.answerText.charAt(0)}</span>
                <span>{option.answerText.substring(2)}</span>
              </button>
            ))}
          </div>
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