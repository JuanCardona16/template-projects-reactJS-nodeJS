import { AuthMethods } from "@/infrastructure/mongoDb/Models/User/Entity";

export type LoginRequestData = {
  email: string;
  password: string;
};

export type RegisterRequestData = LoginRequestData & {
  username: string;
  authenticationMethod: AuthMethods;
};
