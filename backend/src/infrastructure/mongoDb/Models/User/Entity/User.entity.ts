export interface User {
  uuid: string;
  username: string;
  email: string;
  password: string;
  authenticationMethod: AuthMethods;
  isVerified: boolean;
}

export enum AuthMethods {
  BASIC = 'BASIC',
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
  TWITTER = 'TWITTER',
}
