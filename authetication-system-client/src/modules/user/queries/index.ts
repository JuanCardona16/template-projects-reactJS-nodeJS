import { useMutation } from "@tanstack/react-query";
import UserServices from "../services/user.services";

export const useGetUserInfo = (token: string | null) => {
  const {
    mutateAsync: getInfo,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ["user/info"],
    mutationFn: async () => {
      if (!token) {
        throw new Error("Token is required");
      }
      return  UserServices.getUserInfo(token)
    },
    onSuccess: (data) => {
      return data
    },
  });

  return {
    getInfo,
    isPending,
    isError,
  };
};
