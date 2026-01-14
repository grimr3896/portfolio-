
import React from 'react';
import { DESKTOP_ICONS } from '../constants';
import { AppID } from '../types';

interface StartMenuProps {
  onAppClick: (id: AppID) => void;
  onClose: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ onAppClick, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[8888] flex items-end animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="taskbar-blur w-full max-w-[500px] h-[600px] mb-10 ml-0 p-6 flex flex-col gap-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
          <div className="w-12 h-12 rounded-full bg-gray-500 overflow-hidden">
            <img src="https://picsum.photos/seed/user/100" alt="User" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">User Admin</h2>
            <p className="text-xs text-gray-400">Software Engineer</p>
          </div>
          <button className="text-white hover:text-blue-400 transition-colors">
            <i className="fa-solid fa-power-off text-lg"></i>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1 overflow-y-auto pr-2 no-scrollbar">
          {DESKTOP_ICONS.map((icon, idx) => (
            <button
              key={icon.id}
              onClick={() => onAppClick(icon.id)}
              className={`${icon.color} p-4 aspect-square flex flex-col justify-between items-start group hover:scale-[1.02] transition-transform relative overflow-hidden`}
              style={{ 
                gridColumn: idx === 0 ? 'span 2' : 'span 1',
                aspectRatio: idx === 0 ? '2/1' : '1/1'
              }}
            >
              <i className={`fa-solid ${icon.icon} text-3xl opacity-80 group-hover:opacity-100`}></i>
              <span className="text-sm font-semibold">{icon.label}</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
            </button>
          ))}
        </div>

        <div className="flex justify-between text-xs text-gray-400">
          <div className="flex gap-4">
            <button className="hover:text-white">Documents</button>
            <button className="hover:text-white">Pictures</button>
            <button className="hover:text-white">Settings</button>
          </div>
          <span>v2.0.24</span>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
