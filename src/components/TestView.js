import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import { FaHome } from 'react-icons/fa';

const TEST_DURATION = 20;

const TestView = ({ questions, onComplete, onGoHome }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  // This state now tracks all answers for the test session
  const [userAnswers, setUserAnswers] = useState(() => Array(questions.length).fill(null));
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const question = questions[currentQIndex];

  const handleQuitTest = () => {
    if (window.confirm("Are you sure you want to quit the test? Your progress will be lost.")) {
      onGoHome();
    }
  };

  useEffect(() => {
    if (!isAnswered) return;
    
    // Finalize answer for current question
    const finalAnswer = question.isMultipleChoice ? selectedAnswers : selectedAnswers[0];
    const newAnswers = [...userAnswers];
    newAnswers[currentQIndex] = finalAnswer;
    setUserAnswers(newAnswers);

    // Scoring logic
    const { correctAnswersList, isMultipleChoice } = question;
    let isRoundCorrect = false;
    if (finalAnswer) {
        if (isMultipleChoice) {
            const selectedSet = new Set(finalAnswer);
            const correctSet = new Set(correctAnswersList);
            isRoundCorrect = selectedSet.size === correctSet.size && [...selectedSet].every(ans => correctSet.has(ans));
        } else {
            isRoundCorrect = correctAnswersList.includes(finalAnswer);
        }
    }
    if (isRoundCorrect) setScore(s => s + 1);
    
    const timeout = setTimeout(goToNextQuestion, 1200);
    return () => clearTimeout(timeout);

  }, [isAnswered]);


  const handleSelectAnswer = (optionText) => {
    if (isAnswered) return;
    if (question.isMultipleChoice) {
      const newSelection = selectedAnswers.includes(optionText)
        ? selectedAnswers.filter(ans => ans !== optionText)
        : [...selectedAnswers, optionText];
      setSelectedAnswers(newSelection);
    } else {
      setSelectedAnswers([optionText]);
      setIsAnswered(true);
    }
  };

  const handleSubmitMultiple = () => {
      if (selectedAnswers.length > 0) setIsAnswered(true);
  };

  const goToNextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(i => i + 1);
      setSelectedAnswers([]);
      setIsAnswered(false);
      setTimerKey(k => k + 1);
    } else {
      // --- CRUCIAL CHANGE: Return both score and the full answers array ---
      const finalAnswers = [...userAnswers];
      finalAnswers[currentQIndex] = question.isMultipleChoice ? selectedAnswers : selectedAnswers[0];
      onComplete({ score, answers: finalAnswers });
    }
  };
  
  const getOptionClass = (optionText) => {
    if (!isAnswered) return selectedAnswers.includes(optionText) ? 'selected' : '';
    const isCorrect = question.correctAnswersList.includes(optionText);
    if (isCorrect) return 'correct';
    if (selectedAnswers.includes(optionText)) return 'incorrect';
    return '';
  };

  return (
    <div className="card">
      <div className="quiz-header">
        <button onClick={handleQuitTest} className="btn btn-secondary quit-btn">
          <FaHome /> Quit
        </button>
        <div className="progress">Question {currentQIndex + 1} / {questions.length}</div>
        <Timer key={timerKey} duration={TEST_DURATION} onTimeUp={() => setIsAnswered(true)} />
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
            disabled={isAnswered}
          >
            <span className="option-prefix">{option.answerText.charAt(0)}</span>
            <span>{option.answerText.substring(2)}</span>
          </button>
        ))}
      </div>

      {question.isMultipleChoice && !isAnswered && (
          <div className="quiz-navigation">
              <button onClick={handleSubmitMultiple} className="btn btn-primary">Submit Answers</button>
          </div>
      )}
    </div>
  );
};

export default TestView;