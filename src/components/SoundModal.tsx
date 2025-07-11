import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Volume2, Headphones, Gamepad2 } from 'lucide-react';

interface SoundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SoundModal: React.FC<SoundModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-gradient-to-br from-slate-900/95 to-purple-900/95 backdrop-blur-lg border-2 border-cyan-400/50 rounded-3xl p-0 overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.05)_25%,rgba(0,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(0,255,255,0.05)_75%)] bg-[size:20px_20px] animate-float"></div>
        
        <div className="relative z-10 p-8 text-center">
          {/* Gaming Icons Header */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="relative">
              <Gamepad2 size={32} className="text-cyan-400 animate-bounce" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <div className="text-4xl animate-pulse">🎮</div>
            <div className="relative">
              <Headphones size={32} className="text-purple-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent retro-glow">
              🚀 LEVEL UP YOUR EXPERIENCE! 🚀
            </h2>
            
            <div className="text-gray-300 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <span className="text-xl">🎵</span>
                <span>Jangan lupa nyalakan sound agar bisa</span>
              </p>
              <p className="text-cyan-400 font-semibold">
                memberikan pengalaman terbaik! ✨
              </p>
            </div>

            {/* Tech-style Info Box */}
            <div className="bg-slate-800/50 border border-cyan-400/30 rounded-2xl p-4 mt-4">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
                <Volume2 size={16} className="text-green-400" />
                <span>Audio Enhancement Mode</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={onClose}
              className="w-full mt-6 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-2xl border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-lg">🎯</span>
                LET'S GAME!
                <span className="text-lg">⚡</span>
              </span>
            </Button>

            {/* Gaming Stats Style Footer */}
            <div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Audio Ready
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                System Online
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Experience++
              </span>
            </div>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-2 left-2 text-cyan-400/30 text-xs">▲</div>
        <div className="absolute top-2 right-2 text-purple-400/30 text-xs">▲</div>
        <div className="absolute bottom-2 left-2 text-pink-400/30 text-xs">▼</div>
        <div className="absolute bottom-2 right-2 text-green-400/30 text-xs">▼</div>
      </DialogContent>
    </Dialog>
  );
};

export default SoundModal;