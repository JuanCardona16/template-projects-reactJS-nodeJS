import { useCallback, useEffect, useState } from "react";

export const useSessionStorageListener = (key: string): string | null => {
  const [storageValue, setStorageValue] = useState<string | null>(() => {
    return sessionStorage.getItem(key);
  });

  const handleStorageChange = useCallback(() => {
    const newValue = sessionStorage.getItem(key);
    setStorageValue(newValue);
  }, [key]);

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);

    const interval = setInterval(() => {
      const currentValue = sessionStorage.getItem(key);

      if (currentValue !== storageValue) {
        setStorageValue(currentValue);
      }
    }, 100);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [key, storageValue, handleStorageChange]);

  return storageValue || null;
};