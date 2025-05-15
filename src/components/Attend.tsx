import React from 'react';
import { MapPin, Hotel, Plane, CreditCard, Compass, Calendar } from 'lucide-react';

const Attend: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Attend ResGenXAI-2025</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 flex items-center text-white">
            <Calendar className="h-8 w-8 mr-4" />
            <h3 className="text-2xl font-bold">Conference Schedule</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-800">Day 1: November 15, 2025</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">08:00 - 09:00</span>
                    <span className="text-gray-700">Registration & Welcome Coffee</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">09:00 - 10:30</span>
                    <span className="text-gray-700">Opening Ceremony & Keynote Speech</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">10:30 - 11:00</span>
                    <span className="text-gray-700">Coffee Break</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">11:00 - 12:30</span>
                    <span className="text-gray-700">Technical Session I: Foundations</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">12:30 - 14:00</span>
                    <span className="text-gray-700">Lunch</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">14:00 - 15:30</span>
                    <span className="text-gray-700">Technical Session II: Ethics</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">15:30 - 16:00</span>
                    <span className="text-gray-700">Coffee Break</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">16:00 - 17:30</span>
                    <span className="text-gray-700">Panel Discussion: Future of Responsible AI</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">18:00 - 20:00</span>
                    <span className="text-gray-700">Welcome Reception</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-800">Day 2: November 16, 2025</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">09:00 - 10:30</span>
                    <span className="text-gray-700">Technical Session III: Applications</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">10:30 - 11:00</span>
                    <span className="text-gray-700">Coffee Break</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">11:00 - 12:30</span>
                    <span className="text-gray-700">Poster & Demo Session</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">12:30 - 14:00</span>
                    <span className="text-gray-700">Lunch</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">14:00 - 15:30</span>
                    <span className="text-gray-700">Technical Session IV: Governance</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">15:30 - 16:00</span>
                    <span className="text-gray-700">Coffee Break</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">16:00 - 17:30</span>
                    <span className="text-gray-700">Workshops & Tutorials</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">19:00 - 22:00</span>
                    <span className="text-gray-700">Gala Dinner</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-800">Day 3: November 17, 2025</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">09:00 - 10:30</span>
                    <span className="text-gray-700">Technical Session V: Emerging Topics</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">10:30 - 11:00</span>
                    <span className="text-gray-700">Coffee Break</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">11:00 - 12:30</span>
                    <span className="text-gray-700">Industry Showcase</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">12:30 - 14:00</span>
                    <span className="text-gray-700">Lunch</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">14:00 - 15:30</span>
                    <span className="text-gray-700">Closing Keynote</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">15:30 - 16:30</span>
                    <span className="text-gray-700">Awards & Closing Ceremony</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 flex items-center text-white">
              <CreditCard className="h-8 w-8 mr-4" />
              <h3 className="text-2xl font-bold">Registration</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Registration for ResGenXAI-2025 is now open. Take advantage of early bird rates available until October 10, 2025.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-800">Registration Includes</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Access to all technical sessions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Conference materials and proceedings</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Welcome reception</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Coffee breaks and lunches</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Gala dinner (full registration only)</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
                  Register Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 flex items-center text-white">
              <MapPin className="h-8 w-8 mr-4" />
              <h3 className="text-2xl font-bold">Venue</h3>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-3 text-blue-800">Centurion University</h4>
              <p className="text-gray-700 mb-4">
                Main Campus, Conference Center<br />
                Paralakhemundi, Odisha 761211<br />
                India
              </p>
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-500">Interactive Map Will Appear Here</span>
              </div>
              <p className="text-gray-700">
                The conference will be held in the state-of-the-art Conference Center at Centurion University's main campus. The venue features modern facilities, high-speed internet, and comfortable seating arrangements.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-4 flex items-center text-white">
            <Plane className="h-6 w-6 mr-3" />
            <h3 className="text-xl font-semibold">Travel Information</h3>
          </div>
          <div className="p-5">
            <h4 className="font-medium text-blue-800 mb-3">Nearest Airports</h4>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-700">
                <span className="font-medium">Biju Patnaik International Airport (BBI)</span> - Bhubaneswar (120 km)
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Visakhapatnam International Airport (VTZ)</span> - Visakhapatnam (180 km)
              </li>
            </ul>
            
            <h4 className="font-medium text-blue-800 mb-3">Local Transportation</h4>
            <ul className="space-y-2">
              <li className="text-gray-700">
                <span className="font-medium">Airport Shuttle:</span> Complimentary for registered participants
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Taxi Services:</span> Available at airports and throughout the city
              </li>
              <li className="text-gray-700">
                <span className="font-medium">Campus Shuttle:</span> Running between recommended hotels and conference venue
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-4 flex items-center text-white">
            <Hotel className="h-6 w-6 mr-3" />
            <h3 className="text-xl font-semibold">Accommodation</h3>
          </div>
          <div className="p-5">
            <p className="text-gray-700 mb-4">
              We have negotiated special rates for conference attendees at the following hotels:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-blue-800">University Guest House</h4>
                <p className="text-gray-700 text-sm">On campus, 5-minute walk to conference venue</p>
                <p className="text-gray-700 text-sm">Rate: $70/night</p>
              </div>
              
              <div>
                <h4 className="font-medium text-blue-800">Hotel Blueberry</h4>
                <p className="text-gray-700 text-sm">2 km from campus, shuttle available</p>
                <p className="text-gray-700 text-sm">Rate: $100/night</p>
              </div>
              
              <div>
                <h4 className="font-medium text-blue-800">Grand Residency</h4>
                <p className="text-gray-700 text-sm">5 km from campus, luxury accommodations</p>
                <p className="text-gray-700 text-sm">Rate: $150/night</p>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              * Rates are approximate and subject to availability. Use code "RGXAI25" when booking.
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-4 flex items-center text-white">
            <Compass className="h-6 w-6 mr-3" />
            <h3 className="text-xl font-semibold">Visa Information</h3>
          </div>
          <div className="p-5">
            <p className="text-gray-700 mb-4">
              International attendees may require a visa to enter India. We recommend starting the visa application process as early as possible.
            </p>
            
            <h4 className="font-medium text-blue-800 mb-2">Invitation Letters</h4>
            <p className="text-gray-700 mb-4">
              We can provide invitation letters for visa purposes to registered participants. Please contact <span className="text-blue-600">visa@resgenxai2025.org</span> with your registration details.
            </p>
            
            <h4 className="font-medium text-blue-800 mb-2">Required Documents</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Valid passport (minimum 6 months validity)</li>
              <li>• Conference registration confirmation</li>
              <li>• Invitation letter from conference organizers</li>
              <li>• Travel itinerary and hotel reservation</li>
              <li>• Proof of financial means for your stay</li>
            </ul>
            
            <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200 text-sm">
              <p className="text-blue-800">
                For detailed visa requirements based on your country of residence, please check the <a href="#" className="text-blue-600 hover:underline">Official Indian Visa Portal</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-xl font-semibold mb-4 text-blue-800">Accessibility & Special Requirements</h3>
        <p className="text-gray-700 mb-4">
          We are committed to making ResGenXAI-2025 accessible to all participants. The conference venue is wheelchair accessible, and we provide the following accommodations:
        </p>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">•</span>
            Sign language interpretation (upon request)
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">•</span>
            Accessible seating arrangements
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">•</span>
            Materials in alternative formats
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">•</span>
            Dietary accommodation
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">•</span>
            Quiet room for those needing breaks
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">•</span>
            Nursing room for parents
          </li>
        </ul>
        
        <p className="text-gray-700">
          Please indicate any accessibility requirements or special needs during registration, or contact <span className="text-blue-600">accessibility@resgenxai2025.org</span> for further assistance.
        </p>
      </div>
    </div>
  );
};

export default Attend;