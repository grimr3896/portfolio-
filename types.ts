
export type AppID = 
  | 'about' 
  | 'projects' 
  | 'resume' 
  | 'contact' 
  | 'ai' 
  | 'stats' 
  | 'photos' 
  | 'blog' 
  | 'achievements' 
  | 'links' 
  | 'trash' 
  | 'fun';

export interface WindowState {
  id: AppID;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

export interface DesktopIconConfig {
  id: AppID;
  label: string;
  icon: string;
  color: string;
  bgClass: string;
  size?: 'small' | 'medium' | 'wide';
  tileImg?: string;
}
