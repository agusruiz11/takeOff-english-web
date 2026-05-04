import { useState, useEffect } from 'react';

interface DolarBNA {
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

interface UseDolarBNAReturn {
  dolar: DolarBNA | null;
  loading: boolean;
  error: boolean;
}

export const useDolarBNA = (): UseDolarBNAReturn => {
  const [dolar, setDolar] = useState<DolarBNA | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDolar = async () => {
      try {
        const res = await fetch('https://dolarapi.com/v1/dolares/oficial');
        if (!res.ok) throw new Error();
        const data = await res.json();
        setDolar(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDolar();
  }, []);

  return { dolar, loading, error };
};
