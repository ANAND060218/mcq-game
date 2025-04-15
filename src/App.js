import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import ScoreCard from './components/ScoreCard';
import './App.css';

const questions = [
  {
    questionText: "What is the capital of France?",
    topic: "Geography",
    answerOptions: [
      { answerText: "Paris", isCorrect: true },
      { answerText: "Madrid", isCorrect: false },
      { answerText: "Berlin", isCorrect: false },
      { answerText: "London", isCorrect: false }
    ]
  },
  {
    questionText: "Which language is used in React?",
    topic: "Programming",
    answerOptions: [
      { answerText: "JavaScript", isCorrect: true },
      { answerText: "Python", isCorrect: false },
      { answerText: "C++", isCorrect: false },
      { answerText: "Java", isCorrect: false }
    ]
  },
  {
    questionText: "Who is the current CEO of Tesla (2023)?",
    topic: "Technology",
    answerOptions: [
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false }
    ]
  },
  {
    questionText: "What is the largest planet in our solar system?",
    topic: "Astronomy",
    answerOptions: [
      { answerText: "Jupiter", isCorrect: true },
      { answerText: "Saturn", isCorrect: false },
      { answerText: "Earth", isCorrect: false },
      { answerText: "Mars", isCorrect: false }
    ]
  },
  {
    questionText: "Which country hosted the 2016 Summer Olympics?",
    topic: "Sports",
    answerOptions: [
      { answerText: "Brazil", isCorrect: true },
      { answerText: "China", isCorrect: false },
      { answerText: "UK", isCorrect: false },
      { answerText: "USA", isCorrect: false }
    ]
  },
  {
    questionText: "What is the boiling point of water at sea level (°C)?",
    topic: "Science",
    answerOptions: [
      { answerText: "100°C", isCorrect: true },
      { answerText: "90°C", isCorrect: false },
      { answerText: "120°C", isCorrect: false },
      { answerText: "80°C", isCorrect: false }
    ]
  }
];

// Generate a list of unique topics and initialize a topicCorrect tracker
const topics = Array.from(new Set(questions.map(q => q.topic)));
const initialTopicCorrect = {};
topics.forEach(topic => { initialTopicCorrect[topic] = 0; });

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // answers is an array that holds the selected option index for each question (or null)
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showScore, setShowScore] = useState(false);

  // To calculate topic-wise counts, we compute totals per topic.
  const topicTotal = {};
  questions.forEach(q => {
    topicTotal[q.topic] = (topicTotal[q.topic] || 0) + 1;
  });

  // Handler for selecting an answer option
  const handleSelectAnswer = (optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = optionIndex;
    setAnswers(updatedAnswers);
  };

  // Navigation handlers
  const goToPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Submit the quiz and show score
  const handleSubmit = () => {
    setShowScore(true);
  };

  // Compute overall score and topic wise score from user answers
  let score = 0;
  const topicCorrect = { ...initialTopicCorrect };

  answers.forEach((selectedIndex, idx) => {
    if (selectedIndex !== null) {
      const isCorrect = questions[idx].answerOptions[selectedIndex].isCorrect;
      if (isCorrect) {
        score += 1;
        const topic = questions[idx].topic;
        topicCorrect[topic] += 1;
      }
    }
  });

  return (
    <div className="app-container">
      { !showScore ? (
        <div className="quiz-container">
          <QuestionCard 
            question={questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            selectedAnswer={answers[currentQuestion]}
            onSelectAnswer={handleSelectAnswer}
          />
          <div className="navigation-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0} className="nav-button">Prev</button>
            {currentQuestion < questions.length - 1 ? (
              <button onClick={goToNext} className="nav-button">Next</button>
            ) : (
              <button onClick={handleSubmit} className="nav-button submit-button" disabled={answers.includes(null)}>
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <ScoreCard 
          score={score}
          totalQuestions={questions.length}
          topicCorrect={topicCorrect}
          topicTotal={topicTotal}
        />
      )}
    </div>
  );
}

export default App;
