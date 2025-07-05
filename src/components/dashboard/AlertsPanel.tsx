import React from 'react';
import { AlertTriangle, Info, CheckCircle, X } from 'lucide-react';

const AlertsPanel: React.FC = () => {
  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'High System Load',
      message: 'MTH experiencing 89% capacity. Consider load balancing.',
      time: '5 minutes ago',
      priority: 'medium'
    },
    {
      id: 2,
      type: 'info',
      title: 'Maintenance Scheduled',
      message: 'WRH system maintenance completed successfully.',
      time: '1 hour ago',
      priority: 'low'
    },
    {
      id: 3,
      type: 'success',
      title: 'Model Update',
      message: 'AI model v2.1.3 deployed across all hospitals.',
      time: '2 hours ago',
      priority: 'low'
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return AlertTriangle;
      case 'info':
        return Info;
      case 'success':
        return CheckCircle;
      default:
        return Info;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'text-orange-600 bg-orange-50';
      case 'info':
        return 'text-blue-600 bg-blue-50';
      case 'success':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="medical-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">System Alerts</h3>
        <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
          {alerts.filter(alert => alert.priority === 'medium').length} Active
        </span>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => {
          const Icon = getAlertIcon(alert.type);
          const colorClass = getAlertColor(alert.type);
          
          return (
            <div key={alert.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`p-1 rounded-full ${colorClass}`}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{alert.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{alert.time}</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <X size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full text-center text-medical-600 hover:text-medical-700 text-sm font-medium">
          View All Alerts
        </button>
      </div>
    </div>
  );
};

export default AlertsPanel;