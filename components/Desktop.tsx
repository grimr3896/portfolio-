
import React, { useState, useEffect } from 'react';
import { DESKTOP_ICONS } from '../constants';
import { AppID } from '../types';

interface DesktopProps {
  onIconClick: (id: AppID) => void;
}

const ABOUT_HIGHLIGHTS = [
  "Digital Agent & System Designer",
  "AI & Automation Specialist",
  "Creator of Immersive Systems",
  "Award Winning Portfolio 2025"
];

const RESUME_HIGHLIGHTS = [
  "Tony Langat - System Designer",
  "Expert in AI & Automation",
  "Best Portfolio - Tech Expo 2025",
  "Certified n8n/OpenAI Architect"
];

const PROJECT_HIGHLIGHTS = [
  "AI Portfolio System",
  "Multi-user Marketplace",
  "AI Video Editing Tool",
  "n8n Workflow Design"
];

const Desktop: React.FC<DesktopProps> = ({ onIconClick }) => {
  const [highlightIdx, setHighlightIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIdx(prev => (prev + 1) % ABOUT_HIGHLIGHTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 bg-[#004a7c] metro-bg flex flex-col p-8 md:p-14 overflow-hidden">
      {/* Header Area */}
      <div className="mb-8 flex items-end justify-between pr-8 md:pr-14">
        <h1 className="text-6xl font-light text-white select-none tracking-tight">Start</h1>
        <div className="flex items-center gap-4 text-white">
          <div className="text-right">
            <p className="text-sm md:text-base leading-none font-light">Tony Langat</p>
          </div>
          <div className="w-10 h-10 bg-white/20 border border-white/40 rounded-sm overflow-hidden shadow-lg transition-transform hover:scale-110 cursor-pointer">
             <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=128" alt="avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar pb-24">
        <div className="h-full flex gap-12 min-w-max pr-32">
          
          {/* Main Apps Group */}
          <div className="flex flex-col flex-wrap gap-1 content-start h-full">
            {DESKTOP_ICONS.slice(0, 7).map((icon) => {
              const isWide = icon.size === 'wide';
              const isAbout = icon.id === 'about';
              const isResume = icon.id === 'resume';
              const isProjects = icon.id === 'projects';

              return (
                <button
                  key={icon.id}
                  onClick={() => onIconClick(icon.id)}
                  className={`
                    ${icon.bgClass} 
                    ${isWide ? 'w-[324px] h-[160px]' : 'w-[160px] h-[160px]'} 
                    relative group transition-all duration-75 active:scale-95 hover:outline hover:outline-2 hover:outline-white/70 shadow-sm
                    flex flex-col items-center justify-center p-4 overflow-hidden
                  `}
                >
                  {/* Background Image */}
                  {icon.tileImg && (
                    <img 
                      src={icon.tileImg} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" 
                    />
                  )}
                  
                  {/* Special Live Tile content for About */}
                  {isAbout && (
                    <div className="absolute inset-x-0 top-0 p-4 animate-fade-in pointer-events-none text-left">
                      <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">Intro</p>
                      <p className="text-xs font-bold leading-tight transition-opacity duration-500" key={`about-${highlightIdx}`}>
                        {ABOUT_HIGHLIGHTS[highlightIdx]}
                      </p>
                    </div>
                  )}

                  {/* Special Live Tile content for Resume */}
                  {isResume && (
                    <div className="absolute inset-x-0 top-0 p-4 animate-fade-in pointer-events-none text-left">
                      <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">Status</p>
                      <p className="text-xs font-bold leading-tight transition-opacity duration-500" key={`resume-${highlightIdx}`}>
                        {RESUME_HIGHLIGHTS[highlightIdx]}
                      </p>
                    </div>
                  )}

                  {/* Special Live Tile content for Projects */}
                  {isProjects && (
                    <div className="absolute inset-x-0 top-0 p-4 animate-fade-in pointer-events-none text-left">
                      <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">Featured</p>
                      <p className="text-xs font-bold leading-tight transition-opacity duration-500" key={`projects-${highlightIdx}`}>
                        {PROJECT_HIGHLIGHTS[highlightIdx]}
                      </p>
                    </div>
                  )}

                  <div className={`absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors pointer-events-none`}></div>

                  <i className={`fa-solid ${icon.icon} ${icon.color} text-4xl relative z-10 opacity-90 drop-shadow-lg group-hover:scale-110 transition-transform`}></i>
                  
                  <span className={`absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-wider ${icon.color} relative z-10 drop-shadow-sm`}>
                    {icon.label}
                  </span>
                  
                  <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-white/20 z-20"></div>
                </button>
              );
            })}
          </div>

          {/* Secondary Apps Group */}
          <div className="flex flex-col flex-wrap gap-1 content-start h-full">
             {DESKTOP_ICONS.slice(7).map((icon) => {
              const isWide = icon.size === 'wide';
              return (
                <button
                  key={icon.id}
                  onClick={() => onIconClick(icon.id)}
                  className={`
                    ${icon.bgClass} 
                    ${isWide ? 'w-[324px] h-[160px]' : 'w-[160px] h-[160px]'} 
                    relative group transition-all duration-75 active:scale-95 hover:outline hover:outline-2 hover:outline-white/70 shadow-sm
                    flex flex-col items-center justify-center p-4 overflow-hidden
                  `}
                >
                  {icon.tileImg && (
                    <img 
                      src={icon.tileImg} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" 
                    />
                  )}
                  <div className={`absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors pointer-events-none`}></div>
                  <i className={`fa-solid ${icon.icon} ${icon.color} text-4xl relative z-10 opacity-90 drop-shadow-lg group-hover:scale-110 transition-transform`}></i>
                  <span className={`absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-wider ${icon.color} relative z-10 drop-shadow-sm`}>
                    {icon.label}
                  </span>
                  <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-white/20 z-20"></div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
      
      {/* Search & Power Controls at bottom right */}
      <div className="absolute bottom-16 right-12 flex gap-8 text-white/50">
        <button className="hover:text-white transition-colors flex items-center gap-3 group">
          <i className="fa-solid fa-magnifying-glass text-2xl group-hover:scale-110 transition-transform"></i>
          <span className="text-xs uppercase font-bold tracking-widest hidden md:inline">Search</span>
        </button>
        <button className="hover:text-white transition-colors flex items-center gap-3 group">
          <i className="fa-solid fa-power-off text-2xl group-hover:scale-110 transition-transform"></i>
          <span className="text-xs uppercase font-bold tracking-widest hidden md:inline">Power</span>
        </button>
      </div>

      <div className="fixed inset-0 pointer-events-none bg-gradient-to-tr from-black/20 via-transparent to-white/5"></div>
    </div>
  );
};

export default Desktop;
