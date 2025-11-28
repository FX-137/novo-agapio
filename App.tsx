import React, { useState } from 'react';
import { MENU_DATA, BUSINESS_INFO } from './data';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { MenuIcon } from './components/Icons';

function App() {
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'terms' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative pb-4 md:pb-0 bg-yellow-50">
      
      {/* Navbar for Categories (Sticky) */}
      <nav className="sticky top-0 z-40 bg-red-800 shadow-md border-b-4 border-yellow-500">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            <span className="text-yellow-400 font-bold text-lg md:hidden">Menu</span>
            
            {/* Mobile Hamburger */}
            <button 
              className="md:hidden text-yellow-400 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            {/* Desktop Categories */}
            <div className="hidden md:flex space-x-1 w-full justify-center overflow-x-auto">
              {MENU_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleScrollTo(cat.id)}
                  className="text-white hover:bg-red-700 hover:text-yellow-300 px-4 py-3 rounded-md text-sm font-medium transition-colors uppercase tracking-wide whitespace-nowrap"
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Categories Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-red-900 border-t border-red-700 absolute w-full shadow-xl">
            {MENU_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleScrollTo(cat.id)}
                className="block text-white hover:bg-red-800 px-4 py-3 text-sm font-medium w-full text-left border-b border-red-800/30"
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}
      </nav>

      <Hero info={BUSINESS_INFO} />

      <main className="flex-grow max-w-4xl w-full mx-auto p-4 space-y-12">
        
        <div className="space-y-16">
          {MENU_DATA.map((category) => (
            <MenuSection 
              key={category.id} 
              category={category} 
              businessInfo={BUSINESS_INFO} 
            />
          ))}
        </div>

        <LocationSection info={BUSINESS_INFO} />
        
      </main>

      <Footer 
        businessInfo={BUSINESS_INFO} 
        onOpenLegal={(type) => setActiveLegal(type)} 
      />

      <LegalModal 
        isOpen={!!activeLegal} 
        onClose={() => setActiveLegal(null)} 
        type={activeLegal || 'privacy'} 
      />

    </div>
  );
}

export default App;