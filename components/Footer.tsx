import React from 'react';
import { BusinessInfo } from '../types';
import { WhatsappIcon } from './Icons';

interface FooterProps {
  businessInfo: BusinessInfo;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ businessInfo, onOpenLegal }) => {
  const handleDevContact = () => {
    const message = "Olá Fernando. Gostaria de saber mais sobre criação de sites.";
    window.open(`https://wa.me/${businessInfo.devWhatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-red-900 text-yellow-100 py-8 mt-12 rounded-t-[2rem]">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center gap-6">
        
        {/* Legal Links */}
        <div className="flex gap-6">
             <button onClick={() => onOpenLegal('terms')} className="text-sm text-yellow-200 hover:text-white hover:underline transition-colors">Termos de Uso</button>
             <button onClick={() => onOpenLegal('privacy')} className="text-sm text-yellow-200 hover:text-white hover:underline transition-colors">Política de Privacidade</button>
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-70">© {new Date().getFullYear()} {businessInfo.name}. Todos os direitos reservados.</p>
        
        {/* Dev Info */}
        <div className="bg-red-950/30 px-6 py-4 rounded-xl flex flex-col items-center gap-2 border border-red-800/50">
          <span className="text-yellow-400 font-semibold text-sm">Criado por FCL</span>
          <button 
            onClick={handleDevContact}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 px-4 rounded-full transition-all hover:scale-105 shadow-lg"
          >
            <WhatsappIcon className="w-4 h-4" />
            Falar com o Desenvolvedor
          </button>
        </div>

      </div>
    </footer>
  );
};