import React from 'react';
import { PhoneIcon, WhatsappIcon, MapPinIcon } from './Icons';
import { BusinessInfo } from '../types';

interface HeroProps {
  info: BusinessInfo;
}

export const Hero: React.FC<HeroProps> = ({ info }) => {
  return (
    <div className="bg-[#FACC15] pb-8 pt-8 px-4 border-b-4 border-red-600">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-[#DC2626] mb-1 uppercase tracking-tight leading-none">
          {info.name}<span className="text-2xl align-top">®</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-[#B91C1C] text-xl font-bold mb-6">Desde 1982</p>
        
        {/* Phone Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 w-full justify-center max-w-lg">
          <a 
            href={`tel:${info.phone.replace(/\D/g, '')}`}
            className="flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-yellow-300 font-bold py-2 px-6 rounded-lg shadow-sm transition-transform active:scale-95"
          >
            <PhoneIcon className="w-5 h-5" />
            {info.phone}
          </a>
          {info.secondaryPhone && (
             <a 
             href={`tel:${info.secondaryPhone.replace(/\D/g, '')}`}
             className="flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-yellow-300 font-bold py-2 px-6 rounded-lg shadow-sm transition-transform active:scale-95"
           >
             <PhoneIcon className="w-5 h-5" />
             {info.secondaryPhone}
           </a>
          )}
        </div>

        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/${info.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md bg-[#4ADE80] hover:bg-[#22c55e] text-white font-bold text-lg py-3 px-8 rounded-lg shadow-md mb-6 flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <WhatsappIcon className="w-6 h-6" />
          Pedir pelo WhatsApp
        </a>

        {/* Address */}
        <div className="flex items-center gap-2 text-[#B91C1C] font-bold mb-2 text-center">
          <MapPinIcon className="w-5 h-5 flex-shrink-0" />
          <span>{info.address}</span>
        </div>

        {/* Hours */}
        <div className="text-[#B91C1C] font-bold text-sm sm:text-base uppercase tracking-wide">
          {info.openingHours.map((hour, idx) => (
            <div key={idx}>{hour}</div>
          ))}
        </div>

      </div>
    </div>
  );
};