import React from 'react';
import { Quote, Star, Award, Users } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Radiologist',
      hospital: 'Pokhara Academy of Health Sciences',
      content: 'BreastCare AI has revolutionized our diagnostic capabilities. The 97.3% accuracy rate and rapid processing have enabled us to serve more patients with greater confidence. The Ministry recognition validates what we see daily - this system saves lives.',
      rating: 5,
      image: 'PS'
    },
    {
      name: 'Dr. Rajesh Thapa',
      role: 'Director of Oncology',
      hospital: 'Gandaki Medical College',
      content: 'The early detection capabilities are remarkable. We\'ve seen an 89% improvement in Stage I cancer identification. The AI recommendations align perfectly with our clinical assessments, making it an invaluable diagnostic partner.',
      rating: 5,
      image: 'RT'
    },
    {
      name: 'Dr. Sunita Gurung',
      role: 'Head of Radiology',
      hospital: 'Manipal Teaching Hospital',
      content: 'Integration was seamless with our existing PACS system. The telemedicine capabilities have extended our reach to rural areas, and the automated reporting saves significant time while maintaining clinical excellence.',
      rating: 5,
      image: 'SG'
    },
    {
      name: 'Dr. Bikash Adhikari',
      role: 'Medical Superintendent',
      hospital: 'Western Regional Hospital',
      content: 'The cost reduction of 67% while improving accuracy has been transformational for our public hospital. Training our staff was straightforward, and the 24/7 support ensures continuous operation.',
      rating: 5,
      image: 'BA'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Government Recognition',
      description: 'Official endorsement from Ministry of Health and Education, Nepal'
    },
    {
      icon: Users,
      title: 'Clinical Excellence',
      description: '127 healthcare workers trained with 94.7% radiologist agreement'
    },
    {
      icon: Star,
      title: 'Patient Satisfaction',
      description: '96.8% patient satisfaction rate across all network hospitals'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the medical professionals who use BreastCare AI daily to improve patient outcomes across western Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="medical-card relative">
              <Quote className="absolute top-4 right-4 text-medical-200" size={32} />
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center">
                  <span className="text-medical-700 font-semibold">{testimonial.image}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-medical-600 text-sm font-medium">{testimonial.hospital}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{testimonial.content}</p>
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-medical-100 mb-4">
                <achievement.icon className="text-medical-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-medical-600 to-health-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join the Healthcare Revolution</h3>
          <p className="text-lg mb-6 text-blue-100">
            Experience the power of AI-assisted breast cancer detection in your healthcare facility.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-medical-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-medical-600 transition-colors font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;