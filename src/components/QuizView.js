import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaHome, FaPaperPlane, FaLightbulb } from 'react-icons/fa';

const QuizView = ({ questions, onComplete, onGoHome }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  // This state holds answers for the entire quiz to support final submission
  const [answers, setAnswers] = useState(() =>
    questions.map(q => (q.isMultipleChoice ? [] : null))
  );
  // This state tracks if the solution for the CURRENT question should be shown
  const [showSolution, setShowSolution] = useState(false);

  const question = questions[currentQIndex];

  const handleSelectAnswer = (optionText) => {
    // Don't allow changing an answer after its solution has been viewed
    if (showSolution) return;

    const newAnswers = [...answers];
    if (question.isMultipleChoice) {
      const currentSelection = newAnswers[currentQIndex] || [];
      const newSelection = currentSelection.includes(optionText)
        ? currentSelection.filter(ans => ans !== optionText)
        : [...currentSelection, optionText];
      newAnswers[currentQIndex] = newSelection;
    } else {
      newAnswers[currentQIndex] = optionText;
    }
    setAnswers(newAnswers);
  };
  
  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      // Reset the solution view for the next question
      setShowSolution(false);
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(currentQIndex - 1);
      // Reset the solution view for the previous question
      setShowSolution(false);
    }
  };

  const getOptionClass = (optionText) => {
    const currentAnswer = answers[currentQIndex];
    const isSelected = Array.isArray(currentAnswer)
      ? (currentAnswer || []).includes(optionText)
      : currentAnswer === optionText;

    // If solution is not being shown, only highlight the selected option
    if (!showSolution) {
      return isSelected ? 'selected' : '';
    }
    
    // If solution IS being shown, apply correct/incorrect feedback
    const isCorrect = question.correctAnswersList.includes(optionText);
    if (isCorrect) return 'correct';
    if (isSelected && !isCorrect) return 'incorrect';
    return '';
  };

  const isCurrentQuestionAnswered = Array.isArray(answers[currentQIndex])
    ? (answers[currentQIndex] || []).length > 0
    : answers[currentQIndex] !== null;

  return (
    <div className="card">
      <div className="quiz-header">
        <div className="progress">Question {currentQIndex + 1} / {questions.length}</div>
        <div className="topic">{question.topic}</div>
      </div>

      <div className="question-image-container">
        <img src={question.questionText} alt={`Question ${currentQIndex + 1}`} className="question-image"/>
      </div>
      
      <div className="options-grid">
        {question.answerOptions.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${getOptionClass(option.answerText)}`}
            onClick={() => handleSelectAnswer(option.answerText)}
            disabled={showSolution} // Disable options after viewing solution
          >
            <span className="option-prefix">{option.answerText.charAt(0)}</span>
            <span>{option.answerText.substring(2)}</span>
          </button>
        ))}
      </div>

      {/* Show "View Solution" button only if an answer is selected AND solution is not yet shown */}
      {isCurrentQuestionAnswered && !showSolution && (
        <div className="quiz-navigation" style={{ justifyContent: 'center', marginTop: '1rem' }}>
          <button onClick={() => setShowSolution(true)} className="btn btn-secondary">
            <FaLightbulb /> If not sure,View Solution
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

        {/* Show "Next" button on all but the last question */}
        {currentQIndex < questions.length - 1 && (
          <button onClick={handleNext} className="btn btn-primary">
            Next <FaArrowRight />
          </button>
        )}

        {/* Show "Submit Quiz" button ONLY on the last question */}
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