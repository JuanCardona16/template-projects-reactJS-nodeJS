import { useEffect, useState } from "react";
import { useUser } from "../../modules/user/hooks/useUser";
import { AuthMethods, User } from "../../config/models";

interface UseRootLayoutData {
  user: User;
  isPending: boolean;
  isError: boolean;
}

export const useRootLayoutData = (): UseRootLayoutData => {
  const [user, setUser] = useState<User>({
    uuid: "",
    username: "",
    email: "",
    authenticationMethod: "BASIC" as AuthMethods,
  });

  const { getProfile, isAuthenticated, isPending, isError } = useUser();

  useEffect(() => {
    if (isAuthenticated) {
      getProfile().then((data) => setUser(data));
    }
  }, [isAuthenticated]);

  return {
    user,
    isPending,
    isError,
  };
};
