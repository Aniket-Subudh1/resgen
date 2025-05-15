import React from 'react';
import { FileText, Bookmark, TagIcon, CalendarCheck } from 'lucide-react';

interface Topic {
  category: string;
  items: string[];
}

const CallForPapers: React.FC = () => {
  const topics: Topic[] = [
    {
      category: 'Technical Advancements',
      items: [
        'Novel architectures for generative AI',
        'Interpretability and explainability methods',
        'Efficiency and scalability in generative models',
        'Multimodal generative approaches',
        'Foundation models and their capabilities',
        'Knowledge integration in generative systems'
      ]
    },
    {
      category: 'Responsible AI',
      items: [
        'Bias detection and mitigation in generative outputs',
        'Privacy-preserving generative techniques',
        'Safety mechanisms and content filtering',
        'Trustworthiness and reliability metrics',
        'Watermarking and attribution methods',
        'Red-teaming and adversarial evaluation'
      ]
    },
    {
      category: 'Applications',
      items: [
        'Generative AI for healthcare and biomedicine',
        'Educational applications and tutoring systems',
        'Creative applications in art, music, and design',
        'Scientific discovery and research acceleration',
        'Assistive technologies for accessibility',
        'Humanitarian and sustainability applications'
      ]
    },
    {
      category: 'Governance & Ethics',
      items: [
        'Regulatory frameworks for generative AI',
        'Ethical guidelines and principles',
        'Cross-cultural perspectives on AI governance',
        'Impact assessment methodologies',
        'Participatory design of governance structures',
        'Long-term implications of generative systems'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Call for Papers</h2>
      
      <div className="mb-12 p-6 bg-blue-50 rounded-lg shadow-sm">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We invite researchers, practitioners, and scholars to submit original research papers addressing the challenges and opportunities of responsible generative AI. The conference aims to advance the state-of-the-art while ensuring these powerful technologies are developed and deployed in ways that benefit society.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          This year's theme, "Generative AI for Societal Good," encourages submissions that demonstrate how these technologies can address pressing social challenges while maintaining ethical standards and ensuring equitable benefits.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Bookmark className="h-6 w-6 text-blue-700 mr-3" />
            <h3 className="text-xl font-semibold">Submission Types</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <div>
                <span className="font-medium">Full Papers</span> (up to 10 pages): Original research with substantial contributions.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span> 
              <div>
                <span className="font-medium">Short Papers</span> (up to 5 pages): Work in progress or preliminary results.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span> 
              <div>
                <span className="font-medium">Demos</span> (up to 4 pages): System demonstrations with technical descriptions.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span> 
              <div>
                <span className="font-medium">Position Papers</span> (up to 6 pages): Well-argued perspectives on emerging issues.
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-blue-700 mr-3" />
            <h3 className="text-xl font-semibold">Submission Guidelines</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span> 
              <div>
                Papers must be submitted in PDF format using the ACM template.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span> 
              <div>
                All submissions must be in English and anonymized for double-blind review.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span> 
              <div>
                Submissions must be original work not published elsewhere.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span> 
              <div>
                Page limits include figures, tables, and references.
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span> 
              <div>
                Supplementary materials can be included but review is not guaranteed.
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <TagIcon className="h-6 w-6 text-blue-700 mr-3" />
          <h3 className="text-2xl font-semibold text-blue-900">Topics of Interest</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold mb-3 text-blue-800">{topic.category}</h4>
              <ul className="space-y-2">
                {topic.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <CalendarCheck className="h-6 w-6 text-white mr-3" />
          <h3 className="text-xl font-semibold">Key Dates</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <span>Paper Submission Deadline:</span>
            <span className="font-medium">July 15, 2025</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Notification of Acceptance:</span>
            <span className="font-medium">August 30, 2025</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Camera-Ready Submission:</span>
            <span className="font-medium">September 25, 2025</span>
          </li>
        </ul>
        <div className="mt-4 pt-4 border-t border-blue-600">
          <p className="text-blue-100">All deadlines are 11:59 PM AoE (Anywhere on Earth)</p>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;