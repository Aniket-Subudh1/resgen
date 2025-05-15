import React from 'react';
import { MapPin, Compass, UtensilsCrossed, ShoppingBag } from 'lucide-react';

interface Attraction {
  name: string;
  description: string;
  distance: string;
  imageUrl: string;
  type: 'nature' | 'heritage' | 'activity' | 'culinary';
}

const SightSeeing: React.FC = () => {
  const attractions: Attraction[] = [
    {
      name: "Mahendragiri Hills",
      description: "A picturesque mountain range offering breathtaking views, trekking opportunities, and ancient temples. The hills are considered sacred and are associated with mythology.",
      distance: "25 km from venue",
      imageUrl: "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "nature"
    },
    {
      name: "Srikakulam Temple Complex",
      description: "An ancient temple complex dating back to the 12th century, featuring intricate stone carvings and impressive architecture that showcases the region's rich cultural heritage.",
      distance: "15 km from venue",
      imageUrl: "https://images.pexels.com/photos/5191375/pexels-photo-5191375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "heritage"
    },
    {
      name: "Sabara Kota Wildlife Sanctuary",
      description: "Home to diverse flora and fauna, including rare species of birds, reptiles, and mammals. The sanctuary offers guided wildlife tours and bird watching experiences.",
      distance: "40 km from venue",
      imageUrl: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "nature"
    },
    {
      name: "Ananda Cultural Village",
      description: "An immersive cultural experience showcasing the traditional arts, crafts, and performances of Odisha. Visitors can participate in workshops and interact with local artisans.",
      distance: "10 km from venue",
      imageUrl: "https://images.pexels.com/photos/2387079/pexels-photo-2387079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "activity"
    },
    {
      name: "Coastal Beach Retreat",
      description: "A serene beach offering golden sands and clear waters. Perfect for relaxation, swimming, and water sports. The beach is known for its spectacular sunrises and sunsets.",
      distance: "35 km from venue",
      imageUrl: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      type: "nature"
    },
    {
      name: "Traditional Food Market",
      description: "Experience the vibrant local cuisine at this bustling market. Sample authentic Odisha dishes and street food, from seafood delicacies to sweet treats.",
      distance: "5 km from venue",
      imageUrl: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "culinary"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Sight Seeing</h2>
      
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">
          Extend your stay and explore the beautiful surroundings of Odisha, India. From ancient temples to stunning natural landscapes, there's something for everyone to enjoy before or after the conference.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {attractions.map((attraction, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={attraction.imageUrl} 
                alt={attraction.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-5">
              <div className="flex items-start mb-3">
                <div className={`p-2 rounded-full mr-3 ${
                  attraction.type === 'nature' ? 'bg-green-100 text-green-600' : 
                  attraction.type === 'heritage' ? 'bg-amber-100 text-amber-600' : 
                  attraction.type === 'activity' ? 'bg-blue-100 text-blue-600' : 
                  'bg-red-100 text-red-600'
                }`}>
                  {attraction.type === 'nature' && <Compass size={18} />}
                  {attraction.type === 'heritage' && <MapPin size={18} />}
                  {attraction.type === 'activity' && <ShoppingBag size={18} />}
                  {attraction.type === 'culinary' && <UtensilsCrossed size={18} />}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{attraction.name}</h3>
                  <p className="text-gray-500 text-sm">{attraction.distance}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                {attraction.description}
              </p>
              
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-700 text-white rounded-lg overflow-hidden shadow-lg">
        <div className="p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6">Organized Tours</h3>
          
          <p className="mb-8 text-blue-100">
            We've partnered with local travel agencies to offer special guided tours for conference attendees. These tours are scheduled before and after the conference dates to accommodate your travel plans.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-800 bg-opacity-50 p-5 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Heritage Tour</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Duration: Full Day (8 hours)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Covers: 3 ancient temples, historic palace, and traditional village
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Includes: Transportation, guide, lunch, and entrance fees
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Price: $75 per person
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-800 bg-opacity-50 p-5 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Nature Expedition</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Duration: Full Day (9 hours)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Covers: Wildlife sanctuary, waterfall trek, and beach sunset
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Includes: Transportation, guide, lunch, and activities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Price: $85 per person
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <button className="px-6 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300 shadow-md">
              Reserve Your Tour
            </button>
            <p className="mt-4 text-sm text-blue-200">
              * Tours require minimum participation and must be booked at least 3 days in advance
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Travel Tips</h3>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <div>
                <span className="font-medium">Weather:</span> November is generally mild and pleasant with temperatures ranging from 18°C to 28°C (64°F to 82°F). Light layers are recommended.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <div>
                <span className="font-medium">Local Currency:</span> Indian Rupee (INR). Credit cards are accepted at most hotels and larger establishments, but cash is preferred for small vendors.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <div>
                <span className="font-medium">Language:</span> Odia is the local language, but English is widely spoken in tourist areas and academic settings.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <div>
                <span className="font-medium">Etiquette:</span> Remove shoes before entering temples. Conservative dress is appreciated when visiting religious sites.
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">What to Take Home</h3>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <div>
                <span className="font-medium">Textiles:</span> Odisha is famous for its handwoven textiles, particularly the intricately designed Sambalpuri and Ikat fabrics.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <div>
                <span className="font-medium">Handicrafts:</span> Look for Pattachitra paintings (traditional cloth-based scroll paintings) and stone and wood carvings.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <div>
                <span className="font-medium">Culinary Treats:</span> Local spices, sweet delicacies like Chhena Poda (cheese dessert), and Arisa Pitha (rice cake) make excellent gifts.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">•</span>
              <div>
                <span className="font-medium">Silver Filigree:</span> Delicate silver filigree work, locally known as 'Tarakasi', is a traditional craft of Odisha worth collecting.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SightSeeing;