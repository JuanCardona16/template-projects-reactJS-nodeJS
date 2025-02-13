export const useSesionStorage = () => {
  const getStorageData = (key: string) => {
    return sessionStorage.getItem(key) || null;
  };

  const setStorageData = (key: string, value: string) => {
    return sessionStorage.setItem(key, value);
  };

  const removeStorageData = (key: string) => {
    return sessionStorage.removeItem(key);
  };

  return {
    getStorageData,
    setStorageData,
    removeStorageData,
  };
};
