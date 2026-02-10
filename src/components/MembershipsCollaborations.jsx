import React from 'react';

const MembershipsCollaborations = ({ data }) => {
  return (
    <section id="memberships" className="space-y-6">
      {/* Global Collaborations */}
      <div className="radiant-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mr-4 shadow-md">
            <i className="fas fa-globe text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Global Collaborations</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.globalCollaborations.map((collab, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <i className={`${collab.icon} text-white text-sm`}></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{collab.institution}</h4>
                <p className="text-gray-500 text-xs">
                  {collab.type ? `${collab.type} • ` : ''}{collab.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Memberships */}
      <div className="radiant-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mr-4 shadow-md">
            <i className="fas fa-id-badge text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Professional Memberships</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.professionalMemberships.map((mem, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transition-all duration-200">
              <div className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                <i className={`${mem.icon} text-white text-xs`}></i>
              </div>
              <div>
                <span className="text-xs text-purple-600 font-semibold uppercase">{mem.title}</span>
                <h4 className="font-bold text-gray-900 text-sm">{mem.organization}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipsCollaborations;
