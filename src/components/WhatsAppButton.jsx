
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5491179951001?text=Hola!%20Quiero%20agendar%20mi%20entrevista%20gratis%20para%20Take%20Off%20English%20"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="cta-whatsapp fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-200 flex items-center justify-center"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default WhatsAppButton;
