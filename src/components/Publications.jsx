import React from 'react';

const Publications = ({ data }) => {
  const pubStats = [
    { label: "Research Papers", value: data.publications.papers, icon: "fas fa-file-alt", color: "bg-purple-600" },
    { label: "Scopus Indexed", value: data.publications.scopusIndexed, icon: "fas fa-book", color: "bg-indigo-600" },
    { label: "SCI / SCIE", value: data.publications.sciScie, icon: "fas fa-star", color: "bg-violet-600" },
    { label: "Book Chapters", value: data.publications.bookChapters, icon: "fas fa-bookmark", color: "bg-purple-700" },
    { label: "Patents", value: data.publications.patents, icon: "fas fa-lightbulb", color: "bg-indigo-700" },
    { label: "PhD Scholars Guided", value: data.publications.phdScholars, icon: "fas fa-user-graduate", color: "bg-violet-700" }
  ];

  return (
    <section id="publications" className="space-y-6">
      {/* Research Stats */}
      <div className="radiant-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mr-4 shadow-md">
            <i className="fas fa-file-alt text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Research & Publications</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {pubStats.map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 hover:shadow-md transition-all duration-200">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                <i className={`${stat.icon} text-white text-sm`}></i>
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Book */}
        {data.publications.books && data.publications.books.length > 0 && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-book text-2xl"></i>
              </div>
              <div>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">Published Book</p>
                <h4 className="font-bold text-lg">{data.publications.books[0].title}</h4>
                <p className="text-white/80 text-sm">{data.publications.books[0].publisher}, {data.publications.books[0].year}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Research Funding */}
      <div className="radiant-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mr-4 shadow-md">
            <i className="fas fa-hand-holding-usd text-white text-xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Research Funding & Consultancy</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {data.researchFunding.map((fund, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-100 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                <i className={`${fund.icon} text-white text-sm`}></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{fund.title}</h4>
                <p className="text-green-700 font-bold text-lg">{fund.amount}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Consultancy */}
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-2 text-sm">
            <i className="fas fa-handshake text-purple-600 mr-2"></i>Consultancy Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.consultancy.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-white border border-gray-300 rounded-full text-gray-700 text-xs font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
