import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import './ScoreCard.css';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function ScoreCard({ score, totalQuestions, topicCorrect, topicTotal }) {
  // Data for overall performance
  const overallData = {
    labels: ['Correct', 'Incorrect'],
    datasets: [{
      label: 'Overall Score',
      data: [score, totalQuestions - score],
      backgroundColor: ['#4caf50', '#f44336'],
      borderColor: ['#388e3c', '#d32f2f'],
      borderWidth: 1,
    }]
  };

  // Data for topic-wise bar chart
  const topics = Object.keys(topicTotal);
  const topicPercentages = topics.map(topic =>
    Math.round((topicCorrect[topic] / topicTotal[topic]) * 100)
  );
  const barData = {
    labels: topics,
    datasets: [{
      label: 'Score Percentage (%)',
      data: topicPercentages,
      backgroundColor: '#00897B',
      borderColor: '#00695C',
      borderWidth: 1,
    }]
  };

  const overallPercentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="score-card">
      <h2>Your Score</h2>
      <div className="score-details">
        <p>{score} out of {totalQuestions}</p>
        <p>Overall Percentage: {overallPercentage}%</p>
      </div>
      <div className="charts">
        <div className="chart-item">
          <h3>Overall Performance</h3>
          <Pie data={overallData} />
        </div>
        <div className="chart-item">
          <h3>Topic-wise Performance</h3>
          <Bar data={barData} options={{
            scales: {
              y: { beginAtZero: true, max: 100 }
            }
          }} />
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;
