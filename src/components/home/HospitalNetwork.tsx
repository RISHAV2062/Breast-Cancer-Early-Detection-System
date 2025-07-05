import React from 'react';
import { Building2, MapPin, Users, Activity, Stethoscope, Wifi } from 'lucide-react';

const HospitalNetwork: React.FC = () => {
  const regionalCenters = [
    {
      name: 'Pokhara Academy of Health Sciences',
      location: 'Pokhara, Kaski',
      type: 'Regional Medical Center',
      capacity: '500 beds',
      screenings: '12,500/year',
      specialties: ['Oncology', 'Radiology', 'Surgery']
    },
    {
      name: 'Gandaki Medical College',
      location: 'Pokhara, Kaski',
      type: 'Teaching Hospital',
      capacity: '350 beds',
      screenings: '8,900/year',
      specialties: ['Medical Education', 'Research', 'Clinical Care']
    },
    {
      name: 'Manipal Teaching Hospital',
      location: 'Pokhara, Kaski',
      type: 'Private Hospital',
      capacity: '750 beds',
      screenings: '15,200/year',
      specialties: ['Advanced Imaging', 'Minimally Invasive Surgery']
    },
    {
      name: 'Western Regional Hospital',
      location: 'Pokhara, Kaski',
      type: 'Government Hospital',
      capacity: '400 beds',
      screenings: '9,800/year',
      specialties: ['Public Health', 'Emergency Care', 'Outreach']
    }
  ];

  const districtStats = [
    { province: 'Gandaki Province', districts: 11, hospitals: 8, coverage: '94%' },
    { province: 'Lumbini Province', districts: 12, hospitals: 7, coverage: '87%' }
  ];

  const capabilities = [
    {
      icon: Activity,
      title: 'Real-time Analysis',
      description: 'Instant AI-powered mammography interpretation across all connected facilities'
    },
    {
      icon: Wifi,
      title: 'Telemedicine Support',
      description: 'Remote consultation capabilities connecting rural areas to expert radiologists'
    },
    {
      icon: Stethoscope,
      title: 'Clinical Decision Support',
      description: 'Evidence-based recommendations with confidence scoring for healthcare providers'
    },
    {
      icon: Users,
      title: 'Training & Education',
      description: 'Comprehensive training programs for healthcare workers on AI-assisted diagnosis'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Hospital Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving 15 hospitals across 23 districts in western Nepal with integrated AI-powered breast cancer detection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Regional Medical Centers</h3>
            <div className="space-y-4">
              {regionalCenters.map((hospital, index) => (
                <div key={index} className="medical-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{hospital.name}</h4>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{hospital.location}</span>
                      </div>
                    </div>
                    <span className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-sm font-medium">
                      {hospital.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="flex items-center space-x-2">
                      <Building2 className="text-gray-400" size={16} />
                      <span className="text-gray-600">{hospital.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="text-gray-400" size={16} />
                      <span className="text-gray-600">{hospital.screenings}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Network Coverage</h3>
            <div className="space-y-6">
              {districtStats.map((stat, index) => (
                <div key={index} className="medical-card">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{stat.province}</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-medical-600">{stat.districts}</div>
                      <div className="text-gray-600 text-sm">Districts</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-health-600">{stat.hospitals}</div>
                      <div className="text-gray-600 text-sm">Hospitals</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{stat.coverage}</div>
                      <div className="text-gray-600 text-sm">Coverage</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="medical-card">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Network Capabilities</h4>
                <div className="space-y-4">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <capability.icon className="text-medical-600 mt-1" size={20} />
                      <div>
                        <h5 className="font-medium text-gray-900">{capability.title}</h5>
                        <p className="text-gray-600 text-sm">{capability.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Network Performance Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-600 mb-2">52,847</div>
              <div className="text-gray-600">Total Screenings (2024)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-health-600 mb-2">434</div>
              <div className="text-gray-600">Cancer Detections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">97.3%</div>
              <div className="text-gray-600">Network Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">3.2 min</div>
              <div className="text-gray-600">Avg Processing Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalNetwork;