import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    // / Create state using localStorage value or fallback to initialValue
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? (storedValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Sync state to localStorage whenever key or state changes
  useEffect(() => {
    try {
      localStorage.setItem(key, (state));
    } catch (error) {
   
      console.error("Failed to save to localStorage", error);
    }
  }, [key, state]);

  return [state, setState];
}
