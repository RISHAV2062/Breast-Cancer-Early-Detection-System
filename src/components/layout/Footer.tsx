import React from 'react';
import { Activity, MapPin, Phone, Mail, Award, Users, Building2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 medical-gradient rounded-xl flex items-center justify-center">
                <Activity className="text-white" size={24} />
              </div>
              <div>
                <span className="text-xl font-bold">BreastCare AI</span>
                <div className="text-sm text-medical-300">Advanced Detection System</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mb-4">
              <Award className="text-yellow-400" size={20} />
              <span className="text-gray-300">Ministry of Health and Education Recognition</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              AI-powered breast cancer detection system serving 15 hospitals across 23 districts 
              in western Nepal with 97.3% accuracy and government endorsement.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Building2 className="text-medical-400" size={16} />
                <span className="text-gray-300">15 Hospitals</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-medical-400" size={16} />
                <span className="text-gray-300">23 Districts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-medical-400" size={16} />
                <span className="text-gray-300">50,000+ Patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="text-medical-400" size={16} />
                <span className="text-gray-300">97.3% Accuracy</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Clinical Network</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Pokhara Academy of Health Sciences</li>
              <li>Gandaki Medical College</li>
              <li>Manipal Teaching Hospital</li>
              <li>Western Regional Hospital</li>
              <li>District Health Centers</li>
              <li>Primary Care Units</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="text-medical-400" size={18} />
                <div>
                  <div className="text-gray-300">Pokhara, Nepal</div>
                  <div className="text-gray-500 text-sm">Gandaki Province</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-medical-400" size={18} />
                <div>
                  <div className="text-gray-300">+977-61-123456</div>
                  <div className="text-gray-500 text-sm">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-medical-400" size={18} />
                <div>
                  <div className="text-gray-300">support@breastcare.ai</div>
                  <div className="text-gray-500 text-sm">Clinical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 BreastCare AI. Licensed under MIT with medical device compliance.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>ISO 13485 Certified</span>
              <span>HIPAA Compliant</span>
              <span>WHO Recognized</span>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-500 text-sm">
            Transforming breast cancer detection through artificial intelligence • Serving underserved communities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;