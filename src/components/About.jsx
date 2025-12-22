import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    'Enfoque práctico basado en años de experiencia con adultos que necesitan resultados reales',
    'Acompañamiento personalizado para construir confianza desde cero, sin presión ni frustración',
    'A diferencia de academias genéricas, aquí cada clase se adapta 100% a tu objetivo específico'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              className="w-full h-auto rounded-2xl shadow-2xl" 
              alt="English teacher with students in professional setting"
             src="https://images.unsplash.com/photo-1679316481049-4f6549df499f" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00264A]">
              Sobre mí
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Soy profesora de inglés especializada en adultos con objetivos concretos. Mi misión es ayudarte a sentir que el inglés no es una barrera, sino una herramienta. He trabajado con profesionales preparándose para entrevistas, viajeros que necesitan seguridad básica, y estudiantes que buscan certificaciones oficiales. Cada alumno es único, y eso es lo que hace que este trabajo sea tan gratificante.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-[#FF8C00]" size={24} />
                  </div>
                  <p className="text-gray-700">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;