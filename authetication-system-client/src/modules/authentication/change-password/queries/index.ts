import { useMutation } from "@tanstack/react-query";
import ChangePasswordServices from "../services/changePassword.service";
import { useNavigate } from "react-router-dom";

export const useSendCodeSecurity = () => {
  const {
    mutateAsync: sendCodeSecurity,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ["auth/changePassword"],
    mutationFn: ChangePasswordServices.sendCode,
  });

  return {
    sendCodeSecurity,
    isPending,
    isError,
  };
};

export const useVerifyCodeSecurity = () => {
  const {
    mutateAsync: verifyCode,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ["auth/changePassword"],
    mutationFn: ChangePasswordServices.verifyCode,
  });

  return {
    verifyCode,
    isPending,
    isError,
  };
};

export const useResetPassword = () => {
  const navigate = useNavigate();

  const { mutateAsync: changePassword, isPending, isError } = useMutation({
    mutationKey: ["auth/changePassword"],
    mutationFn: ChangePasswordServices.resetPassword,
    onSuccess: (data) => {
      if (data.data.success) {
        navigate("/login")
      }
    },
  })

  return {
    changePassword,
    isPending,
    isError,
  }
}
