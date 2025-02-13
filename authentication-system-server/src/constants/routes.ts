export const ApiPrefix: string = "/api/v1"
export const ApiPrefixAuthRoutes: string = "/auth"
export const ApiPrefixAuthGoogleRoutes: string = "/google"
export const ApiPrefixRouteNotFound: string = "*"

export enum PrivateRoutes {
  HOME = "/home",
  PROFILE = "/profile",
  SETTINGS = "/settings",
}

export enum PublicRoutes {
  LOGIN = "/login",
  REGISTER = "/register",
  FORGOT_PASSWORD = "/forgot-password",
  VARIFY_CODE = "/verify-code",
  CHANGE_PASSWORD = "/change-password",
  GOOGLE_LOGIN = "/google-login",
}