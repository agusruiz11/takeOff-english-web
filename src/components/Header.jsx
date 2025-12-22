import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 focus:outline-none hover:scale-120"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/21735f29-05b0-4156-bf8f-f988a9371114/b6ef6a58d02807b42d4a628aaa8e44a8.png" 
              alt="Take Off English logo" 
              className="h-32 w-32 mt-4 ml-8" 
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
              onClick={() => window.open('[PLACEHOLDER_CALENDLY_URL]', '_blank')}
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
              onClick={() => window.open('[PLACEHOLDER_CALENDLY_URL]', '_blank')}
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