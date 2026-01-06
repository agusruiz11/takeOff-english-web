import React from 'react';
import { motion } from 'framer-motion';
import { valueProps } from '@/content/valueProps';

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00264A] mb-4">
            ¿Por qué elegir Take Off English?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un enfoque diferente para aprender inglés de verdad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {valueProps.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF8C00]/10 text-[#FF8C00] mb-4 group-hover:bg-[#FF8C00] group-hover:text-white transition-all duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-[#00264A] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-light text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
