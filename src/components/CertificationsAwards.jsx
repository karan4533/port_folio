import React from 'react';
import { motion } from 'framer-motion';

const CertificationsAwards = ({ data }) => {
  return (
    <section id="certifications" className="space-y-6">
      {/* Certifications */}
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="radiant-card p-6 md:p-8">
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
            <motion.div key={index} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.07 }} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 hover:shadow-lg hover:border-purple-300 hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className={`${cert.icon} text-white text-sm`}></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{cert.name}</h4>
                <p className="text-gray-500 text-xs">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Awards & Honors */}
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="radiant-card p-6 md:p-8">
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
            <motion.div key={index} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.07 }} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100 hover:shadow-lg hover:border-amber-300 hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className={`${award.icon} text-white text-sm`}></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{award.title}</h4>
                <p className="text-gray-500 text-xs">
                  {award.year ? award.year : award.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsAwards;
