
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#004a7c] metro-bg flex flex-col items-center justify-center z-[10000]">
      <div className="flex flex-col items-center gap-12">
        {/* Windows 8 Logo Style */}
        <div className="text-white text-4xl font-light tracking-tighter select-none mb-4">
          <span className="font-bold">Windows</span> 8
        </div>
        
        <div className="pulse-animation">
          <div className="pulse-dot"></div>
          <div className="pulse-dot"></div>
          <div className="pulse-dot"></div>
        </div>
      </div>
      
      <div className="absolute bottom-12 text-white/40 text-sm uppercase tracking-widest font-semibold">
        Personal Portfolio OS
      </div>
    </div>
  );
};

export default LoadingScreen;
