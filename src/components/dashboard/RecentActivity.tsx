import React from 'react';
import { Clock, CheckCircle, AlertCircle, User, Building2 } from 'lucide-react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'screening',
      icon: CheckCircle,
      title: 'Screening Completed',
      description: 'Patient ID: BC-2024-1247 - Normal findings, BI-RADS 1',
      hospital: 'Pokhara Academy of Health Sciences',
      time: '2 minutes ago',
      status: 'completed',
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'detection',
      icon: AlertCircle,
      title: 'Suspicious Finding Detected',
      description: 'Patient ID: BC-2024-1248 - Requires follow-up, BI-RADS 4',
      hospital: 'Gandaki Medical College',
      time: '5 minutes ago',
      status: 'attention',
      color: 'text-orange-600'
    },
    {
      id: 3,
      type: 'screening',
      icon: CheckCircle,
      title: 'Screening Completed',
      description: 'Patient ID: BC-2024-1249 - Benign findings, BI-RADS 2',
      hospital: 'Manipal Teaching Hospital',
      time: '8 minutes ago',
      status: 'completed',
      color: 'text-green-600'
    },
    {
      id: 4,
      type: 'system',
      icon: User,
      title: 'Radiologist Review',
      description: 'Dr. Sharma reviewed 15 cases - 100% agreement with AI',
      hospital: 'Western Regional Hospital',
      time: '12 minutes ago',
      status: 'info',
      color: 'text-blue-600'
    },
    {
      id: 5,
      type: 'screening',
      icon: CheckCircle,
      title: 'Screening Completed',
      description: 'Patient ID: BC-2024-1250 - Normal findings, BI-RADS 1',
      hospital: 'Pokhara Academy of Health Sciences',
      time: '15 minutes ago',
      status: 'completed',
      color: 'text-green-600'
    },
    {
      id: 6,
      type: 'detection',
      icon: AlertCircle,
      title: 'High-Risk Finding',
      description: 'Patient ID: BC-2024-1251 - Immediate biopsy recommended, BI-RADS 5',
      hospital: 'Gandaki Medical College',
      time: '18 minutes ago',
      status: 'urgent',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="medical-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-medical-600 hover:text-medical-700 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`p-1 rounded-full ${
              activity.status === 'urgent' ? 'bg-red-100' :
              activity.status === 'attention' ? 'bg-orange-100' :
              activity.status === 'completed' ? 'bg-green-100' :
              'bg-blue-100'
            }`}>
              <activity.icon className={activity.color} size={16} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock size={12} />
                  <span className="text-xs">{activity.time}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              <div className="flex items-center space-x-1 mt-2">
                <Building2 size={12} className="text-gray-400" />
                <span className="text-xs text-gray-500">{activity.hospital}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;