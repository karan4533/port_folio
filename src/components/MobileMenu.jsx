import React from 'react';

const MobileMenu = ({ data, activeSection, onNavigate, isOpen, onClose }) => {
  if (!isOpen) return null;

  let lastGroup = null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Menu */}
      <div className="absolute left-0 top-0 h-full w-80 bg-sidebar text-white overflow-y-auto shadow-lg">
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 text-white"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>

        {/* Logo Section */}
        <div className="px-6 pb-5 pt-2 border-b border-white/10">
          <div className="mb-3">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-3">
              <i className="fas fa-brain text-2xl text-white"></i>
            </div>
          </div>
          <h1 className="text-base font-bold mb-1 leading-tight text-white">{data.labName}</h1>
          <p className="text-xs text-white/70 mb-0.5 font-medium">{data.department}</p>
          <p className="text-xs text-white/60 font-medium">{data.university}</p>
        </div>

        {/* Navigation Menu */}
        <nav className="py-3 px-2">
          {data.navigation.map((item) => {
            const showGroupHeader = item.group && item.group !== lastGroup;
            if (item.group) lastGroup = item.group;

            return (
              <React.Fragment key={item.id}>
                {showGroupHeader && (
                  <div className="px-4 pt-4 pb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${
                      item.group === 'IT / INDUSTRY' ? 'text-blue-400' : 'text-purple-400'
                    }`}>
                      {item.group}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg flex items-center space-x-3 transition-all duration-200 mb-0.5 ${
                    activeSection === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-white/70'
                  }`}>
                    <i className={`${item.icon} text-sm`}></i>
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
