
import React, { useState } from 'react';

const FunApp: React.FC = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-6 bg-pink-50">
      <div className="text-5xl animate-bounce">
        {clicks > 10 ? '🦄' : '🌟'}
      </div>
      <h2 className="text-2xl font-black text-pink-600 uppercase">Easter Egg Found!</h2>
      <p className="text-gray-600 max-w-sm">
        You've discovered the hidden zone. Here's a useless button that increments a counter.
      </p>
      
      <button 
        onClick={() => setClicks(prev => prev + 1)}
        className="bg-pink-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-pink-600 active:scale-95 transition-all"
      >
        CLICKED {clicks} TIMES
      </button>

      {clicks > 20 && (
        <div className="mt-4 p-4 bg-white rounded border border-pink-200 text-pink-600 animate-pulse font-bold">
          CONGRATULATIONS! YOU HAVE TOO MUCH FREE TIME!
        </div>
      )}
    </div>
  );
};

export default FunApp;
