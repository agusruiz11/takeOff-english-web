import React from 'react';
import { motion } from 'framer-motion';
import { Video, Users, Zap, CreditCard, Calendar as CalendarIcon, RotateCcw } from 'lucide-react';

const HowItWorks = () => {
  const features = [
    {
      icon: Video,
      title: 'Modalidad',
      description: 'Clases online por videollamada'
    },
    {
      icon: Users,
      title: 'Formatos',
      description: (
        <>
          Individual: profesor + alumno.<br/>(consultar por grupos reducidos)
        </>
      )
    },
    {
      icon: Zap,
      title: 'Duración',
      description: 'Sesiones de 45-60 minutos, enfocadas en práctica y resultados inmediatos'
    }
  ];

  const policies = [
    {
      icon: CalendarIcon,
      text: 'Cancelaciones con 24h de anticipación'
    },
    {
      icon: RotateCcw,
      text: 'Reagendado flexible según disponibilidad'
    },
    {
      icon: CreditCard,
      text: 'Pago mensual o por paquete'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00264A] mb-4">
            ¿Cómo funcionan las clases?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexibilidad y personalización en cada paso
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF8C00]/10 text-[#FF8C00] mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#00264A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-[#00264A] mb-6 text-center">
            Políticas básicas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {policies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <Icon className="text-[#FF8C00]" size={24} />
                  </div>
                  <p className="text-gray-700">{policy.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;