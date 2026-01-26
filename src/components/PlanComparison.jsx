import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const PlanComparison = ({ plans, programDuration }) => {
  if (plans.length !== 2) return null;

  const [plan1, plan2] = plans;

  // Generar comparación basada en los features
  const comparisonRows = [
    {
      label: 'Encuentros en vivo',
      plan1: plan1.syncCount,
      plan2: plan2.syncCount,
      type: 'boolean'
    },
    {
      label: 'Contenido a tu ritmo',
      plan1: plan1.syncCount,
      plan2: plan2.syncCount,
      type: 'boolean'
    },
    {
      label: 'Clases 1:1',
      plan1: plan1.features.some(f => f.text.toLowerCase().includes('1:1')),
      plan2: plan2.features.some(f => f.text.toLowerCase().includes('1:1')),
      type: 'boolean'
    },
    {
      label: 'Acceso al campus',
      plan1: plan1.features.some(f => f.text.toLowerCase().includes('campus')),
      plan2: plan2.features.some(f => f.text.toLowerCase().includes('campus')),
      type: 'boolean'
    },
    {
      label: 'Contenido asincrónico',
      plan1: plan1.features.some(f => f.text.toLowerCase().includes('asincrónico')),
      plan2: plan2.features.some(f => f.text.toLowerCase().includes('asincrónico')),
      type: 'boolean'
    },
    {
      label: 'Práctica de speaking',
      plan1: plan1.features.some(f => f.text.toLowerCase().includes('speaking')),
      plan2: plan2.features.some(f => f.text.toLowerCase().includes('speaking')),
      type: 'boolean'
    },
    {
      label: 'Feedback y correcciones',
      plan1: plan1.features.some(f => f.text.toLowerCase().includes('feedback') || f.text.toLowerCase().includes('corrección')),
      plan2: plan2.features.some(f => f.text.toLowerCase().includes('feedback') || f.text.toLowerCase().includes('corrección')),
      type: 'boolean'
    },
    {
      label: 'Evaluación inicial',
      plan1: plan1.features.some(f => f.text.toLowerCase().includes('evaluación inicial')),
      plan2: plan2.features.some(f => f.text.toLowerCase().includes('evaluación inicial')),
      type: 'boolean'
    },
    {
      label: 'Seguimiento continuo',
      plan1: plan1.features.some(f => f.text.toLowerCase().includes('seguimiento')),
      plan2: plan2.features.some(f => f.text.toLowerCase().includes('seguimiento')),
      type: 'boolean'
    },
    {
      label: 'Grabaciones',
      plan1: plan1.features.some(f => f.text.toLowerCase().includes('grabación')),
      plan2: plan2.features.some(f => f.text.toLowerCase().includes('grabación')),
      type: 'boolean'
    }
  ];

  // Agregar filas específicas para PET/FCE si aplica
  if (plan1.features.some(f => f.text.toLowerCase().includes('mock exam')) || 
      plan2.features.some(f => f.text.toLowerCase().includes('mock exam'))) {
    comparisonRows.push({
      label: 'Mock exams',
      plan1: plan1.features.some(f => f.text.toLowerCase().includes('mock exam')),
      plan2: plan2.features.some(f => f.text.toLowerCase().includes('mock exam')),
      type: 'boolean'
    });
  }

  if (plan1.features.some(f => f.text.toLowerCase().includes('writing')) || 
      plan2.features.some(f => f.text.toLowerCase().includes('writing'))) {
    comparisonRows.push({
      label: 'Corrección de writing',
      plan1: plan1.features.some(f => f.text.toLowerCase().includes('writing')),
      plan2: plan2.features.some(f => f.text.toLowerCase().includes('writing')),
      type: 'boolean'
    });
  }

  return (
    <div className="mt-8 overflow-x-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="min-w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-[#00264A] text-white">
                <th className="px-4 py-4 text-left font-semibold">Características</th>
                <th className="px-4 py-4 text-center font-semibold">{plan1.name}</th>
                <th className="px-4 py-4 text-center font-semibold">{plan2.name}</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-4 py-3 text-sm font-medium text-[#00264A]">
                    {row.label}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {row.type === 'boolean' ? (
                      row.plan1 ? (
                        <Check className="w-5 h-5 text-[#FF8C00] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm font-semibold text-[#00264A]">{row.plan1}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {row.type === 'boolean' ? (
                      row.plan2 ? (
                        <Check className="w-5 h-5 text-[#FF8C00] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm font-semibold text-[#00264A]">{row.plan2}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {plan1.notes && plan1.notes.length > 0 && (
          <div className="px-4 py-3 bg-yellow-50 border-t border-yellow-200">
            <p className="text-xs text-yellow-800">
              <strong>Nota:</strong> {plan1.notes.join(' ')}
            </p>
          </div>
        )}
        {plan2.notes && plan2.notes.length > 0 && (
          <div className="px-4 py-3 bg-yellow-50 border-t border-yellow-200">
            <p className="text-xs text-yellow-800">
              <strong>Nota:</strong> {plan2.notes.join(' ')}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PlanComparison;

