
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
      'Mortal Kombat': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      'Black Hawk Down': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      'Resident Evil': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      'God Of War': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      'PES': 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
      'Naruto': 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      'Basara': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      'GTA SA': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      'GTA V': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      'Wukong': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
    };
    
    return gameBackgrounds[gameTitle] || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop';
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-orange-400/30 hover:border-orange-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/30 retro-card h-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${getBackgroundImage(title)})`,
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/90" />
      
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
      
      <CardContent className="relative z-10 pt-0">
        <div className="text-center">
          <span className="text-gray-300 text-sm italic drop-shadow-lg">Console Gaming</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConsoleGameCard;
