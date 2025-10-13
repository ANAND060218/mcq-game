import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FaHome } from 'react-icons/fa';

// Register the components needed for a bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FullScoreCard = ({ user, questions, userAnswers, onGoHome }) => {
  // Use useMemo to calculate scores only when data changes
  const weeklyScores = useMemo(() => {
    const results = {};
    questions.forEach((question, index) => {
      const topic = question.topic;
      if (!results[topic]) {
        results[topic] = { correct: 0, total: 0 };
      }
      results[topic].total += 1;

      const userAnswer = userAnswers[index];
      const { correctAnswersList, isMultipleChoice } = question;
      let isCorrect = false;

      if (userAnswer) {
        if (isMultipleChoice) {
          const selectedSet = new Set(userAnswer);
          const correctSet = new Set(correctAnswersList);
          isCorrect = selectedSet.size === correctSet.size && [...selectedSet].every(ans => correctSet.has(ans));
        } else {
          isCorrect = userAnswer === correctAnswersList[0];
        }
      }
      if (isCorrect) {
        results[topic].correct += 1;
      }
    });
    return results;
  }, [questions, userAnswers]);

  const overallScore = Object.values(weeklyScores).reduce((acc, week) => acc + week.correct, 0);
  const totalQuestions = questions.length;

  // Prepare data for the bar chart
  const chartLabels = Object.keys(weeklyScores);
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Correct Answers',
        data: chartLabels.map(week => weeklyScores[week].correct),
        backgroundColor: 'rgba(52, 168, 83, 0.7)',
        borderColor: 'rgba(52, 168, 83, 1)',
        borderWidth: 1,
      },
       {
        label: 'Total Questions',
        data: chartLabels.map(week => weeklyScores[week].total),
        backgroundColor: 'rgba(234, 67, 53, 0.5)',
        borderColor: 'rgba(234, 67, 53, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Your Performance by Week' },
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
    },
  };

  return (
    <div className="card full-score-card">
      <div className="score-summary">
        <h2>Full Test Results for {user.displayName}</h2>
        <p>Overall Score: <strong>{overallScore}</strong> / <strong>{totalQuestions}</strong></p>
      </div>

      <div className="chart-container-large">
        <Bar options={chartOptions} data={chartData} />
      </div>

      <div className="weekly-results">
        <h3>Detailed Breakdown</h3>
        <ul>
          {Object.entries(weeklyScores).map(([week, scores]) => (
            <li key={week}>
              <span>{week}:</span>
              <strong>{scores.correct} / {scores.total} correct</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="quiz-navigation">
        <button onClick={onGoHome} className="btn btn-primary">
          <FaHome /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default FullScoreCard;