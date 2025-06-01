
import React, { useState, useEffect } from 'react';
import NameModal from '@/components/NameModal';
import GameCard from '@/components/GameCard';
import ConsoleGameCard from '@/components/ConsoleGameCard';
import SocialLinks from '@/components/SocialLinks';
import RetroEffects from '@/components/RetroEffects';
import GameMascots from '@/components/GameMascots';
import RetroMusic from '@/components/RetroMusic';

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
    { title: 'Roblox', ign: 'DevvGamer', id: '123456789' },
    { title: 'MLBB', ign: 'Devv.Zone', id: '987654321' },
    { title: 'PUBG Mobile', ign: 'DevvPUBG', id: '555666777' },
    { title: 'Delta Force Mobile', ign: 'DevvForce', id: '111222333' },
    { title: 'Chess Online', ign: 'DevvChess', id: '444555666' },
    { title: 'Boom Beach', ign: 'DevvBeach', id: '777888999' },
    { title: 'COC', ign: 'DevvClash', id: '333444555' },
    { title: 'Sky', ign: 'DevvSky', id: '666777888' },
    { title: 'HOK', ign: 'DevvHonor', id: '999000111' },
    { title: 'CODM', ign: 'DevvCOD', id: '222333444' },
  ];

  const pcGames = [
    { title: 'Dying Light', ign: 'DevvSurvivor', id: 'DL_789456' },
    { title: 'Dead Island 2', ign: 'DevvZombie', id: 'DI2_456789' },
    { title: 'Supermarket Simulator', ign: 'DevvManager', id: 'SMS_321654' },
    { title: 'NFS: HEAT', ign: 'DevvRacer', id: 'NFS_987321' },
    { title: 'Point Blank', ign: 'DevvShooter', id: 'PB_654987' },
    { title: 'Garena Delta Force', ign: 'DevvTactical', id: 'GDF_159753' },
    { title: 'PUBG', ign: 'DevvChicken', id: 'PUBG_753159' },
    { title: 'LIMBO', ign: 'DevvShadow', id: 'LIMBO_951357' },
    { title: 'AYODANCE', ign: 'DevvDancer', id: 'AYO_123987' },
    { title: 'LOST SAGA', ign: 'DevvLost', id: 'LS_456123' },
    { title: 'DRAGON NEST', ign: 'DevvDragon', id: 'DN_789654' },
    { title: 'CS: EXTREME', ign: 'DevvCSX', id: 'CSX_321789' },
    { title: 'CSO', ign: 'DevvCounter', id: 'CSO_654321' },
    { title: 'DRAGON CITY', ign: 'DevvCity', id: 'DC_987456' },
    { title: 'NINJA SAGA', ign: 'DevvNinja', id: 'NS_159357' },
    { title: 'CRIMINAL CASE', ign: 'DevvDetective', id: 'CC_753951' },
    { title: 'DEVOUR', ign: 'DevvHunter', id: 'DV_357159' },
    { title: 'PVZ', ign: 'DevvPlants', id: 'PVZ_951753' },
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
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400/30 shadow-2xl shadow-cyan-400/10 mb-16 retro-card relative overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
            <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full p-1 animate-pulse">
                  <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center relative overflow-hidden">
                    <span className="text-4xl font-bold text-cyan-400 retro-text">D</span>
                    {/* Pixel effect overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.1)_25%,rgba(0,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(0,255,255,0.1)_75%)] bg-[size:4px_4px] animate-float"></div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800 animate-pulse"></div>
                {/* Lightning effects around avatar */}
                <div className="absolute -top-2 -left-2 text-yellow-400 animate-ping">⚡</div>
                <div className="absolute -bottom-2 -left-2 text-purple-400 animate-ping" style={{ animationDelay: '1s' }}>✨</div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-cyan-400 mb-2 retro-glow">Deva / Devv</h2>
                <div className="text-gray-300 leading-relaxed space-y-3 retro-text">
                  <p>Halo! Aku adalah seseorang yang percaya bahwa setiap skill itu punya nilai, asal dijalankan dengan tekad dan disiplin. Berawal dari keterbatasan hingga bisa menggunakan software editing dan logika coding, aku berusaha untuk berkembang di berbagai dunia digital—dari gaming, desain, hingga konten kreatif.</p>
                  
                  <p>Fokus utama saat ini adalah membangun layanan joki terpercaya dan berkualitas lewat devvjoki, tempat dimana kepercayaan dan kepuasan jadi prioritas. Di balik layar, aku juga terbiasa mengelola data, membangun sistem tracking, hingga menyusun strategi konten dan branding.</p>
                  
                  <p>Buatku, jadi hebat bukan tentang jadi yang paling cepat, tapi jadi yang paling konsisten. Aku bukan siapa-siapa—tapi aku tahu aku bisa jadi seseorang, karena aku bergerak setiap hari untuk ke sana.</p>
                  
                  <p className="text-cyan-400 font-semibold">Multiskill. Progress mindset. No excuses. Let's grow.</p>
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
