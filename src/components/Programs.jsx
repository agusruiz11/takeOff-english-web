import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, ChevronDown, ChevronUp, Clock, BookOpen, Users, AlertCircle } from 'lucide-react';
import { programs, generalRule } from '@/content/programs';
import { siteConfig } from '@/config/site';
import PlanComparison from './PlanComparison';

const Programs = () => {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(siteConfig.whatsappMessage);
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  const handleCalendly = () => {
    window.open(siteConfig.calendlyUrl, '_blank');
  };

  const toggleProgram = (programId) => {
    setExpandedProgram(expandedProgram === programId ? null : programId);
  };

  const getProgramIcon = (programId) => {
    const icons = {
      'trabajo': 'Briefcase',
      'viajes': 'Plane',
      'no-puedo': 'BookOpen',
      'pet-fce': 'GraduationCap'
    };
    return icons[programId] || 'BookOpen';
  };

  return (
    <section id="programs" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00264A] mb-4">
            Programas / Cursos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Elige el programa que se adapte a lo que necesitas lograr
          </p>
          
          {/* Regla general */}
          <div className="bg-white rounded-lg p-4 max-w-3xl mx-auto shadow-sm">
            <p className="text-sm text-gray-700 font-medium mb-2">{generalRule.text}</p>
            <p className="text-xs text-gray-600">{generalRule.detail}</p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {programs.map((program, programIndex) => {
            const isExpanded = expandedProgram === program.id;
            
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: programIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Header del programa */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#00264A] mb-2">
                        {program.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          Duración: {program.duration}
                        </span>
                      </div>
                      {program.specialNote && (
                        <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-start gap-2">
                            <AlertCircle size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-yellow-800">{program.specialNote}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => toggleProgram(program.id)}
                      className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label={isExpanded ? 'Contraer' : 'Expandir'}
                    >
                      {isExpanded ? (
                        <ChevronUp size={24} className="text-[#00264A]" />
                      ) : (
                        <ChevronDown size={24} className="text-[#00264A]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Planes del programa */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {program.plans.map((plan, planIndex) => (
                      <motion.div
                        key={planIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: planIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#FF8C00] transition-all duration-300"
                      >
                        <div className="mb-4">
                          <h4 className="text-xl font-bold text-[#00264A] mb-3">
                            {plan.name}
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-700">
                              <BookOpen size={16} className="text-[#FF8C00]" />
                              <span> Encuentros en vivo</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <Users size={16} className="text-[#FF8C00]" />
                              <span> Contenido a tu ritmo</span>
                              { plan.syncDuration && (
                                <span className="text-xs text-gray-500">({plan.syncDuration})</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-xs text-gray-600 mb-3 font-medium">Incluye:</p>
                          <ul className="space-y-2">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className="text-[#FF8C00] mt-1">•</span>
                                <span>{feature.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {plan.notes && plan.notes.length > 0 && (
                          <div className="mt-4 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
                            {plan.notes.map((note, noteIndex) => (
                              <p key={noteIndex}>{note}</p>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Comparador de planes */}
                  {isExpanded && (
                    <PlanComparison plans={program.plans} programDuration={program.duration} />
                  )}

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button
                      onClick={handleCalendly}
                      className="bg-[#FF8C00] hover:bg-[#E67E00] text-white rounded-full font-semibold flex-1 flex items-center justify-center gap-2"
                    >
                      <Calendar size={16} />
                      Agendar entrevista gratis
                    </Button>
                    <Button
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="border-[#00264A] text-[#00264A] hover:bg-[#00264A] hover:text-white rounded-full font-semibold flex-1 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={16} />
                      Hablar por WhatsApp
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs finales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#00264A] mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-gray-600 mb-6">
              Agenda tu entrevista gratis y descubre cómo podemos ayudarte a alcanzar tus objetivos
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={handleCalendly}
                className="bg-[#FF8C00] hover:bg-[#E67E00] text-white rounded-full font-semibold px-8 flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Agendar entrevista gratis
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="border-[#00264A] text-[#00264A] hover:bg-[#00264A] hover:text-white rounded-full font-semibold px-8 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
