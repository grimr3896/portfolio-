
import React from 'react';

const PhotosApp: React.FC = () => {
  const photos = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/${i + 10}/500/500`);

  return (
    <div className="p-2 grid grid-cols-3 gap-2 h-fit">
      {photos.map((src, i) => (
        <div key={i} className="aspect-square bg-gray-200 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
          <img 
            src={src} 
            alt={`Gallery ${i}`} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotosApp;
