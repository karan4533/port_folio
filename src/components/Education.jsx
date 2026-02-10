import React from 'react';

const Education = ({ education }) => {
  return (
    <section id="education" className="radiant-card p-6 md:p-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mr-4 shadow-md">
          <i className="fas fa-graduation-cap text-white text-xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Education</h3>
      </div>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-purple-50 border border-purple-100 hover:bg-purple-100 hover:border-purple-300 transition-all duration-300 group"
          >
            <div className="flex items-start space-x-4">
              {/* PDF Badge */}
              <div className="flex-shrink-0">
                <a
                  href={edu.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold rounded-xl shadow-md hover:scale-105 transition-all duration-300"
                >
                  <div className="text-center">
                    <i className="fas fa-file-pdf text-xl mb-1"></i>
                    <div className="text-[10px] font-bold">PDF</div>
                  </div>
                </a>
              </div>

              {/* Education Details */}
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {edu.degree}
                </h4>
                <p className="text-gray-600 font-medium mb-1 flex items-center">
                  <i className="fas fa-university text-purple-600 mr-2 text-sm"></i>
                  {edu.university}
                </p>
                {edu.year && (
                  <div className="inline-flex items-center px-3 py-1 bg-purple-200 text-purple-800 rounded-lg text-sm font-semibold mt-2">
                    <i className="fas fa-calendar-alt mr-2 text-xs"></i>
                    {edu.year}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
