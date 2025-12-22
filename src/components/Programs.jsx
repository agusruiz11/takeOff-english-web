import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Plane, Briefcase, GraduationCap, BookOpen, Calendar, MessageCircle } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Plane,
      title: 'Inglés para viajes',
      forWho: 'Personas que viajan por primera vez o que no se animan a comunicarse',
      whatsCovered: 'Frases de supervivencia, seguridad para hablar en el aeropuerto, hotel y restaurantes',
      modality: 'Online | 45-60 min | 1-2 meses',
      image: 'https://horizons-cdn.hostinger.com/21735f29-05b0-4156-bf8f-f988a9371114/61e7571bc9aced3887b56eb1a7b5b7a7.png'
    },
    {
      icon: Briefcase,
      title: 'Inglés para el trabajo',
      forWho: 'Profesionales que necesitan inglés para entrevistas, reuniones o comunicación laboral',
      whatsCovered: 'Entrevistas de trabajo, reuniones empresariales, emails profesionales, presentaciones, vocabulario específico',
      modality: 'Online/Híbrido | 45-60 min',
      image: 'https://horizons-cdn.hostinger.com/21735f29-05b0-4156-bf8f-f988a9371114/3a566a62217ce0500879b4164af0df5e.png'
    },
    {
      icon: BookOpen,
      title: 'Inglés práctico para adultos',
      forWho: 'Adultos que sienten que "no pueden" o que han tenido malas experiencias',
      whatsCovered: 'Inglés práctico y visual, progreso real desde cero, enfoque sin presión',
      modality: 'Online | 45-60 min | Personalizado',
      image: 'https://horizons-cdn.hostinger.com/21735f29-05b0-4156-bf8f-f988a9371114/785b5e5ba82d943251e11ddac4aff61e.png'
    },
    {
      icon: GraduationCap,
      title: 'Preparación PET y FCE',
      forWho: 'Estudiantes que necesitan certificación Cambridge oficial',
      whatsCovered: 'Estrategias de examen, correcciones detalladas de writing y speaking, feedback personalizado',
      modality: 'Online | 60 min | Según cronograma',
      image: 'https://horizons-cdn.hostinger.com/21735f29-05b0-4156-bf8f-f988a9371114/6465600801d90c12ddf88ec78a80c32b.png'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/[PLACEHOLDER_WHATSAPP_NUMBER]?text=Hola!%20Quiero%20agendar%20mi%20entrevista%20gratis%20para%20Take%20Off%20English%20😊', '_blank');
  };

  const handleCalendly = () => {
    window.open('[PLACEHOLDER_CALENDLY_URL]', '_blank');
  };

  return (
    <section id="programs" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00264A] mb-4">
            Programas diseñados para tus objetivos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el programa que se adapte a lo que necesitas lograr
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#FF8C00] text-white p-3 rounded-full">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#00264A] mb-4">
                    {program.title}
                  </h3>

                  <div className="space-y-3 mb-6 flex-1">
                    <div>
                      <span className="font-semibold text-[#00264A] text-sm">Para quién es:</span>
                      <p className="text-gray-600 text-sm mt-1 font-light">{program.forWho}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-[#00264A] text-sm">Qué se trabaja:</span>
                      <p className="text-gray-600 text-sm mt-1 font-light">{program.whatsCovered}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-[#00264A] text-sm">Modalidad:</span>
                      <p className="text-gray-600 text-sm mt-1 font-light">{program.modality}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={handleCalendly}
                      className="bg-[#FF8C00] hover:bg-[#E67E00] text-white rounded-full font-semibold w-full flex items-center justify-center gap-2"
                    >
                      <Calendar size={16} />
                      Agendar entrevista
                    </Button>
                    <Button
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="border-[#00264A] text-[#00264A] hover:bg-[#00264A] hover:text-white rounded-full font-semibold w-full flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;