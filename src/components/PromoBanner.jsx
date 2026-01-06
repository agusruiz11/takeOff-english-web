import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

const PromoBanner = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Ocultar el banner cuando se hace scroll hacia abajo
      setIsVisible(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!siteConfig.promoEnabled) return null;

  const handleCalendly = () => {
    window.open(siteConfig.calendlyUrl, '_blank');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(siteConfig.whatsappMessage);
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white py-4 relative fixed top-0 left-0 right-0 z-50"
        >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-center md:text-left">
            <p className="font-semibold text-sm md:text-base">
              {siteConfig.promoText}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* <Button
              onClick={handleCalendly}
              size="sm"
              className="bg-white text-[#FF8C00] hover:bg-gray-100 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1"
            >
              <Calendar size={14} />
              <span className="hidden sm:inline">Agendar entrevista gratis</span>
              <span className="sm:hidden">Agendar</span>
            </Button> */}
            <Button
              onClick={handleWhatsApp}
              size="sm"
              variant="outline"
              className="border-white text-[#FF8C00] hover:bg-white/20 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1"
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline">Consultar por WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </Button>
            {onClose && (
              <button
                onClick={onClose}
                className="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Cerrar banner"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoBanner;

