import React from 'react';
import { Activity, Users, Clock, Target, TrendingUp, AlertTriangle } from 'lucide-react';

const MetricsOverview: React.FC = () => {
  const metrics = [
    {
      icon: Activity,
      title: 'System Accuracy',
      value: '97.3%',
      change: '+0.2%',
      trend: 'up',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Daily Screenings',
      value: '247',
      change: '+12%',
      trend: 'up',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Avg Processing Time',
      value: '3.2 min',
      change: '-0.3 min',
      trend: 'up',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Target,
      title: 'Cancer Detection Rate',
      value: '8.2/1000',
      change: '+0.4',
      trend: 'up',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: TrendingUp,
      title: 'Network Uptime',
      value: '99.97%',
      change: '+0.01%',
      trend: 'up',
      color: 'text-medical-600',
      bgColor: 'bg-medical-50'
    },
    {
      icon: AlertTriangle,
      title: 'Active Alerts',
      value: '3',
      change: '-2',
      trend: 'up',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="medical-card">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={metric.color} size={20} />
            </div>
            <div className={`text-sm font-medium ${
              metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.change}
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
          <div className="text-gray-600 text-sm">{metric.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MetricsOverview;