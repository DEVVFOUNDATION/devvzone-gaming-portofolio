
import React from 'react';

const GameMascots: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Killua-inspired Lightning Character */}
      <div className="absolute top-20 right-10 animate-bounce-slow">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse">
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full">
              <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black rounded-full"></div>
            </div>
          </div>
          {/* Lightning bolts */}
          <div className="absolute -top-2 -right-2 text-yellow-400 animate-ping">⚡</div>
          <div className="absolute -bottom-2 -left-2 text-yellow-400 animate-ping" style={{ animationDelay: '0.5s' }}>⚡</div>
        </div>
      </div>

      {/* FPS Character */}
      <div className="absolute bottom-20 left-10 animate-pulse">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-lg shadow-red-600/50">
            <div className="absolute inset-1 bg-gradient-to-br from-red-400 to-red-600 rounded">
              <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-white"></div>
            </div>
          </div>
          <div className="absolute -top-1 -right-1 text-orange-400 text-xs">🔫</div>
        </div>
      </div>

      {/* MOBA Character */}
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 animate-bounce">
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full shadow-lg shadow-purple-600/50">
            <div className="absolute inset-1 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full">
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-purple-400 text-xs">✨</div>
        </div>
      </div>

      {/* Retro Game Icons */}
      <div className="absolute top-1/3 right-20 animate-float">
        <div className="text-2xl animate-spin-slow">🎮</div>
      </div>
      
      <div className="absolute bottom-1/3 right-5 animate-float" style={{ animationDelay: '2s' }}>
        <div className="text-xl animate-bounce">👾</div>
      </div>

      <div className="absolute top-2/3 left-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="text-lg animate-pulse">🕹️</div>
      </div>
    </div>
  );
};

export default GameMascots;
