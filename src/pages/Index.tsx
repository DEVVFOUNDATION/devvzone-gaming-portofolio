
import React, { useState, useEffect } from 'react';
import NameModal from '@/components/NameModal';
import GameCard from '@/components/GameCard';
import ConsoleGameCard from '@/components/ConsoleGameCard';
import SocialLinks from '@/components/SocialLinks';
import RetroEffects from '@/components/RetroEffects';
import GameMascots from '@/components/GameMascots';
import RetroMusic from '@/components/RetroMusic';
import { Gamepad2, Code2, Zap, Target, Brain, Users } from 'lucide-react';

const Index = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setUserName(savedName);
      setGreeting(`Halo ${savedName} Selamat Datang Di DEVVZONE.`);
    } else {
      setShowModal(true);
    }
  }, []);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setGreeting(`Halo ${name} Selamat Datang Di DEVVZONE.`);
    setShowModal(false);
  };

  const mobileGames = [
    { title: 'Roblox', ign: 'HorrorRobloxAddict', id: '@hororrobloxaddict' },
    { title: 'MLBB', ign: 'H 41 DEV', id: '19874143' },
    { title: 'PUBG Mobile', ign: 'V O C H E', id: '5499497305' },
    { title: 'Delta Force Mobile', ign: 'EVOSxH41DEVV', id: '185880086058671819947' },
    { title: 'Chess Online', ign: 'MindBlowond', id: '-' },
    { title: 'Boom Beach', ign: 'KZR-DEVA', id: '-' },
    { title: 'COC', ign: 'H 41 DEVV', id: '#GRGQJVL8Q' },
    { title: 'Sky', ign: 'H 41 DEVV', id: '-' },
    { title: 'HOK', ign: 'H 41 DEVV', id: '-' },
    { title: 'CODM', ign: 'H 41 DEVV', id: '-' },
  ];

  const pcGames = [
    { title: 'Dying Light', ign: 'H 41 DEVV', id: '-' },
    { title: 'Dead Island 2', ign: 'H 41 DEVV', id: '-' },
    { title: 'Supermarket Simulator', ign: 'H 41 DEVV', id: '-' },
    { title: 'NFS: HEAT', ign: 'H 41 DEVV', id: '-' },
    { title: 'Point Blank', ign: 'H 41 DEVV', id: '-' },
    { title: 'Garena Delta Force', ign: 'EVOSxH41DEVV', id: '185880086058671819947  ' },
    { title: 'PUBG', ign: 'H 41 DEVV', id: '-' },
    { title: 'LIMBO', ign: 'H 41 DEVV', id: '-' },
    { title: 'AYODANCE', ign: 'FALLINTOYOU', id: '-' },
    { title: 'LOST SAGA', ign: 'ILSIDEVVCMBK', id: '-' },
    { title: 'DRAGON NEST', ign: 'DEVVRPG', id: '-' },
    { title: 'CS: EXTREME', ign: 'DEVVFPS', id: '-' },
    { title: 'CSO', ign: 'DEVVFPS', id: '-' },
    { title: 'DRAGON CITY', ign: 'KANDANG NAGA', id: '-' },
    { title: 'NINJA SAGA', ign: 'KONOHA', id: '-' },
    { title: 'CRIMINAL CASE', ign: 'MIKIR DIKIT', id: '-' },
    { title: 'DEVOUR', ign: 'H 41 DEVV', id: '-' },
    { title: 'PVZ', ign: 'H 41 DEVV', id: '-' },
  ];

  const consoleGames = [
    { title: 'Mortal Kombat', platform: 'PS/Xbox' },
    { title: 'Black Hawk Down', platform: 'PS/Xbox' },
    { title: 'Resident Evil', platform: 'PS/Xbox' },
    { title: 'God Of War', platform: 'PS/Xbox' },
    { title: 'PES', platform: 'PS/Xbox' },
    { title: 'Naruto', platform: 'PS/Xbox' },
    { title: 'Basara', platform: 'PS/Xbox' },
    { title: 'GTA SA', platform: 'PS/Xbox' },
    { title: 'GTA V', platform: 'PS/Xbox' },
    { title: 'Wukong', platform: 'PS/Xbox' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <NameModal isOpen={showModal} onClose={handleNameSubmit} />
      <RetroEffects />
      <GameMascots />
      <RetroMusic />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in retro-glow relative">
              DEVVZONE
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl animate-pulse"></div>
            </h1>
            {greeting && (
              <p className="text-xl text-cyan-300 animate-fade-in retro-text">{greeting}</p>
            )}
            <div className="mt-4 flex justify-center space-x-4">
              <span className="pixel-border px-3 py-1 text-sm bg-gradient-to-r from-green-400/20 to-cyan-400/20 text-green-400 border-2 border-green-400/50 animate-pulse">
                ONLINE
              </span>
              <span className="pixel-border px-3 py-1 text-sm bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-400 border-2 border-yellow-400/50 animate-bounce">
                GAMING
              </span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400/30 shadow-2xl shadow-cyan-400/10 mb-16 retro-card relative overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
            <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90"></div>
            
            <div className="flex flex-col lg:flex-row gap-8 relative z-10">
              {/* Left side - Avatar and Skills */}
              <div className="flex flex-col items-center space-y-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full p-1 animate-pulse">
                    <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                      <img src="Devvprofil.jpg" alt="Devv Profil" className="w-full h-full object-cover rounded-full"/>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800 animate-pulse"></div>
                </div>
                
                {/* Name */}
                <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Deva / Devv
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-md">
                  <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl p-5 text-center border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer">
                    <div className="relative mb-3">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 rounded-xl flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-cyan-600/30 transition-all duration-300">
                        <Gamepad2 size={24} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-cyan-400/5 rounded-xl blur-sm group-hover:bg-cyan-400/10 transition-all duration-300"></div>
                    </div>
                    <div className="text-sm text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">Gaming</div>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl p-5 text-center border border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 cursor-pointer">
                    <div className="relative mb-3">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:from-purple-400/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <Code2 size={24} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-purple-400/5 rounded-xl blur-sm group-hover:bg-purple-400/10 transition-all duration-300"></div>
                    </div>
                    <div className="text-sm text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">Development</div>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl p-5 text-center border border-green-400/20 hover:border-green-400/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20 cursor-pointer">
                    <div className="relative mb-3">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl flex items-center justify-center group-hover:from-green-400/30 group-hover:to-green-600/30 transition-all duration-300">
                        <Zap size={24} className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-green-400/5 rounded-xl blur-sm group-hover:bg-green-400/10 transition-all duration-300"></div>
                    </div>
                    <div className="text-sm text-white font-semibold group-hover:text-green-400 transition-colors duration-300">Quick Execution</div>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl p-5 text-center border border-pink-400/20 hover:border-pink-400/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/20 cursor-pointer">
                    <div className="relative mb-3">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-pink-400/20 to-pink-600/20 rounded-xl flex items-center justify-center group-hover:from-pink-400/30 group-hover:to-pink-600/30 transition-all duration-300">
                        <Target size={24} className="text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-pink-400/5 rounded-xl blur-sm group-hover:bg-pink-400/10 transition-all duration-300"></div>
                    </div>
                    <div className="text-sm text-white font-semibold group-hover:text-pink-400 transition-colors duration-300">Precision</div>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl p-5 text-center border border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 cursor-pointer">
                    <div className="relative mb-3">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center group-hover:from-yellow-400/30 group-hover:to-yellow-600/30 transition-all duration-300">
                        <Brain size={24} className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-yellow-400/5 rounded-xl blur-sm group-hover:bg-yellow-400/10 transition-all duration-300"></div>
                    </div>
                    <div className="text-sm text-white font-semibold group-hover:text-yellow-400 transition-colors duration-300">Problem Solving</div>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg rounded-2xl p-5 text-center border border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20 cursor-pointer">
                    <div className="relative mb-3">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all duration-300">
                        <Users size={24} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-blue-400/5 rounded-xl blur-sm group-hover:bg-blue-400/10 transition-all duration-300"></div>
                    </div>
                    <div className="text-sm text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">Client Focus</div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Description */}
              <div className="flex-1 text-left">
                <div className="text-gray-300 leading-relaxed space-y-4 retro-text">
                  <p>
                    <span className="text-cyan-400 font-semibold">Halo!</span> Aku adalah seseorang yang percaya bahwa setiap skill itu punya nilai, 
                    asal dijalankan dengan tekad dan disiplin. Berawal dari keterbatasan hingga 
                    bisa menggunakan software editing dan logika coding, aku berusaha untuk 
                    berkembang di berbagai dunia digital dari <span className="text-cyan-400">gaming</span>, <span className="text-purple-400">desain</span>, hingga <span className="text-green-400">konten kreatif</span>.
                  </p>
                  
                  <p>
                    Fokus utamaku saat ini adalah membangun layanan joki terpercaya dan 
                    berkualitas lewat <span className="text-cyan-400 font-semibold">devvjoki</span>, tempat di mana <span className="text-green-400">kepercayaan</span> dan <span className="text-pink-400">kepuasan</span> jadi 
                    prioritas. Di balik layar, aku juga terbiasa mengelola data, membangun sistem 
                    tracking pesanan, hingga menyusun strategi konten dan branding yang kuat.
                  </p>
                  
                  <p>
                    Aku bukan hanya sekedar gamer atau editor, tapi juga seseorang yang suka 
                    memecahkan masalah dan belajar cepat di berbagai bidang digital. Aku 
                    terbiasa menggunakan banyak tools, menyesuaikan workflow, dan berpikir 
                    sistematis.
                  </p>
                  
                  {/* Quote Box */}
                  <div className="bg-slate-800/50 border-l-4 border-cyan-400 p-4 rounded-lg mt-6">
                    <p className="text-cyan-400 font-semibold italic">
                      Buatku, "jadi hebat bukan tentang jadi yang paling cepat, tapi jadi 
                      yang paling konsisten."
                    </p>
                    <p className="text-gray-400 mt-2 text-sm">
                      Aku bukan siapa-siapa, tapi aku tahu aku bisa jadi seseorang — karena 
                      aku bergerak setiap hari untuk ke sana.
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">Multiskill</span>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Progress Mindset</span>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">No Excuses</span>
                    <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">Let's Grow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Games Section */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent retro-glow relative">
              🎮 Mobile Games
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-xl animate-pulse"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {mobileGames.map((game, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <GameCard
                    title={game.title}
                    ign={game.ign}
                    id={game.id}
                    platform="Mobile"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* PC Games Section */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent retro-glow relative">
              💻 PC Games
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl animate-pulse"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {pcGames.map((game, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <GameCard
                    title={game.title}
                    ign={game.ign}
                    id={game.id}
                    platform="PC"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Console Games Section */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent retro-glow relative">
              🎯 Console Games
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/10 to-red-400/10 blur-xl animate-pulse"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {consoleGames.map((game, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ConsoleGameCard
                    title={game.title}
                    platform={game.platform}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-cyan-400/30 py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-cyan-400 mb-4 retro-glow">Connect With Me</h4>
            <SocialLinks />
          </div>
          <div className="text-center text-gray-400 retro-text">
            <p>&copy; 2025 DEVVZONE. All rights reserved.</p>
            <p className="text-sm mt-2">Built with passion for gaming and technology</p>
            <div className="flex justify-center space-x-4 mt-2 text-xs">
              <span className="pixel-border px-2 py-1 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/30">
                H
              </span>
              <span className="pixel-border px-2 py-1 bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/30">
                41
              </span>
              <span className="pixel-border px-2 py-1 bg-gradient-to-r from-green-400/10 to-cyan-400/10 border border-green-400/30">
                DEVV
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
