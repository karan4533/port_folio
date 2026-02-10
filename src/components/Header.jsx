import React from 'react';

const Header = ({ name, onMenuClick }) => {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden w-10 h-10 rounded-lg bg-primary hover:bg-primary-dark flex items-center justify-center text-white transition-all duration-200"
          >
            <i className="fas fa-bars text-lg"></i>
          </button>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">{name}</h2>
            <p className="text-xs text-primary font-semibold">Technology Leader & AI Architect</p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-lg bg-primary hover:bg-primary-dark flex items-center justify-center text-white transition-all duration-200">
          <i className="fas fa-home text-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
