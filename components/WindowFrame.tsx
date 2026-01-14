
import React from 'react';
import { WindowState } from '../types';
import { DESKTOP_ICONS } from '../constants';

interface WindowFrameProps {
  winState: WindowState;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

const WindowFrame: React.FC<WindowFrameProps> = ({ 
  winState, 
  onClose, 
  onMinimize, 
  onMaximize, 
  onFocus, 
  children 
}) => {
  if (!winState.isOpen || winState.isMinimized) return null;

  const iconConfig = DESKTOP_ICONS.find(i => i.id === winState.id);

  return (
    <div
      onMouseDown={onFocus}
      className={`absolute window-shadow bg-white flex flex-col transition-all duration-200 overflow-hidden border border-black/5 ${
        winState.isMaximized 
          ? 'inset-0 mb-10' 
          : 'top-[10%] left-[10%] w-[80%] h-[70%] md:w-[800px] md:h-[500px]'
      }`}
      style={{ zIndex: winState.zIndex }}
    >
      {/* Minimal Title Bar */}
      <div className="h-10 bg-white flex items-center justify-between px-4 cursor-default select-none border-b border-gray-100">
        <div className="flex items-center gap-4">
          <i className={`fa-solid ${iconConfig?.icon} text-lg text-gray-400`}></i>
          <span className="text-xs font-black text-gray-900 uppercase tracking-[0.2em] truncate max-w-[250px]">{iconConfig?.label}</span>
        </div>
        <div className="flex h-full">
          <button 
            onClick={onMinimize} 
            title="Minimize"
            className="w-12 h-full flex items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <i className="fa-solid fa-minus text-xs"></i>
          </button>
          <button 
            onClick={onMaximize} 
            title={winState.isMaximized ? "Restore" : "Maximize"}
            className="w-12 h-full flex items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <i className={`fa-regular ${winState.isMaximized ? 'fa-window-restore' : 'fa-square'} text-xs`}></i>
          </button>
          <button 
            onClick={onClose} 
            title="Close"
            className="w-14 h-full flex items-center justify-center hover:bg-[#e81123] hover:text-white text-gray-400 transition-colors"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>
      
      {/* App Content */}
      <div className="flex-1 overflow-auto bg-gray-50 text-black">
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;
