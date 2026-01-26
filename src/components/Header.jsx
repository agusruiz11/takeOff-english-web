import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

const PROMO_BANNER_HEIGHT = 64; // Altura aproximada del banner en px

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcular posición del header: si hay scroll, va a top: 0, si no y el promo está activo, va debajo del promo
  const getTopPosition = () => {
    if (!siteConfig.promoEnabled) return 0;
    // Si hay scroll, el header sube a top: 0
    // Si no hay scroll, el header está debajo del promo banner
    return isScrolled ? 0 : PROMO_BANNER_HEIGHT;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Programas', id: 'programs' },
    { label: 'Sobre mí', id: 'about' },
    { label: 'Cómo funciona', id: 'how-it-works' },
    { label: 'FAQs', id: 'faq' },
    { label: 'Contacto', id: 'contact' }
  ];

  return (
    <header
      style={{ top: `${getTopPosition()}px` }}
      className={`fixed left-0 right-0 z-40 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 overflow-hidden">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 focus:outline-none hover:scale-120"
          >
            <img 
              src="./src/assets/images/logo.png" 
              alt="Take Off English logo" 
              className="h-20 w-20 ml-8 object-contain" 
            />
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#00264A] hover:text-[#FF8C00] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              onClick={() => window.open(siteConfig.calendlyUrl, '_blank')}
              className="bg-[#FF8C00] hover:bg-[#E67E00] text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Agendar entrevista gratis
            </Button>
          </div>

          <button
            className="lg:hidden text-[#00264A] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#00264A] hover:text-[#FF8C00] transition-colors duration-200 font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open(siteConfig.calendlyUrl, '_blank')}
              className="bg-[#FF8C00] hover:bg-[#E67E00] text-white px-6 py-3 rounded-full font-semibold w-full"
            >
              Agendar entrevista gratis
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;