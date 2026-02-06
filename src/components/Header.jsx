import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import logo from '@/assets/images/logo.png';

const PROMO_BANNER_HEIGHT_DESKTOP = 48; // h-12 = 48px
const PROMO_BANNER_HEIGHT_MOBILE = 80; // min-h-[80px] en mobile

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const promoBannerHeight = isMobile ? PROMO_BANNER_HEIGHT_MOBILE : PROMO_BANNER_HEIGHT_DESKTOP;

  // Calcular posición del header: si hay scroll, va a top: 0, si no y el promo está activo, va debajo del promo
  const getTopPosition = () => {
    if (!siteConfig.promoEnabled) return 0;
    return isScrolled ? 0 : promoBannerHeight;
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
        isScrolled ? 'bg-[#00264A] shadow-md' : 'bg-[#00264A] backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 overflow-hidden">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 focus:outline-none hover:scale-120"
          >
            <img 
              src={logo} 
              alt="Take Off English logo" 
              className="h-16 sm:h-20 w-16 sm:w-20 ml-2 sm:ml-8 object-contain flex-shrink-0" 
            />
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#FF8C00] transition-colors duration-200 font-medium"
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
            className="lg:hidden text-white focus:outline-none mr-4"
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