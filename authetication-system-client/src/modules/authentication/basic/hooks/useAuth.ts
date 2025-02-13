import { useSesionStorage } from "../../../../hooks";
import { useLogin } from "../queries/login";
import { useRegister } from "../queries/register";

// Hook padre para los metodos de authenticación
export const useAuth = () => {
  const { removeStorageData } = useSesionStorage();

  const login = useLogin();
  const register = useRegister();
  const logout = () => removeStorageData("access_token");

  return {
    login,
    register,
    logout,
  };
};
