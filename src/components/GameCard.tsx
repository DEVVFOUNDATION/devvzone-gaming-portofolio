
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface GameCardProps {
  title: string;
  ign: string;
  id: string;
  platform: 'Mobile' | 'PC';
}

const GameCard: React.FC<GameCardProps> = ({ title, ign, id, platform }) => {
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `${type} berhasil disalin ke clipboard`,
      });
    });
  };

  // Background images for different games
  const getBackgroundImage = (gameTitle: string) => {
    const gameBackgrounds: Record<string, string> = {
      // Mobile Games
      'Roblox': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      'MLBB': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      'PUBG Mobile': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      'Delta Force Mobile': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      'Chess Online': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      'Boom Beach': 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
      'COC': 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      'Sky': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      'HOK': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      'CODM': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      
      // PC Games
      'Dying Light': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      'Dead Island 2': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      'Supermarket Simulator': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      'NFS: HEAT': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      'Point Blank': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      'Garena Delta Force': 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
      'PUBG': 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      'LIMBO': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      'AYODANCE': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      'LOST SAGA': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      'DRAGON NEST': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      'CS: EXTREME': 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
      'CSO': 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      'DRAGON CITY': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      'NINJA SAGA': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      'CRIMINAL CASE': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      'DEVOUR': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      'PVZ': 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
    };
    
    return gameBackgrounds[gameTitle] || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop';
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 retro-card h-40">
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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      {/* Lightning Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
      </div>

      <CardHeader className="pb-2 relative z-10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 retro-text line-clamp-1 drop-shadow-lg">
            {title}
          </CardTitle>
          <span className={`px-2 py-1 text-xs font-bold rounded-full border-2 transition-all duration-300 shrink-0 drop-shadow-lg ${
            platform === 'Mobile' 
              ? 'bg-gradient-to-r from-green-500/80 to-emerald-500/80 text-green-200 border-green-400/70 shadow-lg shadow-green-400/30' 
              : 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-blue-200 border-blue-400/70 shadow-lg shadow-blue-400/30'
          }`}>
            {platform}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-0">
        <div className="space-y-2">
          <div className="flex items-center justify-between group/item">
            <span className="text-gray-300 text-xs font-medium drop-shadow-lg">IGN:</span>
            <div className="flex items-center gap-1">
              <span className="text-cyan-300 font-bold text-sm truncate max-w-20 drop-shadow-lg">{ign}</span>
              <button
                onClick={() => copyToClipboard(ign, 'IGN')}
                className="opacity-0 group-hover/item:opacity-100 text-gray-300 hover:text-cyan-300 transition-all duration-200 hover:scale-110 shrink-0 drop-shadow-lg"
              >
                <Copy size={12} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between group/item">
            <span className="text-gray-300 text-xs font-medium drop-shadow-lg">ID:</span>
            <div className="flex items-center gap-1">
              <span className="text-purple-300 font-bold font-mono text-sm truncate max-w-20 drop-shadow-lg">{id}</span>
              <button
                onClick={() => copyToClipboard(id, 'ID')}
                className="opacity-0 group-hover/item:opacity-100 text-gray-300 hover:text-purple-300 transition-all duration-200 hover:scale-110 shrink-0 drop-shadow-lg"
              >
                <Copy size={12} />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
