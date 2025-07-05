import React from 'react';
import { Brain, Eye, Shield, Zap, Users, Globe, Clock, Award } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'Custom ResNet-152 with attention mechanisms trained on 250,000+ mammography images from 12 countries.',
      color: 'bg-blue-50 text-blue-600',
      stats: '97.3% Accuracy'
    },
    {
      icon: Eye,
      title: 'Multi-Modal Analysis',
      description: 'Comprehensive analysis of mammography, ultrasound, and MRI images with automated quality assessment.',
      color: 'bg-green-50 text-green-600',
      stats: '3 Imaging Types'
    },
    {
      icon: Shield,
      title: 'Clinical Grade Security',
      description: 'HIPAA-compliant encryption, secure data transmission, and comprehensive audit trails for patient privacy.',
      color: 'bg-purple-50 text-purple-600',
      stats: 'ISO 13485 Certified'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Lightning-fast analysis with average processing time of 3.2 minutes per case including quality checks.',
      color: 'bg-yellow-50 text-yellow-600',
      stats: '3.2 min Average'
    },
    {
      icon: Users,
      title: 'Clinical Integration',
      description: 'Seamless integration with existing PACS, HIS, and EMR systems with radiologist workflow optimization.',
      color: 'bg-red-50 text-red-600',
      stats: '15 Hospitals'
    },
    {
      icon: Globe,
      title: 'Telemedicine Support',
      description: 'Remote consultation capabilities enabling expert radiologist support for rural healthcare facilities.',
      color: 'bg-indigo-50 text-indigo-600',
      stats: '23 Districts'
    },
    {
      icon: Clock,
      title: 'Automated Reporting',
      description: 'BI-RADS compatible reports with structured findings, recommendations, and follow-up scheduling.',
      color: 'bg-pink-50 text-pink-600',
      stats: 'BI-RADS Standard'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Continuous performance monitoring with automated quality control and model performance tracking.',
      color: 'bg-orange-50 text-orange-600',
      stats: '99.97% Uptime'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI-Powered Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced features designed for clinical excellence, seamless integration, and improved patient outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="medical-card card-hover group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="text-sm font-medium text-medical-600 bg-medical-50 px-3 py-1 rounded-full inline-block">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Clinical Workflow Integration</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Image Acquisition', desc: 'DICOM compatible' },
              { step: '2', title: 'Quality Check', desc: 'Automated validation' },
              { step: '3', title: 'AI Analysis', desc: 'Multi-model ensemble' },
              { step: '4', title: 'Clinical Review', desc: 'Radiologist interface' },
              { step: '5', title: 'Report & Follow-up', desc: 'Automated workflow' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-medical-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;