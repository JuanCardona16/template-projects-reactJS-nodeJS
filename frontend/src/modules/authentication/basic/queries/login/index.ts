import { useMutation } from "@tanstack/react-query";
import AuthenticationServices from "../../services/auth.service";
import { useSesionStorage } from "../../../../../hooks";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setStorageData } = useSesionStorage();

  const {
    mutateAsync: authenticate,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ["auth/login"],
    mutationFn: AuthenticationServices.login,
    retry: 1, // Número de intentos de en caso de error en las consultas
    onSuccess: (data) => {
      if (data.success === true) {
        setStorageData("access_token", data.data);
        navigate("/");
      }
      console.log(data);
    },
    onError: (error) => {
      alert("Error al iniciar sesion. Verifica los datos ingresados." + error);
    },
  });

  return {
    authenticate,
    isPending,
    isError,
    error,
    // Aquí puedes devolver cualquier información que necesites para el manejo de errores o carga de datos
  };
};
