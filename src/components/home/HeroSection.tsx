import React from 'react';
import { Award, Activity, MapPin, Users, Target, Clock } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 medical-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Award className="text-yellow-300" size={28} />
            <span className="text-lg font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Ministry of Health and Education Recognition - Nepal
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI-Powered Breast Cancer
            <span className="block text-yellow-300">Detection System</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Revolutionary artificial intelligence system serving <strong>15 hospitals</strong> across 
            <strong> 23 districts</strong> in western Nepal with <strong>97.3% accuracy</strong> 
            and official government endorsement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="bg-white text-medical-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 font-semibold text-lg">
              View Clinical Dashboard
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-medical-600 transition-all duration-200 font-semibold text-lg">
              Research Publications
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-yellow-300" size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-2">50,000+</h3>
              <p className="text-blue-100">Patients Screened Annually</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <Target className="text-green-300" size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-2">97.3%</h3>
              <p className="text-blue-100">Clinical Accuracy Rate</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-purple-300" size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-2">3.2 min</h3>
              <p className="text-blue-100">Average Processing Time</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;