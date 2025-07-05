import React from 'react';

const ClinicalPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Clinical Interface</h1>
          <p className="text-gray-600">Clinical workflow management and patient case review system.</p>
        </div>
        
        <div className="mt-12 medical-card text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600">
            Comprehensive clinical interface for radiologists and healthcare providers 
            to review cases, manage workflows, and collaborate on diagnoses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClinicalPage;