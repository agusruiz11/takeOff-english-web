
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué nivel necesito para empezar?',
      answer: 'Cualquier nivel es bienvenido. Trabajo desde cero absoluto hasta niveles avanzados. En la entrevista inicial evaluamos tu punto de partida y diseñamos un plan personalizado según tus necesidades.'
    },
    {
      question: '¿Cuánto tardaré en ver resultados?',
      answer: 'Depende de tu objetivo y dedicación. Para inglés de viajes básico, notarás progreso en 1-2 meses. Para preparación de exámenes o inglés laboral, generalmente entre 3-6 meses. Lo importante es que cada clase te acerca a tu meta de forma visible.'
    },
    {
      question: '¿Trabajamos con libros o materiales propios?',
      answer: 'Uso materiales personalizados según tu objetivo. Para viajes, situaciones reales del día a día. Para trabajo, documentos y casos del ámbito profesional. Para exámenes, práctica oficial de Cambridge. Todo adaptado a ti.'
    },
    {
      question: '¿Puedo tomar solo un módulo para una entrevista o viaje puntual?',
      answer: '¡Por supuesto! Ofrezco módulos intensivos cortos (1-2 meses) perfectos para preparar un viaje específico, una entrevista laboral próxima, o cualquier necesidad puntual. No es necesario comprometerse a largo plazo.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00264A] mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Resuelve tus dudas antes de empezar
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-[#00264A] pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-[#FF8C00]" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
