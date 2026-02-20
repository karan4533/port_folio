import React from 'react';

const CertificationsAwards = ({ data }) => {
  return (
    <section id="certifications" className="space-y-6">
      {/* Certifications */}
      <div className="radiant-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mr-4 shadow-md">
            <i className="fas fa-certificate text-white text-xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            <p className="text-purple-600 text-sm font-semibold">Earned During Studies & Work</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 hover:shadow-md hover:border-purple-300 transition-all duration-200 group">
              <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className={`${cert.icon} text-white text-sm`}></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{cert.name}</h4>
                <p className="text-gray-500 text-xs">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Honors */}
      <div className="radiant-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center mr-4 shadow-md">
            <i className="fas fa-trophy text-white text-xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Awards & Honors</h3>
            <p className="text-amber-600 text-sm font-semibold">Recognition & Honors</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.awards.map((award, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100 hover:shadow-md hover:border-amber-300 transition-all duration-200 group">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className={`${award.icon} text-white text-sm`}></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{award.title}</h4>
                <p className="text-gray-500 text-xs">
                  {award.year ? award.year : award.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsAwards;
