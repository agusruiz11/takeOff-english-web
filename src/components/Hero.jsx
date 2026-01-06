import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/site';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5491179951001?text=Hola!%20Quiero%20agendar%20mi%20entrevista%20gratis%20para%20Take%20Off%20English%20😊', '_blank');
  };
  const handleCalendly = () => {
    window.open('[PLACEHOLDER_CALENDLY_URL]', '_blank');
  };
  
  // Ajustar padding-top dinámicamente:
  // - Si hay scroll: solo Header (80px) = pt-32
  // - Si no hay scroll y promo activo: Header (80px) + PromoBanner (64px) = pt-40
  // - Si no hay scroll y promo inactivo: solo Header (80px) = pt-32
  const paddingTop = (siteConfig.promoEnabled && !isScrolled) ? 'pt-40' : 'pt-32';
  
  return <section id="hero" className={`${paddingTop} pb-20 bg-gradient-to-b from-white to-[#F5F5F5] transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="space-y-8">
            <div className="inline-block">
              <motion.div initial={{
              scale: 0.9
            }} animate={{
              scale: 1
            }} transition={{
              duration: 0.5
            }} className="bg-[#FF8C00] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-md">
                ✨ Primera entrevista GRATIS
              </motion.div>
            </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00264A] leading-tight">
            Your English. <br />
            Your journey. <br />
            Your take off.
          </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light ">
              Aprende inglés que realmente usarás. Enfoque personalizado para entrevistas laborales, viajes internacionales y certificaciones oficiales. Resultados visibles desde la primera clase. Agendá tu entrevista <b>gratis.</b>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleCalendly} className="bg-[#FF8C00] hover:bg-[#E67E00] text-white px-8 py-6 rounded-full text-md font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 ">
                <Calendar size={20} />
                Agendar entrevista
              </Button>
              <Button onClick={handleWhatsApp} variant="outline" className="border-2 border-[#00264A] text-[#00264A] hover:bg-[#00264A] hover:text-white px-8 py-6 rounded-full text-md font-semibold transition-all duration-200 flex items-center justify-center gap-2 ">
                <MessageCircle size={20} />
                Hablar por WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            <img className="w-full h-auto rounded-2xl shadow-2xl" alt="Student taking off - growth and progress in English learning" src="https://images.unsplash.com/photo-1699477755424-18ef42b8dd58" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;