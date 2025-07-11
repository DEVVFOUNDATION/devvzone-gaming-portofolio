
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const RetroMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([30]);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasShownAlert, setHasShownAlert] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create audio element for retro game music
    const audio = new Audio();
    audio.src = '/RetroGaming.mp3';
    audio.loop = true;
    audio.autoplay = false; // Disable autoplay
    audio.volume = volume[0] / 100;
    audioRef.current = audio;

    // Show alert when component mounts
    if (!hasShownAlert) {
      alert("Jangan lupa nyalakan sound agar bisa memberikan pengalaman terbaik.");
      setHasShownAlert(true);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [hasShownAlert]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume[0] / 100;
    }
  }, [volume, isMuted]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (newVolume[0] > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-400/30 transition-all duration-300 ${
        isExpanded ? 'p-4 w-64' : 'p-2'
      }`}>
        <div className="flex items-center gap-2">
          <Button
            onClick={toggleMusic}
            className={`retro-button ${
              isPlaying ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
            } transition-all duration-300`}
            size="sm"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-purple-600 hover:bg-purple-700 transition-all duration-300"
            size="sm"
          >
            🎵
          </Button>
        </div>

        {isExpanded && (
          <div className="mt-3 space-y-3 animate-fade-in">
            <div className="flex items-center gap-2">
              <Button
                onClick={toggleMute}
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                size="sm"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
              
              <div className="flex-1">
                <Slider
                  value={volume}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              
              <span className="text-xs text-cyan-400 w-8 text-right">
                {isMuted ? '0' : volume[0]}%
              </span>
            </div>
            
            <div className="text-xs text-center text-gray-400">
              {isPlaying ? '♪ Playing...' : '⏸ Paused'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetroMusic;
