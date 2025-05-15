import React from 'react';
import { FileType, FileCheck, UserCheck, ClipboardCheck } from 'lucide-react';

const Guidelines: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Author & Reviewer Guidelines</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Author Guidelines */}
        <div>
          <div className="flex items-center mb-6">
            <FileType className="h-7 w-7 text-blue-700 mr-3" />
            <h3 className="text-2xl font-semibold text-blue-800">For Authors</h3>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-100 p-4 border-l-4 border-blue-600">
              <h4 className="font-medium text-lg text-blue-900">Submission Requirements</h4>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-gray-700">
                All papers must adhere to the ACM conference template format. The template files and detailed instructions are available on the conference website. Papers must be submitted as PDF files through the conference submission system.
              </p>
              
              <h5 className="font-medium text-blue-800 mt-4">Formatting Guidelines</h5>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Use the provided ACM template without modification</li>
                <li>Set page size to US Letter (8.5" x 11")</li>
                <li>Use 9-point Times New Roman font for main text</li>
                <li>Set page margins to 1" on all sides</li>
                <li>Number all pages</li>
                <li>Include proper section headings and references</li>
              </ul>
              
              <h5 className="font-medium text-blue-800 mt-4">Anonymization Requirements</h5>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Remove author names, affiliations, and acknowledgments</li>
                <li>Mask self-references that reveal authors' identities</li>
                <li>Avoid links to personal websites or repositories</li>
                <li>Do not include funding information that identifies authors</li>
                <li>Consider masking or anonymizing code repositories</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-100 p-4 border-l-4 border-blue-600">
              <h4 className="font-medium text-lg text-blue-900">Ethical Considerations</h4>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-gray-700">
                Authors must ensure their research complies with ethical standards. When submitting a paper, authors are required to address the following ethical considerations:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Potential societal impacts (positive and negative) of the research</li>
                <li>Data collection and usage methods, including consent procedures</li>
                <li>Privacy considerations and data anonymization techniques</li>
                <li>Fairness, bias, and discrimination concerns in methodologies</li>
                <li>Environmental impact of computational resources used</li>
                <li>Conflicts of interest related to the research</li>
              </ul>
              
              <p className="mt-4 text-gray-700">
                A dedicated ethics statement section is required for all submissions. This statement will not count towards the page limit.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-100 p-4 border-l-4 border-blue-600">
              <h4 className="font-medium text-lg text-blue-900">Camera-Ready Submission</h4>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-gray-700">
                For accepted papers, authors must prepare a camera-ready version that incorporates reviewer feedback and follows these additional guidelines:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Restore author names, affiliations, and acknowledgments</li>
                <li>Address all reviewer comments and suggestions</li>
                <li>Include the provided copyright notice on the first page</li>
                <li>Proofread carefully for grammar and spelling errors</li>
                <li>Ensure all figures and tables are readable when printed</li>
                <li>Submit source files (LaTeX/Word) along with the final PDF</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Reviewer Guidelines */}
        <div>
          <div className="flex items-center mb-6">
            <UserCheck className="h-7 w-7 text-blue-700 mr-3" />
            <h3 className="text-2xl font-semibold text-blue-800">For Reviewers</h3>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-100 p-4 border-l-4 border-blue-600">
              <h4 className="font-medium text-lg text-blue-900">Review Process</h4>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-gray-700">
                ResGenXAI-2025 follows a double-blind review process. Each paper will be reviewed by at least three experts in the field. The review process consists of the following stages:
              </p>
              
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Initial screening for scope and quality</li>
                <li>Assignment to expert reviewers</li>
                <li>Individual blind reviews</li>
                <li>Discussion among reviewers</li>
                <li>Final decision by the program committee</li>
                <li>Notification to authors</li>
              </ol>
              
              <p className="mt-4 text-gray-700">
                Reviewers are expected to provide constructive feedback, even for papers they recommend for rejection. This feedback should help authors improve their work regardless of the acceptance decision.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-100 p-4 border-l-4 border-blue-600">
              <h4 className="font-medium text-lg text-blue-900">Evaluation Criteria</h4>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-gray-700">
                Reviewers should evaluate submissions based on the following criteria:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-blue-800">Technical Quality (40%)</h5>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Soundness of methodology</li>
                    <li>Technical correctness</li>
                    <li>Rigor of experiments and analysis</li>
                    <li>Reproducibility of results</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-blue-800">Novelty and Originality (20%)</h5>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Advancement beyond state-of-the-art</li>
                    <li>Innovation in approach or application</li>
                    <li>Novel insights or perspectives</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-blue-800">Relevance and Significance (20%)</h5>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Alignment with conference themes</li>
                    <li>Potential impact on the field</li>
                    <li>Addressing important problems or challenges</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-blue-800">Ethical Considerations (10%)</h5>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Adequate treatment of ethical implications</li>
                    <li>Responsible research practices</li>
                    <li>Appropriate handling of bias and fairness concerns</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-blue-800">Presentation Quality (10%)</h5>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Clarity of writing</li>
                    <li>Organization and structure</li>
                    <li>Quality of figures and tables</li>
                    <li>Comprehensiveness of literature review</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-100 p-4 border-l-4 border-blue-600">
              <h4 className="font-medium text-lg text-blue-900">Code of Conduct</h4>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-gray-700">
                Reviewers are expected to adhere to the following code of conduct:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Maintain confidentiality of submissions</li>
                <li>Declare conflicts of interest immediately</li>
                <li>Provide objective and unbiased evaluations</li>
                <li>Be constructive and respectful in feedback</li>
                <li>Complete reviews by the assigned deadlines</li>
                <li>Participate actively in the discussion phase</li>
                <li>Respect the double-blind review process</li>
              </ul>
              
              <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                <p className="text-blue-800 font-medium flex items-center">
                  <ClipboardCheck className="h-5 w-5 mr-2" />
                  Reviewer resources, including templates and detailed guidelines, are available in the reviewer portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;