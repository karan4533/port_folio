import React from 'react';

const IndustryProjects = ({ projects }) => {
  return (
    <section id="industry-projects" className="radiant-card p-6 md:p-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mr-4 shadow-md">
          <i className="fas fa-rocket text-white text-xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Projects</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className={`${project.icon} text-white text-sm`}></i>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-sm leading-tight">{project.title}</h4>
                <div className="flex items-center gap-2 flex-wrap mt-0.5">
                  {project.period && (
                    <span className="text-xs text-blue-600 font-semibold">{project.period}</span>
                  )}
                  {project.type && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{project.type}</span>
                  )}
                </div>
              </div>
            </div>
            <ul className="space-y-1.5 ml-1 mb-3">
              {project.highlights.map((highlight, hIndex) => (
                <li key={hIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                  <i className="fas fa-chevron-right text-blue-500 text-[10px] mt-1.5 flex-shrink-0"></i>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-900 hover:text-white px-3 py-1.5 rounded-lg transition-all duration-200"
              >
                <i className="fab fa-github text-sm"></i>
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryProjects;
