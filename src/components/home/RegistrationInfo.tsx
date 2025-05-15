import React from 'react';
import { DollarSign, CheckCircle } from 'lucide-react';

interface RegistrationTier {
  category: string;
  earlyBird: string;
  regular: string;
  includes: string[];
}

const RegistrationInfo: React.FC = () => {
  const registrationTiers: RegistrationTier[] = [
    {
      category: 'Student (In-person)',
      earlyBird: '$250',
      regular: '$350',
      includes: [
        'Full conference access',
        'Conference materials',
        'Coffee breaks and lunches',
        'Welcome reception',
        'Certificate of attendance'
      ]
    },
    {
      category: 'Academic (In-person)',
      earlyBird: '$450',
      regular: '$550',
      includes: [
        'Full conference access',
        'Conference materials',
        'Coffee breaks and lunches',
        'Welcome reception',
        'Gala dinner',
        'Certificate of attendance'
      ]
    },
    {
      category: 'Industry (In-person)',
      earlyBird: '$650',
      regular: '$750',
      includes: [
        'Full conference access',
        'Conference materials',
        'Coffee breaks and lunches',
        'Welcome reception',
        'Gala dinner',
        'Certificate of attendance'
      ]
    },
    {
      category: 'Virtual Attendance',
      earlyBird: '$150',
      regular: '$200',
      includes: [
        'Access to online sessions',
        'Digital conference materials',
        'Online networking opportunities',
        'Certificate of attendance'
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="flex items-center justify-center space-x-3 mb-10">
        <DollarSign className="h-8 w-8 text-blue-700" />
        <h2 className="text-3xl font-bold text-blue-900">Registration Information</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="p-4 text-left">Registration Category</th>
              <th className="p-4 text-center">Early Bird<br />(until Oct 10)</th>
              <th className="p-4 text-center">Regular</th>
              <th className="p-4 text-left">What's Included</th>
            </tr>
          </thead>
          <tbody>
            {registrationTiers.map((tier, index) => (
              <tr 
                key={index} 
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors duration-150`}
              >
                <td className="p-4 font-medium">{tier.category}</td>
                <td className="p-4 text-center font-bold text-green-600">{tier.earlyBird}</td>
                <td className="p-4 text-center font-bold">{tier.regular}</td>
                <td className="p-4">
                  <ul className="space-y-1">
                    {tier.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Registration fees are in USD and are non-refundable but transferable.</li>
          <li>• Author registration: At least one author per accepted paper must register at the appropriate rate.</li>
          <li>• Student registrations require proof of student status.</li>
          <li>• Group discounts are available for 5+ registrations from the same institution.</li>
        </ul>
      </div>
    </div>
  );
};

export default RegistrationInfo;