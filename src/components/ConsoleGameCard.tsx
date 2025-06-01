
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ConsoleGameCardProps {
  title: string;
  platform: string;
}

const ConsoleGameCard: React.FC<ConsoleGameCardProps> = ({ title, platform }) => {
  // Background images for console games
  const getBackgroundImage = (gameTitle: string) => {
    const gameBackgrounds: Record<string, string> = {
      'Mortal Kombat': '/MK.jpg',
      'Black Hawk Down': '/BHD.jpg',
      'Resident Evil': '/RE7.avif',
      'God Of War': '/GOW.jpeg',
      'PES': '/PES.webp',
      'Naruto': '/NARUTO.jpg',
      'Basara': '/BASARA.jpg',
      'GTA SA': '/GTASA.jpg',
      'GTA V': '/GTAV.jpg',
      'Wukong': '/WUKONG.jpg',
    };
    
    return gameBackgrounds[gameTitle] || '/MK.jpg';
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/70 to-slate-900/70 border-2 border-orange-400/30 hover:border-orange-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/30 retro-card h-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${getBackgroundImage(title)})`,
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-slate-900/60" />
      
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      {/* Lightning Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"></div>
      </div>

      <CardHeader className="pb-2 relative z-10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-bold text-white group-hover:text-orange-400 transition-colors duration-300 retro-text line-clamp-2 drop-shadow-lg">
            {title}
          </CardTitle>
          <span className="px-2 py-1 text-xs font-bold rounded-full border-2 bg-gradient-to-r from-orange-500/80 to-red-500/80 text-orange-200 border-orange-400/70 shadow-lg shadow-orange-400/30 shrink-0 drop-shadow-lg">
            {platform}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-0" />
    </Card>
  );
};

export default ConsoleGameCard;
