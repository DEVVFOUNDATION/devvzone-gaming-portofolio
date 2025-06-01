
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface NameModalProps {
  isOpen: boolean;
  onClose: (name: string) => void;
}

const NameModal: React.FC<NameModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem('userName', name);
      onClose(name);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-2 border-cyan-400 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Halo! Nama Kamu Siapa?
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Masukkan nama kamu..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-800/50 border-cyan-400/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
              required
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 transition-all duration-300 transform hover:scale-105"
          >
            Masuk ke DEVVZONE
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NameModal;
