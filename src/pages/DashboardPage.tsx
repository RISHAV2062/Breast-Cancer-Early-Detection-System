import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import MetricsOverview from '../components/dashboard/MetricsOverview';
import RecentActivity from '../components/dashboard/RecentActivity';
import PerformanceCharts from '../components/dashboard/PerformanceCharts';
import HospitalStatus from '../components/dashboard/HospitalStatus';
import AlertsPanel from '../components/dashboard/AlertsPanel';

const DashboardPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MetricsOverview />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <PerformanceCharts />
            <RecentActivity />
          </div>
          <div className="space-y-8">
            <HospitalStatus />
            <AlertsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;