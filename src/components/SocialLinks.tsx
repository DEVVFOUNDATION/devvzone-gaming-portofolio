
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-red-400' },
    { name: 'TikTok', icon: '🎵', url: '#', color: 'hover:text-white' },
    { name: 'Steam', icon: '🎮', url: '#', color: 'hover:text-blue-400' },
    { name: 'Epic Games', icon: '🎯', url: '#', color: 'hover:text-purple-400' },
  ];

  return (
    <div className="flex justify-center space-x-8">
      {socialLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 retro-button p-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/30 hover:border-cyan-400 animate-pulse`}
          style={{ animationDelay: `${index * 0.2}s` }}
          aria-label={social.name}
        >
          {typeof social.icon === 'string' ? (
            <span className="text-2xl">{social.icon}</span>
          ) : (
            <social.icon size={24} />
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
