import { lazy } from 'react'

export const HomePage = lazy(() => import("./private/home/index"));
export const LoginPage = lazy(() => import("./public/login/index"));
export const RegisterPage = lazy(() => import("./public/register/index"));
export const ForgotPasswordPage = lazy(() => import("./public/changePassword/index"));


