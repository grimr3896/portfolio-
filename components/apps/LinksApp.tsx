
import React from 'react';

const LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: 'fa-github', color: 'bg-gray-800' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'fa-linkedin', color: 'bg-blue-700' },
  { name: 'X / Twitter', url: 'https://twitter.com', icon: 'fa-x-twitter', color: 'bg-black' },
  { name: 'Portfolio Blog', url: '#', icon: 'fa-globe', color: 'bg-green-600' },
];

const LinksApp: React.FC = () => {
  return (
    <div className="p-8 grid grid-cols-2 gap-6">
      {LINKS.map((link, i) => (
        <a 
          key={i} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${link.color} p-6 flex flex-col items-center justify-center gap-3 text-white rounded hover:opacity-90 transition-opacity`}
        >
          <i className={`fa-brands ${link.icon} text-3xl`}></i>
          <span className="font-bold text-sm tracking-widest uppercase">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default LinksApp;
