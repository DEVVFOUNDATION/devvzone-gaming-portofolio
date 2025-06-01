
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface GameCardProps {
  title: string;
  ign: string;
  id: string;
  platform: 'Mobile' | 'PC';
}

const GameCard: React.FC<GameCardProps> = ({ title, ign, id, platform }) => {
  return (
    <Card className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </CardTitle>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            platform === 'Mobile' 
              ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
              : 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
          }`}>
            {platform}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">IGN/Nickname:</span>
            <span className="text-cyan-400 font-medium">{ign}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">ID:</span>
            <span className="text-purple-400 font-medium">{id}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
