import React from 'react';
import { Building2, Activity, Users, Clock, Wifi, WifiOff } from 'lucide-react';

const HospitalStatus: React.FC = () => {
  const hospitals = [
    {
      name: 'PAHS',
      fullName: 'Pokhara Academy of Health Sciences',
      status: 'online',
      screenings: 23,
      avgTime: '3.1 min',
      accuracy: '97.8%',
      load: 78
    },
    {
      name: 'GMC',
      fullName: 'Gandaki Medical College',
      status: 'online',
      screenings: 18,
      avgTime: '3.3 min',
      accuracy: '97.1%',
      load: 65
    },
    {
      name: 'MTH',
      fullName: 'Manipal Teaching Hospital',
      status: 'online',
      screenings: 31,
      avgTime: '2.9 min',
      accuracy: '97.5%',
      load: 89
    },
    {
      name: 'WRH',
      fullName: 'Western Regional Hospital',
      status: 'maintenance',
      screenings: 0,
      avgTime: '- min',
      accuracy: '-',
      load: 0
    },
    {
      name: 'DHC-1',
      fullName: 'District Health Center',
      status: 'online',
      screenings: 12,
      avgTime: '3.5 min',
      accuracy: '96.9%',
      load: 45
    }
  ];

  return (
    <div className="medical-card">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Hospital Network Status</h3>
      
      <div className="space-y-4">
        {hospitals.map((hospital, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Building2 className="text-gray-400" size={16} />
                  <span className="font-medium text-gray-900">{hospital.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  {hospital.status === 'online' ? (
                    <Wifi className="text-green-500" size={14} />
                  ) : (
                    <WifiOff className="text-red-500" size={14} />
                  )}
                  <span className={`text-xs font-medium ${
                    hospital.status === 'online' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {hospital.status}
                  </span>
                </div>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium ${
                hospital.load > 80 ? 'bg-red-100 text-red-700' :
                hospital.load > 60 ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {hospital.load}% load
              </div>
            </div>
            
            <div className="text-xs text-gray-600 mb-3">{hospital.fullName}</div>
            
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="text-center">
                <div className="font-semibold text-gray-900">{hospital.screenings}</div>
                <div className="text-gray-500 text-xs">Today</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">{hospital.avgTime}</div>
                <div className="text-gray-500 text-xs">Avg Time</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">{hospital.accuracy}</div>
                <div className="text-gray-500 text-xs">Accuracy</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">4/5</div>
            <div className="text-gray-600">Online</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-medical-600">84</div>
            <div className="text-gray-600">Total Today</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalStatus;