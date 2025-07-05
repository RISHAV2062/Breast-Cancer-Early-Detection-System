import React from 'react';
import { Calendar, Download, RefreshCw, Settings } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Clinical Dashboard</h1>
            <p className="text-gray-600 mt-1">Real-time monitoring of breast cancer detection system</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar size={20} />
              <span>Last updated: 2 minutes ago</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="btn-secondary flex items-center space-x-2">
                <RefreshCw size={16} />
                <span>Refresh</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <Download size={16} />
                <span>Export</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <Settings size={16} />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;