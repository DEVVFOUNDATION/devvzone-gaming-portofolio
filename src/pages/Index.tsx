
import React, { useState, useEffect } from 'react';
import NameModal from '@/components/NameModal';
import GameCard from '@/components/GameCard';
import SocialLinks from '@/components/SocialLinks';

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <NameModal isOpen={showModal} onClose={handleNameSubmit} />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
              DEVVZONE
            </h1>
            {greeting && (
              <p className="text-xl text-cyan-300 animate-fade-in">{greeting}</p>
            )}
          </div>

          {/* Profile Section */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30 shadow-2xl shadow-cyan-400/10 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full p-1">
                  <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-cyan-400">D</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800"></div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-cyan-400 mb-2">Deva / Devv</h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <p>Halo! Aku adalah seseorang yang percaya bahwa setiap skill itu punya nilai, asal dijalankan dengan tekad dan disiplin. Dari layar kecil HP hingga software editing dan logika coding, aku berusaha untuk berkembang di berbagai dunia digital—dari gaming, desain, hingga konten kreatif.</p>
                  
                  <p>Fokus utama saat ini adalah membangun layanan joki terpercaya dan berkualitas lewat devvjoki, tempat di mana kepercayaan dan kepuasan jadi prioritas. Di balik layar, aku juga terbiasa mengelola data, membangun sistem tracking, hingga menyusun strategi konten dan branding.</p>
                  
                  <p>Buatku, jadi hebat bukan tentang jadi yang paling cepat, tapi jadi yang paling konsisten. Aku bukan siapa-siapa—tapi aku tahu aku bisa jadi seseorang, karena aku bergerak setiap hari untuk ke sana.</p>
                  
                  <p className="text-cyan-400 font-semibold">Multiskill. Progress mindset. No excuses. Let's grow.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Games Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              🎮 Mobile Games
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mobileGames.map((game, index) => (
                <GameCard
                  key={index}
                  title={game.title}
                  ign={game.ign}
                  id={game.id}
                  platform="Mobile"
                />
              ))}
            </div>
          </div>

          {/* PC Games Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              💻 PC Games
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pcGames.map((game, index) => (
                <GameCard
                  key={index}
                  title={game.title}
                  ign={game.ign}
                  id={game.id}
                  platform="PC"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-cyan-400/30 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-cyan-400 mb-4">Connect With Me</h4>
            <SocialLinks />
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 DEVVZONE. All rights reserved.</p>
            <p className="text-sm mt-2">Built with passion for gaming and technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
