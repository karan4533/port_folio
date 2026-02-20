import React from 'react';

const IndustryOverview = ({ data }) => {
  return (
    <section id="industry-overview" className="space-y-6">
      {/* Brand Statement */}
      <div className="radiant-card p-6 md:p-8 border-l-4 border-blue-600">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
            <i className="fas fa-bullseye text-white text-xl"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Objective</h3>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              {data.brandStatement}
            </p>
          </div>
        </div>
      </div>

      {/* Industry Leadership Summary */}
      <div className="radiant-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mr-4 shadow-md">
            <i className="fas fa-chart-line text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Key Highlights</h3>
        </div>
        <div className="space-y-3">
          {data.industryLeadership.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-all duration-200">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="fas fa-check text-white text-xs"></i>
              </div>
              <p className="text-gray-800 font-medium leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Industry Expertise */}
      <div className="radiant-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mr-4 shadow-md">
            <i className="fas fa-star text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Areas of Focus</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.coreExpertise.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <i className={`${item.icon} text-white`}></i>
              </div>
              <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
              {item.subtitle && (
                <p className="text-gray-500 text-xs mt-1">{item.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryOverview;
