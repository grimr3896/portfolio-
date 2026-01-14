
import React from 'react';
import { AppID, WindowState } from '../types';
import WindowFrame from './WindowFrame';
import AboutApp from './apps/AboutApp';
import ProjectsApp from './apps/ProjectsApp';
import ResumeApp from './apps/ResumeApp';
import ContactApp from './apps/ContactApp';
import AIApp from './apps/AIApp';
import StatsApp from './apps/StatsApp';
import PhotosApp from './apps/PhotosApp';
import BlogApp from './apps/BlogApp';
import AchievementsApp from './apps/AchievementsApp';
import LinksApp from './apps/LinksApp';
import RecycleBinApp from './apps/RecycleBinApp';
import FunApp from './apps/FunApp';

interface WindowManagerProps {
  windows: Record<AppID, WindowState>;
  onClose: (id: AppID) => void;
  onMinimize: (id: AppID) => void;
  onMaximize: (id: AppID) => void;
  onFocus: (id: AppID) => void;
}

const WindowManager: React.FC<WindowManagerProps> = ({ 
  windows, 
  onClose, 
  onMinimize, 
  onMaximize, 
  onFocus 
}) => {
  const renderApp = (id: AppID) => {
    switch (id) {
      case 'about': return <AboutApp />;
      case 'projects': return <ProjectsApp />;
      case 'resume': return <ResumeApp />;
      case 'contact': return <ContactApp />;
      case 'ai': return <AIApp />;
      case 'stats': return <StatsApp />;
      case 'photos': return <PhotosApp />;
      case 'blog': return <BlogApp />;
      case 'achievements': return <AchievementsApp />;
      case 'links': return <LinksApp />;
      case 'trash': return <RecycleBinApp />;
      case 'fun': return <FunApp />;
      default: return null;
    }
  };

  return (
    <>
      {Object.values(windows).map((win: WindowState) => (
        <WindowFrame
          key={win.id}
          winState={win}
          onClose={() => onClose(win.id)}
          onMinimize={() => onMinimize(win.id)}
          onMaximize={() => onMaximize(win.id)}
          onFocus={() => onFocus(win.id)}
        >
          {renderApp(win.id)}
        </WindowFrame>
      ))}
    </>
  );
};

export default WindowManager;
