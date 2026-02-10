import React from 'react';

const Sidebar = ({ data, activeSection, onNavigate }) => {
  let lastGroup = null;

  return (
    <div className="fixed left-0 top-0 h-screen w-80 bg-sidebar text-white overflow-y-auto z-50 hidden lg:block">
      {/* Logo Section */}
      <div className="px-6 pb-5 pt-6 border-b border-white/10">
        <div className="mb-3">
          <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-3">
            <i className="fas fa-brain text-2xl text-white"></i>
          </div>
        </div>
        <h1 className="text-base font-bold mb-1 leading-tight text-white">
          {data.labName}
        </h1>
        <p className="text-xs text-white/70 mb-0.5 font-medium">{data.department}</p>
        <p className="text-xs text-white/60 font-medium">{data.university}</p>
      </div>

      {/* Navigation Menu */}
      <nav className="py-3">
        {data.navigation.map((item) => {
          const showGroupHeader = item.group && item.group !== lastGroup;
          if (item.group) lastGroup = item.group;

          return (
            <React.Fragment key={item.id}>
              {showGroupHeader && (
                <div className="px-6 pt-4 pb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${
                    item.group === 'IT / INDUSTRY' ? 'text-blue-400' : 'text-purple-400'
                  }`}>
                    {item.group}
                  </span>
                </div>
              )}
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full text-left px-6 py-2.5 flex items-center space-x-3 transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-white/10 border-l-4 border-blue-400 text-white'
                    : 'text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                }`}
              >
                <i className={`${item.icon} text-sm w-5`}></i>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
