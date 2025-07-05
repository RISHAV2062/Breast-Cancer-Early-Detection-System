import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TechnologySection from '../components/home/TechnologySection';
import ImpactSection from '../components/home/ImpactSection';
import HospitalNetwork from '../components/home/HospitalNetwork';
import TestimonialsSection from '../components/home/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TechnologySection />
      <ImpactSection />
      <HospitalNetwork />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;