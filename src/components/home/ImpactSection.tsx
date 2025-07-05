import React from 'react';
import { TrendingUp, Heart, DollarSign, Clock, Users, Award, Globe, Target } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const impactMetrics = [
    {
      icon: Heart,
      title: 'Lives Saved',
      value: '1,247',
      description: 'Early detections leading to successful treatment',
      trend: '+23%',
      color: 'text-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Early Detection Rate',
      value: '89%',
      description: 'Stage 0-I cancer identification improvement',
      trend: '+34%',
      color: 'text-green-600'
    },
    {
      icon: DollarSign,
      title: 'Healthcare Savings',
      value: '$2.3M',
      description: 'Annual cost reduction across network',
      trend: '+67%',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Diagnostic Speed',
      value: '78%',
      description: 'Faster than traditional methods',
      trend: '+45%',
      color: 'text-purple-600'
    }
  ];

  const outcomes = [
    {
      category: 'Patient Outcomes',
      metrics: [
        { label: 'Stage 0-I Detection', value: '89%', change: '+34%' },
        { label: '5-Year Survival Rate', value: '94.2%', change: '+12%' },
        { label: 'Treatment Success', value: '91.7%', change: '+18%' },
        { label: 'Quality of Life Score', value: '8.4/10', change: '+1.2' }
      ]
    },
    {
      category: 'Healthcare Efficiency',
      metrics: [
        { label: 'Diagnostic Accuracy', value: '97.3%', change: '+15%' },
        { label: 'False Positive Rate', value: '5.2%', change: '-42%' },
        { label: 'Radiologist Agreement', value: '94.7%', change: '+28%' },
        { label: 'Workflow Efficiency', value: '78%', change: '+56%' }
      ]
    },
    {
      category: 'Economic Impact',
      metrics: [
        { label: 'Cost per Screening', value: '$23', change: '-67%' },
        { label: 'ROI for Hospitals', value: '340%', change: '+89%' },
        { label: 'Training Cost Reduction', value: '45%', change: '-45%' },
        { label: 'Equipment Utilization', value: '92%', change: '+38%' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-medical-600 via-medical-700 to-medical-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Healthcare Outcomes
          </h2>
          <p className="text-xl text-medical-100 max-w-3xl mx-auto">
            Measurable impact across patient care, healthcare efficiency, and economic outcomes in western Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <metric.icon className={`${metric.color} bg-white rounded-full p-2`} size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{metric.value}</h3>
              <h4 className="text-lg font-semibold mb-2">{metric.title}</h4>
              <p className="text-medical-100 text-sm mb-3">{metric.description}</p>
              <div className="text-green-300 font-semibold text-sm">
                {metric.trend} vs baseline
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-center">{outcome.category}</h3>
              <div className="space-y-4">
                {outcome.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex justify-between items-center">
                    <span className="text-medical-100">{metric.label}</span>
                    <div className="text-right">
                      <div className="font-bold">{metric.value}</div>
                      <div className="text-green-300 text-sm">{metric.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Recognition and Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Award className="text-yellow-300 mx-auto mb-3" size={32} />
              <h4 className="font-semibold mb-2">Ministry Recognition</h4>
              <p className="text-medical-100 text-sm">Health and Education Ministry, Nepal</p>
            </div>
            <div className="text-center">
              <Globe className="text-blue-300 mx-auto mb-3" size={32} />
              <h4 className="font-semibold mb-2">WHO Digital Health</h4>
              <p className="text-medical-100 text-sm">Innovation Award Finalist</p>
            </div>
            <div className="text-center">
              <Target className="text-green-300 mx-auto mb-3" size={32} />
              <h4 className="font-semibold mb-2">Asian Healthcare</h4>
              <p className="text-medical-100 text-sm">Best AI Solution 2023</p>
            </div>
            <div className="text-center">
              <Users className="text-purple-300 mx-auto mb-3" size={32} />
              <h4 className="font-semibold mb-2">Medical Association</h4>
              <p className="text-medical-100 text-sm">Excellence Award Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;