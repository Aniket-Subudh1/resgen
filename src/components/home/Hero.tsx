import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { useScroll } from '../../context/ScrollContext';

const Hero: React.FC = () => {
  const { scrollToSection } = useScroll();
  
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32 md:py-40 lg:py-48">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
      
      <div className="container relative mx-auto px-4 md:px-8 lg:px-16 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fadeIn">
            ResGenXAI-2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fadeInDelay">
            International Conference on Responsible Generative AI
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-200" />
              <span className="text-blue-100">November 15-17, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-200" />
              <span className="text-blue-100">Centurion University, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-200" />
              <span className="text-blue-100">In-person & Virtual</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => scrollToSection('call-for-papers')}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Call for Papers
            </button>
            <button 
              onClick={() => scrollToSection('attend')}
              className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-md font-medium transition-colors duration-300"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            d="M0,64L60,64C120,64,240,64,360,74.7C480,85,600,107,720,101.3C840,96,960,64,1080,48C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;