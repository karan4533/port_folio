import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="radiant-card p-6 md:p-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mr-4 shadow-md">
          <i className="fas fa-briefcase text-white text-xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
      </div>

      <div className="relative space-y-6">
        {/* Timeline line */}
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-blue-200"></div>

        {experience.map((exp, index) => (
          <div key={index} className="relative pl-16">
            {/* Timeline dot */}
            <div className={`absolute left-4 top-7 w-5 h-5 rounded-full shadow-md border-2 ${exp.current ? 'bg-green-500 border-green-300 animate-pulse' : 'bg-blue-600 border-blue-300'}`}></div>

            {/* Content card */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <h4 className="text-lg font-bold text-gray-900">{exp.position}</h4>
                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0 ${exp.current ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                  <i className={`fas ${exp.current ? 'fa-circle text-green-500' : 'fa-clock'} mr-1.5 text-[10px]`}></i>
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-700 font-semibold mb-1 flex items-center">
                <i className="fas fa-building text-blue-600 mr-2 text-sm"></i>
                {exp.organization}
              </p>

              {/* Clients */}
              {exp.clients && (
                <div className="mt-2 mb-3 p-2.5 rounded-lg bg-amber-50 border border-amber-200">
                  <p className="text-sm font-semibold text-amber-800">
                    <i className="fas fa-handshake text-amber-600 mr-2"></i>
                    Clients: <span className="font-medium text-amber-700">{exp.clients}</span>
                  </p>
                </div>
              )}

              {/* Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2.5 text-gray-600">
                      <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="fas fa-check text-blue-600 text-[10px]"></i>
                      </div>
                      <span className="text-sm font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.githubUrl && (
                <div className="mt-4">
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-900 hover:text-white px-3 py-1.5 rounded-lg transition-all duration-200"
                  >
                    <i className="fab fa-github text-sm"></i>
                    View Project on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
