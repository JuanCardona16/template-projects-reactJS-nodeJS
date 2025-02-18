export enum ConsultationsPaths {  
  // Auth routes paths
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
  FORGOT_PASSWORD = "/auth/forgot-password",
  VERIFY_CODE = "/auth/verify-code",
  RESET_PASSWORD = "/auth/change-password",
  GOOGLE_LOGIN = "/auth/google",
  REFESCH_TOKEN = "/auth/refresh-token",

  // User routes paths
  GET_USER_PROFILE = "/user/profile",
}

export enum PublicRoutes {
  LOGIN = "/login",
  REGISTER = "/register",
  FORGOT_PASSWORD = "/forgot-password",
  VERIFY_CODE = "/verify-code",
  RESET_PASSWORD = "/change-password",
}

export enum PrivateRoutes {
  HOME = "/home",
  PROFILE = "/profile",
  SETTINGS = "/settings",
}