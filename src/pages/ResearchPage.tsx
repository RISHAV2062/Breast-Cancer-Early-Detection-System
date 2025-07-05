import React from 'react';

const ResearchPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Research & Publications</h1>
          <p className="text-gray-600">Scientific research, clinical trials, and academic publications.</p>
        </div>
        
        <div className="mt-12 medical-card text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600">
            Research portal featuring clinical trial data, peer-reviewed publications, 
            and collaborative research opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;