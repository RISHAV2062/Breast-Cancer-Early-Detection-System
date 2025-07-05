import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ClinicalPage from './pages/ClinicalPage';
import ResearchPage from './pages/ResearchPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/clinical" element={<ClinicalPage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;