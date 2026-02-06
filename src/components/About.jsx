import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import aboutImage from '@/assets/images/about-me.png';

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
              className="w-full max-w-sm h-auto rounded-2xl shadow-2xl mx-auto"
              alt="English teacher with students in professional setting"
              src={aboutImage} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#00264A]">
              Sobre mí
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed font-light">
              <b>Acompaño a profesionales a que el inglés deje de ser un pendiente y pase a ser su aliado.</b> <br/><br/> Hola, soy <b>Gaby</b>. Como profesora de Inglés creé <b>Take Off English</b> porque ví a muchos profesionales limitados por no poder expresarse con seguridad en inglés. Mi trabajo es diseñar un esquema de práctica que se adapte a tu día a día y a tus objetivos reales: ya sea liderar una reunión, afrontar una entrevista o viajar sin estrés. <br/> Sé que tu tiempo es valioso, por eso trabajo con objetivos concretos. Tu inglés, tu viaje, tu despegue.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;