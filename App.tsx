
import React, { useState, useEffect, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Taskbar from './components/Taskbar';
import Desktop from './components/Desktop';
import WindowManager from './components/WindowManager';
import StartMenu from './components/StartMenu';
import { AppID, WindowState } from './types';
import { DESKTOP_ICONS } from './constants';

const App: React.FC = () => {
  const [booting, setBooting] = useState(true);
  const [windows, setWindows] = useState<Record<AppID, WindowState>>(() => {
    const initial: any = {};
    DESKTOP_ICONS.forEach(icon => {
      initial[icon.id] = {
        id: icon.id,
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
        zIndex: 10
      };
    });
    return initial;
  });
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [topZ, setTopZ] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openApp = useCallback((id: AppID) => {
    setTopZ(prev => prev + 1);
    setWindows(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
        zIndex: topZ + 1
      }
    }));
    setIsStartMenuOpen(false);
  }, [topZ]);

  const closeApp = useCallback((id: AppID) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false }
    }));
  }, []);

  const toggleMinimize = useCallback((id: AppID) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: !prev[id].isMinimized }
    }));
  }, []);

  const toggleMaximize = useCallback((id: AppID) => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], isMaximized: !prev[id].isMaximized }
    }));
  }, []);

  const focusApp = useCallback((id: AppID) => {
    setTopZ(prev => prev + 1);
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], zIndex: topZ + 1, isMinimized: false }
    }));
  }, [topZ]);

  if (booting) return <LoadingScreen />;

  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans">
      <Desktop onIconClick={openApp} />
      
      <WindowManager 
        windows={windows} 
        onClose={closeApp} 
        onMinimize={toggleMinimize} 
        onMaximize={toggleMaximize} 
        onFocus={focusApp}
      />

      {isStartMenuOpen && (
        <StartMenu 
          onAppClick={openApp} 
          onClose={() => setIsStartMenuOpen(false)} 
        />
      )}

      <Taskbar 
        windows={windows} 
        onStartClick={() => setIsStartMenuOpen(!isStartMenuOpen)} 
        onAppClick={(id) => {
          if (windows[id].isMinimized || windows[id].zIndex < topZ) {
            focusApp(id);
          } else {
            toggleMinimize(id);
          }
        }}
      />
    </div>
  );
};

export default App;
