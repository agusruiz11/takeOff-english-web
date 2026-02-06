
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { siteConfig } from '@/config/site';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objective: '',
    message: ''
  });

  const handleWhatsApp = () => {
    window.open('https://wa.me/5491179951001?text=Hola!%20Quiero%20agendar%20mi%20entrevista%20gratis%20para%20Take%20Off%20English%20😊', '_blank');
  };

  const handleCalendly = () => {
    window.open(siteConfig.calendlyUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Formulario en desarrollo",
      description: "Por ahora, usa WhatsApp o Calendly para contactarnos. ¡Gracias!",
      duration: 4000
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <div className="bg-[#FF8C00] text-white px-6 py-2 rounded-full font-semibold text-lg shadow-md">
              ✨ Primera entrevista GRATIS
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00264A] mb-4">
            ¿Listo para empezar tu despegue?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Agenda tu entrevista gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col items-center"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6 w-full flex flex-col items-center">
              <h3 className="text-2xl font-bold text-[#00264A] mb-4 text-center">
                Agenda tu entrevista ahora
              </h3>
              
              <div className="space-y-4 w-full flex flex-col items-center">
                <div className="text-center pb-2">
                  <p className="text-gray-600 text-sm mb-1">Teléfono</p>
                  <a 
                    href="https://wa.me/5491179951001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00264A] hover:text-[#FF8C00] font-semibold text-lg transition-colors duration-200"
                  >
                    +54 9 11 5814-3809
                  </a>
                </div>

                <Button
                  onClick={handleCalendly}
                  className="bg-[#FF8C00] hover:bg-[#E67E00] text-white px-8 py-6 rounded-full text-lg font-semibold w-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar size={24} />
                  Agendar con Calendly
                </Button>

                <Button
                  onClick={handleWhatsApp}
                  className="bg-[#00264A] hover:bg-[#003666] text-white px-8 py-6 rounded-full text-lg font-semibold w-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={24} />
                  Escribir por WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#00264A] mb-6">
                O envíanos un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-[#FF8C00] focus:ring-[#FF8C00]"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-[#FF8C00] focus:ring-[#FF8C00]"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    name="objective"
                    placeholder="Tu objetivo (trabajo, viajes, examen...)"
                    value={formData.objective}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-[#FF8C00] focus:ring-[#FF8C00]"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Cuéntanos más sobre lo que necesitas..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-[#FF8C00] focus:ring-[#FF8C00] min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-[#FF8C00] hover:bg-[#E67E00] text-white px-8 py-6 rounded-full text-lg font-semibold w-full flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar mensaje
                </Button>
              </form>
            </div> */}
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full flex justify-center items-center">
              <img 
                className="w-full h-auto rounded-xl" 
                alt="Take off illustration with plane ascending"
               src="https://images.unsplash.com/photo-1596017878992-6ad23f285a0b" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
