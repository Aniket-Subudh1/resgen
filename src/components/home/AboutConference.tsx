import React from 'react';
import { Brain, ShieldCheck, Globe, Lightbulb } from 'lucide-react';

const AboutConference: React.FC = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">About ResGenXAI-2025</h2>
      
      <div className="mb-8">
        <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto leading-relaxed">
          The International Conference on Responsible Generative AI (ResGenXAI-2025) brings together researchers, industry professionals, policymakers, and ethicists to address the challenges and opportunities of generative AI technologies in a responsible and ethical manner.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-blue-100 rounded-full text-blue-700">
            <Brain size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Cutting-edge Research</h3>
            <p className="text-gray-600">
              Showcasing the latest advancements in generative AI, including large language models, diffusion models, and multimodal architectures, with a focus on interpretability and transparency.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-blue-100 rounded-full text-blue-700">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Ethical Considerations</h3>
            <p className="text-gray-600">
              Addressing the ethical implications of generative AI technologies, including bias mitigation, fairness, privacy concerns, and the development of robust governance frameworks.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-blue-100 rounded-full text-blue-700">
            <Globe size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Global Perspectives</h3>
            <p className="text-gray-600">
              Bringing together diverse viewpoints from around the world to ensure that the development and deployment of generative AI is inclusive and considerate of various cultural contexts.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-blue-100 rounded-full text-blue-700">
            <Lightbulb size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Practical Applications</h3>
            <p className="text-gray-600">
              Exploring real-world applications of responsible generative AI across various domains including healthcare, education, creative industries, and scientific research.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold mb-3 text-blue-900">Conference Theme 2025: "Generative AI for Societal Good"</h3>
        <p className="text-gray-700 leading-relaxed">
          This year's conference focuses on how generative AI can be harnessed to address pressing societal challenges while ensuring equitable benefits and minimizing potential harms. We invite submissions that demonstrate novel applications of generative AI for social good, approaches to mitigate risks, and frameworks for evaluating the societal impact of these technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutConference;