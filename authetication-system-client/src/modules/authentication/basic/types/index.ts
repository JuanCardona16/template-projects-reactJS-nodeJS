export type LoginRequestData = {
  email: string;
  password: string;
}

export type RegisterRequestData = LoginRequestData & {
  username: string;
}