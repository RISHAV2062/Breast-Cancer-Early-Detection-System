import React from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const PerformanceCharts: React.FC = () => {
  const accuracyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'System Accuracy',
        data: [95.2, 95.8, 96.1, 96.4, 96.7, 97.0, 97.1, 97.2, 97.3, 97.3, 97.2, 97.3],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Radiologist Agreement',
        data: [92.1, 92.8, 93.2, 93.6, 94.0, 94.3, 94.5, 94.6, 94.7, 94.7, 94.6, 94.7],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const detectionData = {
    labels: ['Stage 0', 'Stage I', 'Stage II', 'Stage III', 'Stage IV'],
    datasets: [
      {
        data: [23, 45, 18, 10, 4],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const hospitalData = {
    labels: ['PAHS', 'GMC', 'MTH', 'WRH', 'Others'],
    datasets: [
      {
        label: 'Monthly Screenings',
        data: [1250, 890, 1520, 980, 2360],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
      {
        label: 'Cancer Detections',
        data: [12, 8, 15, 9, 21],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="medical-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Performance Trends</h3>
        <div className="h-80">
          <Line data={accuracyData} options={chartOptions} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="medical-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cancer Stage Distribution</h3>
          <div className="h-64">
            <Doughnut 
              data={detectionData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }} 
            />
          </div>
        </div>

        <div className="medical-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Hospital Performance</h3>
          <div className="h-64">
            <Bar data={hospitalData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCharts;