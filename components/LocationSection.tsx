import React from 'react';
import { BusinessInfo } from '../types';
import { MapPinIcon, NavigationIcon } from './Icons';

interface LocationSectionProps {
  info: BusinessInfo;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ info }) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${info.googleMapsQuery}`;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 overflow-hidden my-12 mx-2 md:mx-auto max-w-4xl">
      <div className="bg-yellow-400 p-4 flex items-center gap-2 border-b-4 border-red-500">
        <MapPinIcon className="text-red-700 w-6 h-6" />
        <h2 className="text-xl font-bold text-red-800">Localização</h2>
      </div>
      
      <div className="relative h-64 md:h-80 w-full bg-gray-200">
         <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://maps.google.com/maps?q=${info.googleMapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          title="Map Location"
        ></iframe>
      </div>

      <div className="p-6 text-center">
        <p className="text-lg text-gray-700 font-medium mb-4">{info.address}</p>
        <a 
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 animate-pulse"
        >
          <NavigationIcon className="w-5 h-5" />
          Como Chegar (Abrir GPS)
        </a>
      </div>
    </div>
  );
};