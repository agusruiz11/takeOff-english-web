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
          className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white py-2 sm:py-2 fixed inset-x-0 top-0 z-50 min-h-[80px] sm:min-h-12 overflow-hidden"
        >
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4 h-full min-h-[72px] sm:min-h-0 py-1 sm:py-0">
          <p className="font-semibold text-xs sm:text-sm md:text-base text-center sm:text-left flex-1 sm:flex-initial order-1 sm:order-none line-clamp-2 sm:line-clamp-none">
            {siteConfig.promoText}
          </p>
          <div className="flex items-center gap-2 flex-shrink-0 order-2 sm:order-none">
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
              className="h-7 min-h-0 px-2 border-white text-[#FF8C00] hover:bg-[#00264A] hover:text-white hover:border-[#00264A] rounded-full text-xs md:text-sm font-semibold flex items-center gap-1"
              style={{ lineHeight: 1.1 }}
            >
              <MessageCircle size={12} />
              <span className="hidden sm:inline">Consultar por WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </Button>
            {onClose && (
              <button
                onClick={onClose}
                className="ml-2 p-1 rounded-full transition-colors"
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

