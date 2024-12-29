// src/components/ProgressChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressChart = ({ courses }) => {
  const chartData = {
    labels: courses.map(course => course.title),  // Labels from course titles
    datasets: [
      {
        label: "Completion Progress",
        data: courses.map(course => (course.completed ? 100 : 0)),  // 100 for completed, 0 for not completed
        fill: true,
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "#4caf50",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`, // Show percentage in tooltips
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Courses",
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        title: {
          display: true,
          text: "Progress (%)",
        },
      },
    },
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Course Completion Progress</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ProgressChart;
