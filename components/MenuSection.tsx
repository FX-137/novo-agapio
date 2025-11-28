import React from 'react';
import { MenuCategory, BusinessInfo } from '../types';
import { WhatsappIcon } from './Icons';

interface MenuSectionProps {
  category: MenuCategory;
  businessInfo: BusinessInfo;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ category, businessInfo }) => {
  
  const handleOrder = (itemName: string) => {
    const message = `Olá! Gostaria de pedir um ${itemName}.`;
    const url = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="mb-10 scroll-mt-24" id={category.id}>
      <h2 className="text-3xl font-bold text-red-700 mb-6 pl-4 border-l-8 border-yellow-500 uppercase">
        {category.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-2">
        {category.items.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-yellow-200 flex flex-col"
          >
            {item.image && (
              <div className="h-48 overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            )}
            
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-red-800 leading-tight">{item.name}</h3>
                  <span className="bg-yellow-100 text-red-700 font-bold px-2 py-1 rounded-md text-sm whitespace-nowrap">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <button 
                onClick={() => handleOrder(item.name)}
                className="w-full mt-auto bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors active:scale-95 transform"
              >
                <WhatsappIcon className="w-5 h-5" />
                Pedir agora
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};