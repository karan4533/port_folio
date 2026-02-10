import React from 'react';

const SectionDivider = ({ number, title, subtitle, color = "blue" }) => {
  const gradients = {
    blue: "from-blue-700 to-indigo-600",
    purple: "from-purple-700 to-indigo-600"
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${gradients[color]} p-6 md:p-8 shadow-lg`}>
      <div className="relative z-10 flex items-center gap-4">
        <span className="text-6xl font-black text-white/15 leading-none select-none">{number}</span>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
          {subtitle && <p className="text-white/70 text-sm mt-1 font-medium">{subtitle}</p>}
        </div>
      </div>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-24 w-24 h-24 bg-white/5 rounded-full translate-y-1/2" />
      <div className="absolute top-1/2 right-16 w-12 h-12 bg-white/5 rounded-full" />
    </div>
  );
};

export default SectionDivider;
