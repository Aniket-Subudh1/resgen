import React from 'react';
import { Users, Award, Lightbulb } from 'lucide-react';

interface CommitteeMember {
  name: string;
  affiliation: string;
  country: string;
  role?: string;
}

const Committees: React.FC = () => {
  const organizingCommittee: CommitteeMember[] = [
    {
      name: "Prof. Amrita Panda",
      affiliation: "Centurion University",
      country: "India",
      role: "General Chair"
    },
    {
      name: "Prof. James Wilson",
      affiliation: "Massachusetts Institute of Technology",
      country: "USA",
      role: "Program Chair"
    },
    {
      name: "Dr. Mei Chen",
      affiliation: "Beijing University of Technology",
      country: "China",
      role: "Publications Chair"
    },
    {
      name: "Dr. Carlos Rodriguez",
      affiliation: "University of Barcelona",
      country: "Spain",
      role: "Finance Chair"
    },
    {
      name: "Prof. Sarah Johnson",
      affiliation: "University of Toronto",
      country: "Canada",
      role: "Local Arrangements Chair"
    },
    {
      name: "Dr. Rahul Mehta",
      affiliation: "Indian Institute of Technology Delhi",
      country: "India",
      role: "Workshops Chair"
    },
    {
      name: "Dr. Emily Wong",
      affiliation: "Stanford University",
      country: "USA",
      role: "Publicity Chair"
    },
    {
      name: "Prof. Alexander Petrov",
      affiliation: "ETH Zurich",
      country: "Switzerland",
      role: "Sponsorship Chair"
    }
  ];

  const programCommittee: CommitteeMember[] = [
    {
      name: "Prof. Nadia Ali",
      affiliation: "University of Oxford",
      country: "UK"
    },
    {
      name: "Dr. John Smith",
      affiliation: "Google Research",
      country: "USA"
    },
    {
      name: "Prof. Yuki Tanaka",
      affiliation: "University of Tokyo",
      country: "Japan"
    },
    {
      name: "Dr. Elena Volkov",
      affiliation: "Moscow State University",
      country: "Russia"
    },
    {
      name: "Prof. Kwame Osei",
      affiliation: "University of Cape Town",
      country: "South Africa"
    },
    {
      name: "Dr. Isabella Rossi",
      affiliation: "University of Milan",
      country: "Italy"
    },
    {
      name: "Prof. Ahmed Hassan",
      affiliation: "Cairo University",
      country: "Egypt"
    },
    {
      name: "Dr. Maria Gonzalez",
      affiliation: "National Autonomous University of Mexico",
      country: "Mexico"
    },
    {
      name: "Prof. David Kim",
      affiliation: "KAIST",
      country: "South Korea"
    },
    {
      name: "Dr. Priya Sharma",
      affiliation: "Tata Consultancy Services",
      country: "India"
    },
    {
      name: "Prof. Hans Mueller",
      affiliation: "Technical University of Munich",
      country: "Germany"
    },
    {
      name: "Dr. Lisa Chen",
      affiliation: "Microsoft Research",
      country: "USA"
    }
  ];

  const steeringCommittee: CommitteeMember[] = [
    {
      name: "Prof. Richard Wong",
      affiliation: "National University of Singapore",
      country: "Singapore",
      role: "Chair"
    },
    {
      name: "Prof. Fatima Al-Zahra",
      affiliation: "King Abdullah University of Science and Technology",
      country: "Saudi Arabia"
    },
    {
      name: "Prof. Michael Brown",
      affiliation: "University of Cambridge",
      country: "UK"
    },
    {
      name: "Prof. Deepa Gupta",
      affiliation: "Indian Institute of Science",
      country: "India"
    },
    {
      name: "Prof. Robert Johnson",
      affiliation: "California Institute of Technology",
      country: "USA"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Conference Committees</h2>
      
      <div className="space-y-16">
        {/* Organizing Committee */}
        <div>
          <div className="flex items-center mb-8">
            <Users className="h-8 w-8 text-blue-700 mr-4" />
            <h3 className="text-2xl font-semibold text-blue-800">Organizing Committee</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizingCommittee.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.affiliation}</p>
                <p className="text-gray-500 text-sm">{member.country}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Program Committee */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-blue-700 mr-4" />
            <h3 className="text-2xl font-semibold text-blue-800">Program Committee</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programCommittee.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:border-blue-200 transition-colors duration-300"
              >
                <h4 className="text-lg font-medium mb-1">{member.name}</h4>
                <p className="text-gray-600">{member.affiliation}</p>
                <p className="text-gray-500 text-sm">{member.country}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 italic">...and 50+ more reviewers from around the world</p>
          </div>
        </div>
        
        {/* Steering Committee */}
        <div>
          <div className="flex items-center mb-8">
            <Lightbulb className="h-8 w-8 text-blue-700 mr-4" />
            <h3 className="text-2xl font-semibold text-blue-800">Steering Committee</h3>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steeringCommittee.map((member, index) => (
                <div key={index} className="p-4 border-b border-gray-100 last:border-0">
                  <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                  {member.role && <p className="text-blue-600 text-sm mb-1">{member.role}</p>}
                  <p className="text-gray-600">{member.affiliation}</p>
                  <p className="text-gray-500 text-sm">{member.country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold mb-4 text-blue-800">Advisory Board</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          <div className="flex items-start">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
            <div>
              <h4 className="font-medium">Prof. Yoshiro Matsuda</h4>
              <p className="text-gray-600 text-sm">University of Tokyo, Japan</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
            <div>
              <h4 className="font-medium">Dr. Elizabeth Morrison</h4>
              <p className="text-gray-600 text-sm">OpenAI, USA</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
            <div>
              <h4 className="font-medium">Prof. Alan Davidson</h4>
              <p className="text-gray-600 text-sm">University of Edinburgh, UK</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
            <div>
              <h4 className="font-medium">Dr. Sunita Patel</h4>
              <p className="text-gray-600 text-sm">IBM Research, India</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
            <div>
              <h4 className="font-medium">Prof. Luis Martinez</h4>
              <p className="text-gray-600 text-sm">University of São Paulo, Brazil</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
            <div>
              <h4 className="font-medium">Dr. Chen Wei</h4>
              <p className="text-gray-600 text-sm">Tsinghua University, China</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;