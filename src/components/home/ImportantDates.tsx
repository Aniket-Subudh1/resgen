import React from 'react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

interface DateItem {
  id: number;
  title: string;
  date: string;
  status: 'upcoming' | 'current' | 'past';
}

const ImportantDates: React.FC = () => {
  const dates: DateItem[] = [
    {
      id: 1,
      title: 'Paper Submission Deadline',
      date: 'July 15, 2025',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Notification of Acceptance',
      date: 'August 30, 2025',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Camera-Ready Submission',
      date: 'September 25, 2025',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Early Registration Deadline',
      date: 'October 10, 2025',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Conference Dates',
      date: 'November 15-17, 2025',
      status: 'upcoming'
    }
  ];

  return (
    <div className="py-16">
      <div className="flex items-center justify-center space-x-3 mb-10">
        <Calendar className="h-8 w-8 text-blue-700" />
        <h2 className="text-3xl font-bold text-blue-900">Important Dates</h2>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform md:translate-x-[-50%] hidden md:block"></div>
        
        {dates.map((item, index) => (
          <div 
            key={item.id} 
            className={`relative flex flex-col md:flex-row mb-8 md:mb-0 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Content */}
            <div className="md:w-1/2 mb-4 md:mb-16">
              <div className={`
                p-4 rounded-lg shadow-md border-l-4 transition-all duration-300
                ${item.status === 'upcoming' ? 'bg-white border-blue-500 hover:shadow-lg' : 
                  item.status === 'current' ? 'bg-blue-50 border-blue-600' : 
                  'bg-gray-50 border-green-500'}
              `}>
                <div className="flex items-start">
                  <div className="mr-3">
                    {item.status === 'past' ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Clock className="h-5 w-5 text-blue-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    <p className={`text-sm ${
                      item.status === 'past' ? 'text-green-600' : 
                      item.status === 'current' ? 'text-blue-600 font-medium' : 
                      'text-gray-600'
                    }`}>
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Circle marker */}
            <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-white border-4 border-blue-500 transform md:translate-x-[-50%] hidden md:block"></div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-red-600 font-medium">* All deadlines are 11:59 PM AoE (Anywhere on Earth)</p>
      </div>
    </div>
  );
};

export default ImportantDates;