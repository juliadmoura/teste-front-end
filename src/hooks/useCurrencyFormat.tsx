import { useCallback } from 'react';

export function useCurrencyFormat() {
  const formatCurrency = useCallback((value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }, []);

  return { formatCurrency };
}
