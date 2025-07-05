import React from 'react';
import { Building2, MapPin, Users, Activity, Award, Clock, Target, TrendingUp } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      value: '15',
      label: 'Active Hospitals',
      description: 'Across western Nepal',
      color: 'text-medical-600'
    },
    {
      icon: MapPin,
      value: '23',
      label: 'Districts Covered',
      description: 'Gandaki & Lumbini provinces',
      color: 'text-health-600'
    },
    {
      icon: Users,
      value: '50,000+',
      label: 'Annual Screenings',
      description: 'Patients served yearly',
      color: 'text-purple-600'
    },
    {
      icon: Activity,
      value: '97.3%',
      label: 'Clinical Accuracy',
      description: 'Validated performance',
      color: 'text-green-600'
    },
    {
      icon: Target,
      value: '89%',
      label: 'Early Detection',
      description: 'Stage 0-I cancers',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      value: '3.2 min',
      label: 'Processing Time',
      description: 'Average analysis speed',
      color: 'text-indigo-600'
    },
    {
      icon: TrendingUp,
      value: '67%',
      label: 'Cost Reduction',
      description: 'Healthcare savings',
      color: 'text-orange-600'
    },
    {
      icon: Award,
      value: '12',
      label: 'Publications',
      description: 'Peer-reviewed research',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Clinical Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world performance metrics from our deployment across western Nepal's healthcare network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</h4>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-medical-50 to-health-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Government Recognition</h3>
              <p className="text-gray-600">
                Official endorsement from Ministry of Health and Education, Nepal for clinical excellence and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Clinical Validation</h3>
              <p className="text-gray-600">
                Extensive validation across diverse patient populations with proven accuracy and reliability.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Healthcare Impact</h3>
              <p className="text-gray-600">
                Transforming breast cancer detection in underserved communities with accessible AI technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;