import { useMutation } from "@tanstack/react-query";
import AuthGoogleServices from "../services/authGoogle.service"
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useSesionStorage } from "../../../../hooks";

export const useAuthGoogleQuery = () => {

  const navigate = useNavigate();
  const { setStorageData } = useSesionStorage();

  const {
    mutateAsync: googleLogin,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ["auth/google"],
    mutationFn: AuthGoogleServices.handleGoogleLogin,
    onSuccess: (data) => {
      if (data.success) {
        setStorageData("access_token", data.data);
        navigate("/");
      }
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse: { code: string }) => {
      googleLogin(codeResponse.code)
    }
  })

  return {
    login,
    isPending,
    isError,
  };
};
