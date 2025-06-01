
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
    <div className="flex justify-center space-x-6">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
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
