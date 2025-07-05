import React from 'react';
import { Cpu, Database, Cloud, Code, Shield, Zap } from 'lucide-react';

const TechnologySection: React.FC = () => {
  const techStack = [
    {
      category: 'Machine Learning',
      icon: Cpu,
      technologies: ['TensorFlow 2.13', 'PyTorch 2.0', 'Custom CNN', 'ResNet-152', 'Attention Mechanisms', 'Transfer Learning'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      category: 'Backend Infrastructure',
      icon: Database,
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis Cache', 'PostgreSQL', 'GraphQL API'],
      color: 'bg-green-50 border-green-200'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      technologies: ['Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD Pipeline', 'Monitoring', 'Auto-scaling'],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      category: 'Frontend & UI',
      icon: Code,
      technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'WebGL', 'PWA Support'],
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      technologies: ['HIPAA Compliance', 'AES-256 Encryption', 'OAuth 2.0', 'Audit Logging', 'RBAC', 'Data Anonymization'],
      color: 'bg-red-50 border-red-200'
    },
    {
      category: 'Performance & Scale',
      icon: Zap,
      technologies: ['GPU Acceleration', 'Load Balancing', 'CDN', 'Caching Strategy', 'Database Optimization', 'Real-time Processing'],
      color: 'bg-indigo-50 border-indigo-200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with cutting-edge technologies and robust architecture to ensure scalability, security, and clinical reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`border-2 rounded-xl p-6 ${tech.color} hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <tech.icon className="text-gray-700" size={24} />
                <h3 className="text-lg font-semibold text-gray-900">{tech.category}</h3>
              </div>
              <div className="space-y-2">
                {tech.technologies.map((technology, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2 shadow-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">AI Model Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Data Preprocessing</h4>
              <p className="text-gray-300">DICOM processing, normalization, augmentation, and quality assessment with automated filtering.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Model Ensemble</h4>
              <p className="text-gray-300">Multiple specialized models for detection, classification, and risk assessment with attention mechanisms.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Clinical Integration</h4>
              <p className="text-gray-300">BI-RADS compatible output, confidence scoring, and seamless radiologist workflow integration.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-medical-50 to-medical-100 rounded-xl p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Performance Metrics</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Sensitivity</span>
                <span className="font-semibold text-medical-700">97.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Specificity</span>
                <span className="font-semibold text-medical-700">94.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">AUC-ROC</span>
                <span className="font-semibold text-medical-700">0.961</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Processing Time</span>
                <span className="font-semibold text-medical-700">3.2 min</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-health-50 to-health-100 rounded-xl p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Scalability Features</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Concurrent Users</span>
                <span className="font-semibold text-health-700">10,000+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Daily Capacity</span>
                <span className="font-semibold text-health-700">1M+ Images</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Uptime SLA</span>
                <span className="font-semibold text-health-700">99.97%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Response Time</span>
                <span className="font-semibold text-health-700">&lt;200ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;