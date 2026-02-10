import React from 'react';

const PlaceholderSection = ({ id, title, icon }) => {
  return (
    <section id={id} className="radiant-card rounded-3xl transition-all duration-200 p-6 md:p-8 mb-6 hover:scale-105">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-lime-blue flex items-center justify-center mr-4 shadow-2xl shadow-violet/50 animate-glow">
          <i className={`${icon} text-white text-2xl drop-shadow-lg`}></i>
        </div>
        <h3 className="text-3xl font-bold text-white drop-shadow-2xl glow-text">{title}</h3>
      </div>
      
      <div className="bg-white/20 backdrop-blur-xl border-2 border-dashed border-white/40 rounded-2xl p-12 text-center hover:border-white/60 hover:bg-white/30 transition-all duration-300 group">
        <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-lime-blue flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-violet/50 animate-glow">
          <i className={`${icon} text-5xl text-white drop-shadow-2xl`}></i>
        </div>
        <p className="text-white text-2xl font-bold mb-3 drop-shadow-2xl glow-text">
          {title}
        </p>
        <p className="text-white/90 text-base font-semibold max-w-md mx-auto drop-shadow-lg">
          This section is ready for your {title.toLowerCase()} content. Add your information to showcase your achievements.
        </p>
      </div>
    </section>
  );
};

export default PlaceholderSection;
