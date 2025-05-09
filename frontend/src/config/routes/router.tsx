import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
} from "../../pages";
import { AuthGuards } from "../security";
import { PublicRoutes } from "../../constants";
import { RootLayout } from "../../components/Layouts";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
        <Route path={PublicRoutes.REGISTER} element={<RegisterPage />} />
        <Route
          path={PublicRoutes.FORGOT_PASSWORD}
          element={<ForgotPasswordPage />}
        />
        <Route element={<AuthGuards validation={true} />}>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
