import React from 'react';
import { BookOpen, Award, Users } from 'lucide-react';

const AboutUniversity: React.FC = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">About Centurion University</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
          <div className="mb-4 text-blue-700">
            <BookOpen size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
          <p className="text-gray-600">
            Centurion University is committed to academic excellence with cutting-edge research facilities and innovative teaching methodologies that prepare students for the global workforce.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
          <div className="mb-4 text-blue-700">
            <Award size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Research Innovation</h3>
          <p className="text-gray-600">
            As a leading institution in AI and technology research, the university has established several centers of excellence focusing on cutting-edge technologies and interdisciplinary research.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
          <div className="mb-4 text-blue-700">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Global Community</h3>
          <p className="text-gray-600">
            With students and faculty from around the world, Centurion University fosters a diverse and inclusive environment that encourages cross-cultural collaboration and learning.
          </p>
        </div>
      </div>
      
      <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 leading-relaxed">
          Established in 2010, Centurion University has rapidly grown to become one of India's premier educational institutions. The university is known for its innovative approach to education, combining academic rigor with practical skills development and industry collaboration. Located in a vibrant campus with state-of-the-art facilities, the university provides an ideal environment for hosting the ResGenXAI-2025 conference.
        </p>
      </div>
    </div>
  );
};

export default AboutUniversity;