
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

  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 retro-card h-40">
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
          <CardTitle className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 retro-text line-clamp-1">
            {title}
          </CardTitle>
          <span className={`px-2 py-1 text-xs font-bold rounded-full border-2 transition-all duration-300 shrink-0 ${
            platform === 'Mobile' 
              ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-400/50 shadow-lg shadow-green-400/20' 
              : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-400/50 shadow-lg shadow-blue-400/20'
          }`}>
            {platform}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-0">
        <div className="space-y-2">
          <div className="flex items-center justify-between group/item">
            <span className="text-gray-400 text-xs font-medium">IGN:</span>
            <div className="flex items-center gap-1">
              <span className="text-cyan-400 font-bold text-sm truncate max-w-20">{ign}</span>
              <button
                onClick={() => copyToClipboard(ign, 'IGN')}
                className="opacity-0 group-hover/item:opacity-100 text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110 shrink-0"
              >
                <Copy size={12} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between group/item">
            <span className="text-gray-400 text-xs font-medium">ID:</span>
            <div className="flex items-center gap-1">
              <span className="text-purple-400 font-bold font-mono text-sm truncate max-w-20">{id}</span>
              <button
                onClick={() => copyToClipboard(id, 'ID')}
                className="opacity-0 group-hover/item:opacity-100 text-gray-400 hover:text-purple-400 transition-all duration-200 hover:scale-110 shrink-0"
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
