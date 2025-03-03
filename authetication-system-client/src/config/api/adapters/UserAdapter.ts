import { AuthMethods, User } from "../../models";

export const UserAdapter = (data: any): User => ({
  uuid: data?.uuid,
  username: data?.username,
  email: data?.email,
  authenticationMethod: data?.authenticationMethod as AuthMethods,
});


