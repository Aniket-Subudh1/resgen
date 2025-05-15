import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useScroll } from '../context/ScrollContext';

const Footer: React.FC = () => {
  const { scrollToSection } = useScroll();
  
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">ResGenXAI-2025</h3>
            <p className="text-blue-200 mb-4">
              International Conference on Responsible Generative AI
            </p>
            <p className="text-blue-200">
              November 15-17, 2025<br />
              Centurion University<br />
              Odisha, India
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('call-for-papers')}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Call for Papers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('guidelines')}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Author & Reviewer Guidelines
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('attend')}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Attend
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('committees')}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Committees
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sight-seeing')}
                  className="text-blue-200 hover:text-white transition-colors duration-200"
                >
                  Sight Seeing
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-300" />
                <a href="mailto:info@resgenxai2025.org" className="text-blue-200 hover:text-white transition-colors duration-200">
                  info@resgenxai2025.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-300" />
                <a href="tel:+911234567890" className="text-blue-200 hover:text-white transition-colors duration-200">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-300 mt-1" />
                <span className="text-blue-200">
                  Centurion University<br />
                  Paralakhemundi, Odisha<br />
                  India - 761211
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <h4 className="text-sm font-semibold mb-2 text-blue-100">Subscribe to Updates</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md w-full bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm mb-4 md:mb-0">
              &copy; 2025 ResGenXAI Conference. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-blue-300">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;