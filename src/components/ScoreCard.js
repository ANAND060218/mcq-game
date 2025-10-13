import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaHome } from 'react-icons/fa'; // FaRedo has been removed from this line

ChartJS.register(ArcElement, Tooltip, Legend);

const ScoreCard = ({ user, score, totalQuestions, onRetry }) => {
  const wrongAnswers = totalQuestions - score;
  const percentage = totalQuestions > 0 ? ((score / totalQuestions) * 100).toFixed(1) : 0;

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        data: [score, wrongAnswers],
        backgroundColor: ['#34a853', '#ea4335'],
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="card score-card">
      <h2>Test Complete, {user.displayName}!</h2>
      <div className="score-summary">
        You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong> ({percentage}%)
      </div>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
      <div className="score-card-actions">
        <button onClick={onRetry} className="btn btn-secondary">
          <FaHome /> Go to Home
        </button>
      </div>
    </div>
  );
};

export default ScoreCard;