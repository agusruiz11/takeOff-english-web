
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué nivel necesito para empezar?',
      answer: 'Cualquier nivel es el punto de partida ideal cuando tenés una meta que te motiva. Acompaño a personas en todas sus etapas: desde quienes están dando sus primeros pasos con el idioma hasta quienes ya tienen una base y buscan perfeccionar su fluidez y seguridad.'
    },
    {
      question: '¿Cuánto tardaré en ver resultados?',
      answer: 'Depende de tu objetivo y dedicación. Para inglés de viajes básico, notarás progreso en 1-2 meses. Para preparación de exámenes o inglés laboral, generalmente entre 3-6 meses. Lo importante es que cada clase te acerca a tu meta de forma visible. En nuestra entrevista inicial, conversamos sobre tu experiencia previa y definimos tu hoja de ruta. El objetivo es diseñar un plan que te permita ver resultados reales en tu día a día, respetando siempre tus tiempos y tu propio ritmo de aprendizaje.'
    },
    {
      question: '¿Trabajamos con libros o materiales propios?',
      answer: 'Uso materiales personalizados según tu objetivo. Para viajes, situaciones reales del día a día. Para trabajo, documentos y casos del ámbito profesional. Para exámenes, práctica oficial de Cambridge. Todo adaptado a ti.'
    },
    {
      question: '¿Puedo tomar solo un módulo para una entrevista o viaje puntual?',
      answer: 'Definitivamente. Entiendo que a veces necesitás soluciones ágiles para desafíos específicos. Diseñé módulos intensivos de corta duración que funcionan como un "entrenamiento de precisión". Son ideales si tenés una entrevista laboral a la vista, un viaje importante o una presentación clave y necesitás resultados rápidos sin compromisos a largo plazo.Mi enfoque es ayudarte a que logres ese objetivo puntual con seguridad, usando tu tiempo de la manera más eficiente posible.'
    },
    {
      question: '¿Cómo puedo prepararme para una entrevista de trabajo en inglés en poco tiempo?',
      answer: 'En Take Off English diseñamos módulos intensivos de 4 a 8 semanas enfocados en resultados inmediatos. A diferencia de un curso tradicional, trazamos una hoja de ruta sin escalas para que domines el vocabulario técnico y la seguridad necesaria en entrevistas laborales o presentaciones de negocios, optimizando tu tiempo con un plan estratégico a tu medida.'
    },
    {
      question: '¿Qué hace que este método sea diferente a una academia de inglés convencional?',
      answer: 'Nuestro enfoque es estratégico y personalizado, diseñado específicamente para adultos que necesitan que el idioma sea una herramienta y no una barrera. En lugar de seguir un libro genérico, hacé tuyo el inglés trabajando sobre tus objetivos reales (viajes, certificaciones o carrera profesional) con un acompañamiento humano que garantiza que cada lección impulse tu propio despegue.'
    },
    {
      question: '¿Es posible tomar clases de inglés solo para un objetivo puntual como un viaje o un examen?',
      answer: ' Definitivamente. Nuestra propuesta es flexible: podés tomar módulos específicos para metas concretas sin compromisos a largo plazo. Ya sea que busques alcanzar una certificación oficial o ganar fluidez para un viaje internacional, coordinamos un encuentro de diagnóstico para crear un entrenamiento de precisión que se adapte a tu agenda.'
    },
    {
      question: '¿Necesito tener un nivel avanzado para empezar mi plan de inglés estratégico?',
      answer: 'No, el único requisito es tener una meta clara. En Take Off English trabajamos con todos los niveles, desde quienes necesitan activar su inglés después de años sin usarlo, hasta quienes buscan perfeccionarse. El punto de partida lo definimos en una entrevista inicial de diagnóstico, donde trazamos tu hoja de ruta personalizada para que, sin importar tu nivel actual, cada clase sea un avance concreto hacia tu próximo despegue.'
    },
    {
      question: '¿Es una inversión costosa comparada con una academia tradicional?',
      answer: 'En Take Off English no pagás por una membresía mensual eterna, sino por un entrenamiento de precisión con resultados concretos. Al trabajar sin vueltas y enfocados únicamente en lo que necesitás, optimizamos tu inversión de tiempo y dinero. Un plan a medida evita que pagues por meses de contenidos genéricos que no vas a usar, logrando que tu despegue sea mucho más eficiente y directo que en cualquier curso masivo.'
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
