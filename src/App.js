import React, { useState, useEffect } from 'react';
import './App.css';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import allQuestionsData from './components/questions.json';

// Import all necessary components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import QuizView from './components/QuizView';
import TestView from './components/TestView';
import ScoreCard from './components/ScoreCard';
import ReviewView from './components/ReviewView';
import FullScoreCard from './components/FullScoreCard';
import MatrixRain from './components/MatrixRain'; // The new background animation component

// The data processing logic maps the description directly from the question object.
const processedQuestions = allQuestionsData.map(question => {
  // Determine the list of correct answers from the options.
  const correctAnswersList = question.answerOptions
    .filter(opt => opt.isCorrect)
    .map(opt => opt.answerText);
  
  // Return a processed question object.
  return { 
    ...question, 
    isMultipleChoice: correctAnswersList.length > 1, 
    correctAnswersList, 
    // Use the 'ansdescrption' field from the JSON as the solution.
    solution: question.ansdescrption || 'No solution available.' 
  };
});

function App() {
  const [theme, setTheme] = useState('dark');
  const [view, setView] = useState('home');
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [isFullTest, setIsFullTest] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (!currentUser) setView('home');
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleStartQuiz = week => {
    setQuestions(processedQuestions.filter(q => q.topic === week));
    setView('quiz');
  };

  const handleStartTest = (mode, week) => {
    const testQuestions = mode === 'random'
      ? [...processedQuestions].sort(() => 0.5 - Math.random()).slice(0, 20)
      : processedQuestions.filter(q => q.topic === week).sort(() => 0.5 - Math.random());
    setQuestions(testQuestions);
    setIsFullTest(false);
    setView('test');
  };

  const handleStartFullTest = () => {
    setQuestions(processedQuestions);
    setIsFullTest(true);
    setView('test');
  };

  const handleQuizSubmit = finalAnswers => {
    setUserAnswers(finalAnswers);
    setView('review');
  };

  const handleTestComplete = result => {
    if (isFullTest) {
      setQuestions(processedQuestions);
      setUserAnswers(result.answers);
      setView('full_score');
    } else {
      setScore(result.score);
      setTotalQuestions(questions.length);
      setView('score');
    }
  };

  const handleGoHome = () => {
    setView('home');
    setQuestions([]);
    setUserAnswers([]);
    setScore(0);
    setIsFullTest(false);
  };

  const renderContent = () => {
    // If the user is logged in and not on the home screen, show the active component.
    if (user && view !== 'home') {
        switch (view) {
            case 'quiz': return <QuizView questions={questions} onComplete={handleQuizSubmit} onGoHome={handleGoHome} />;
            case 'test': return <TestView questions={questions} onComplete={handleTestComplete} onGoHome={handleGoHome} />;
            case 'review': return <ReviewView user={user} questions={questions} userAnswers={userAnswers} onGoHome={handleGoHome} />;
            case 'full_score': return <FullScoreCard user={user} questions={questions} userAnswers={userAnswers} onGoHome={handleGoHome} />;
            case 'score': return <ScoreCard user={user} score={score} totalQuestions={totalQuestions} onRetry={handleGoHome} />;
            default: break; // Fall through to render HomePage
        }
    }
    
    // Default case: render HomePage if view is 'home' or if the user is logged out.
    return (
        <HomePage 
            user={user} 
            onStartQuiz={handleStartQuiz} 
            onStartTest={handleStartTest} 
            onStartFullTest={handleStartFullTest} 
            allQuestions={processedQuestions} 
        />
    );
  };

  return (
    <div className="app-wrapper">
      {/* Conditionally render the MatrixRain background only when a user is logged in */}
      {user && <MatrixRain />}
      
      <Header user={user} theme={theme} toggleTheme={toggleTheme} />
      <main className="app-content">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
