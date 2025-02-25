import { LoginRequestData } from "../../../modules/authentication/basic/types";
import { useForm } from "../../../hooks";
import { useAuth } from "../../../modules/authentication/basic";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../config";
import { useGoogle } from "../../../modules/authentication/google/hooks/useGoogle";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button, Label } from "../../../components/shared";

const Login = () => {
  const {
    FormData,
    IsVisiblePassword,
    handleSubmit,
    toogleVisiblePassword,
    handleChange,
    FormDataError,
  } = useForm<LoginRequestData>({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const { loginWithGoogle } = useGoogle();

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="p-4 w-96">
        <h2 className="text-3xl text-center mb-2 font-bold">
          Bienvenido de nuevo
        </h2>
        <p className="text-sm text-center mb-2 text-secondary-text">
          Ingresa tus credenciales para acceder a tu cuenta
        </p>
        <div className="my-6">
          <form
            method="POST"
            onSubmit={handleSubmit(() => login.authenticate(FormData))}
            className="flex flex-col gap-2"
          >
            <Label
              id="email"
              name="email"
              label="Correo electronico:"
              typeInput="email"
              value={FormData.email}
              onChange={handleChange}
              error={FormDataError.email}
              icon={<Mail />}
            />
            <Label
              id="password"
              name="password"
              label="Contraseña:"
              typeInput={IsVisiblePassword === true ? "text" : "password"}
              value={FormData.password}
              onChange={handleChange}
              error={FormDataError.password}
              icon={<Lock />}
              rightIcon={IsVisiblePassword ? <Eye /> : <EyeOff />}
              rightIconOnClick={toogleVisiblePassword}
            />
            <Link
              to={PublicRoutes.FORGOT_PASSWORD}
              className="text-secondary-text text-xs mb-2 text-end hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>

            <Button type="submit" loading={login.isPending}>
              Iniciar sesión
            </Button>
          </form>
          <p className="text-xs text-center mb-3 text-secondary-text">
            o continua con
          </p>
          <Button onClick={loginWithGoogle.login}>Continuar con Google</Button>
          <p className="text-sm text-center text-secondary-text">
            No tienes una cuenta?{" "}
            <Link
              to={PublicRoutes.REGISTER}
              className="hover:underline font-bold"
            >
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
