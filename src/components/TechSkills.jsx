import React from 'react';

const TechSkills = ({ techSkills }) => {
  const colors = [
    "from-blue-600 to-blue-700",
    "from-indigo-600 to-indigo-700",
    "from-violet-600 to-violet-700",
    "from-blue-700 to-indigo-600",
    "from-cyan-600 to-blue-600",
    "from-blue-600 to-violet-600",
    "from-indigo-600 to-blue-700",
    "from-violet-600 to-blue-600"
  ];

  return (
    <section id="tech-skills" className="radiant-card p-6 md:p-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mr-4 shadow-md">
          <i className="fas fa-code text-white text-xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Technology Skills</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {techSkills.map((category, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 group"
          >
            {/* Category Header */}
            <div className={`bg-gradient-to-r ${colors[index % colors.length]} px-4 py-3 flex items-center gap-2`}>
              <i className={`${category.icon} text-white text-sm`}></i>
              <h4 className="font-bold text-white text-sm">{category.category}</h4>
            </div>
            {/* Skills */}
            <div className="p-3">
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
