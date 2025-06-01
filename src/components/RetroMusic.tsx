
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const RetroMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create audio element for retro game music
    const audio = new Audio();
    // Using a placeholder URL - in real app, you'd use actual retro game music
    audio.src = 'https://ia800200.us.archive.org/21/items/vionita-dia-masa-lalumu-aku-masa-depanmu-official-music-video/VIONITA%20-%20DIA%20MASA%20LALUMU%2C%20AKU%20MASA%20DEPANMU%20%28OFFICIAL%20MUSIC%20VIDEO%29.mp3';
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

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

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={toggleMusic}
        className={`retro-button ${isPlaying ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'} transition-all duration-300`}
        size="sm"
      >
        {isPlaying ? '🔊' : '🔇'} {isPlaying ? 'ON' : 'OFF'}
      </Button>
    </div>
  );
};

export default RetroMusic;
