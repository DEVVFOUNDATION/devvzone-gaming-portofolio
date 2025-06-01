
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const RetroMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create audio element for retro game music
    const audio = new Audio();
    // Using a placeholder URL - in real app, you'd use actual retro game music
    audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+D2u2czBTOFzvCqfS8HH2zE7+OWSBICYZHa9sdyJgUuhM/t2YE0Bx1lrejmr10NClKl5O6xYyAFMIra8a5bFwpGm9z9ul04BTOFzuo=';
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
