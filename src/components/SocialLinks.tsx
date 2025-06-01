
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import { AiFillTikTok } from "react-icons/ai";
import { FaSteam, FaDiscord } from "react-icons/fa";


const SocialLinks: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/mdeva_a/', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/channel/UCkkvm7AvZ_GyyjzPENXFjkw', color: 'hover:text-red-400' },
    { name: 'TikTok', icon: AiFillTikTok, url: 'https://www.tiktok.com/@devvjoki', color: 'hover:text-white' },
    { name: 'Steam', icon: FaSteam, url: 'https://steamcommunity.com/profiles/76561199684180481/', color: 'hover:text-blue-400' },
    { name: 'Discord', icon: FaDiscord, url: 'https://discord.gg/HaW26SZA2R', color: 'hover:text-purple-400' },
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
