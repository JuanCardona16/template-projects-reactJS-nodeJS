export interface User {
  uuid: string;
  username: string;
  email: string;
  authenticationMethod: AuthMethods;
}

export enum AuthMethods {
  BASIC = "BASIC",
  GOOGLE = "GOOGLE",
}