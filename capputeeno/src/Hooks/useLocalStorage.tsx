import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    // Retorna o valor inicial se o 'localStorage' não estiver disponível
    if (typeof window === 'undefined') {
      return initialValue;
    }

    // Tenta obter o valor do 'localStorage'
    const storedValue = localStorage.getItem(item);
    if (storedValue) {
      try {
        return JSON.parse(storedValue) as T;
      } catch (error) {
        console.error("Erro ao parsear 'localStorage':", error);
      }
    }
    return initialValue; // Se não houver valor ou erro, usa o valor inicial
  });

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}