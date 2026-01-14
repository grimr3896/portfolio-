
import React, { useState, useEffect } from 'react';
import { AppID, WindowState } from '../types';
import { DESKTOP_ICONS } from '../constants';

interface TaskbarProps {
  windows: Record<AppID, WindowState>;
  onStartClick: () => void;
  onAppClick: (id: AppID) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ windows, onStartClick, onAppClick }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 taskbar-blur flex items-center px-1 z-[9999]">
      {/* Start Button */}
      <button 
        onClick={onStartClick}
        className="h-full px-3 hover:bg-white/10 transition-colors flex items-center justify-center group"
      >
        <i className="fa-brands fa-windows text-lg text-blue-400 group-hover:text-blue-300"></i>
      </button>

      {/* Taskbar Apps */}
      <div className="flex-1 flex items-center h-full gap-1 ml-1 overflow-x-auto no-scrollbar">
        {/* Fix: Added explicit WindowState type to callback parameters to resolve 'unknown' property errors */}
        {Object.values(windows)
          .filter((win: WindowState) => win.isOpen)
          .map((win: WindowState) => {
            const iconConfig = DESKTOP_ICONS.find(i => i.id === win.id);
            return (
              <button
                key={win.id}
                onClick={() => onAppClick(win.id)}
                className={`h-full min-w-[40px] max-w-[160px] px-3 flex items-center gap-2 transition-colors relative border-b-2 ${
                  win.isMinimized ? 'bg-transparent border-gray-400' : 'bg-white/10 border-blue-400'
                } hover:bg-white/20`}
              >
                <i className={`fa-solid ${iconConfig?.icon} text-sm text-white`}></i>
                <span className="text-white text-xs truncate hidden sm:inline">
                  {iconConfig?.label}
                </span>
              </button>
            );
          })}
      </div>

      {/* System Tray */}
      <div className="h-full flex items-center gap-3 px-3 text-white text-[11px]">
        <div className="flex flex-col items-center leading-tight">
          <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span>{time.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <div className="h-full border-l border-white/20 pl-3 flex items-center hover:bg-white/10 px-2 cursor-pointer transition-colors" title="Show Desktop">
          <i className="fa-solid fa-message text-xs opacity-80"></i>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
