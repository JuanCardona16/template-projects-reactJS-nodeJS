import { useCallback, useEffect, useState } from "react";
import { useGetUserInfo } from "../queries";
import { useSesionStorage } from "../../../hooks";

// Hook padre para la informacion del usuario
export const useUser = () => {
  const { token } = useAuthToken();
  const { getInfo, isError, isPending } = useGetUserInfo(token);

  const getProfile = useCallback(async () => {
    if (!token) {
      throw new Error("Usuario no autenticado");
    }
    return await getInfo();
  }, [token, getInfo]);

  return {
    getProfile,
    isAuthenticated: Boolean(token),
    isPending,
    isError,
  };
};

// Hook para obtener el token de acceso
export const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const { getStorageData } = useSesionStorage();

  useEffect(() => {
    const storedToken = getStorageData("access_token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return { token, setToken };
}

