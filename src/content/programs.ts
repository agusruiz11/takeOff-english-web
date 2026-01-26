export interface PlanFeature {
  text: string;
}

export interface Plan {
  name: string;
  asyncCount: number;
  syncCount: number;
  syncDuration?: string; // "1 hora reloj" si aplica
  features: PlanFeature[];
  notes?: string[];
}

export interface Program {
  id: string;
  title: string;
  duration: string;
  plans: Plan[];
  specialNote?: string; // Para PET/FCE sobre inscripción
  image?: string;
}

export const programs: Program[] = [
  {
    id: 'trabajo',
    title: 'Inglés para el trabajo',
    duration: '2 meses',
    plans: [
      {
        name: 'Ready to fly',
        asyncCount: 10,
        syncCount: 6,
        features: [
          { text: 'Clases 1:1' },
          { text: 'Plan personalizado' },
          { text: 'Acceso al campus' },
          { text: 'Contenido a tu ritmo' },
        ]
      },
      {
        name: 'Full take off',
        asyncCount: 16,
        syncCount: 8,
        syncDuration: '1 hora reloj',
        features: [
          { text: 'Clases 1:1' },
          { text: 'Contenido a tu ritmo' },
          { text: 'Práctica de speaking' },
          { text: 'Correcciones y feedback' },
        ]
      }
    ]
  },
  {
    id: 'viajes',
    title: 'Inglés para viajes',
    duration: '2 meses',
    plans: [
      {
        name: 'Ready to fly',
        asyncCount: 10,
        syncCount: 6,
        features: [
          { text: 'Clases 1:1' },
          { text: 'Plan personalizado' },
          { text: 'Acceso al campus' },
          { text: 'Contenido a tu ritmo' },
        ]
      },
      {
        name: 'Full take off',
        asyncCount: 16,
        syncCount: 8,
        syncDuration: '1 hora reloj',
        features: [
          { text: 'Clases 1:1' },
          { text: 'Plan personalizado' },
          { text: 'Contenido a tu ritmo' },
          { text: 'Práctica de speaking' },
          { text: 'Correcciones y feedback' },
        ]
      }
    ]
  },
  {
    id: 'no-puedo',
    title: 'Inglés para los que piensan "que no pueden"',
    duration: '6 meses',
    plans: [
      {
        name: 'Ready to fly',
        asyncCount: 30,
        syncCount: 18,
        syncDuration: '1 hora reloj',
        features: [
          { text: 'Clases 1:1' },
          { text: 'Plan personalizado' },
          { text: 'Acceso al campus' },
          { text: 'Contenido a tu ritmo' },
        ]
      },
      {
        name: 'Full take off',
        asyncCount: 48,
        syncCount: 24,
        syncDuration: '1 hora reloj',
        features: [
          { text: 'Clases 1:1' },
          { text: 'Plan personalizado' },
          { text: 'Contenido a tu ritmo' },
          { text: 'Práctica de speaking' },
          { text: 'Correcciones y feedback' },
        ]
      }
    ]
  },
  {
    id: 'pet-fce',
    title: 'Exámenes PET & FCE Cambridge',
    duration: '6 meses',
    specialNote: 'No incluye valor de inscripción a exámenes. Consultar por gestión de inscripción.',
    plans: [
      {
        name: 'Ready to fly',
        asyncCount: 30,
        syncCount: 18,
        syncDuration: '1 hora reloj',
        features: [
          { text: 'Clases 1:1' },
          { text: 'Plan personalizado' },
          { text: 'Acceso al campus' },
          { text: 'Contenido a tu ritmo' },
          { text: 'Vocabulario clave' },
          { text: 'Mock exams' },
          { text: 'Corrección y retroalimentación de writing' },
        ]
      },
      {
        name: 'Full take off',
        asyncCount: 48,
        syncCount: 24,
        syncDuration: '1 hora reloj',
        features: [
          { text: 'Clases 1:1' },
          { text: 'Plan personalizado' },
          { text: 'Contenido a tu ritmo' },
          { text: 'Práctica de speaking' },
          { text: 'Correcciones y feedback' },
          { text: 'Corrección y retroalimentación de writing' },
        ]
      }
    ]
  }
];

// Regla general sobre clases
export const generalRule = {
  text: 'Todos los planes incluyen Encuentros en vivo + Contenido a tu ritmo.',
  detail: 'Las clases sincrónicas son personalizadas (profesor + alumno), se graban y se suben al Campus.'
};

