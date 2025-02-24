import { LoginRequestData } from "../../../modules/authentication/basic/types";
import { useForm } from "../../../hooks";
import { useAuth } from "../../../modules/authentication/basic";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../config";
import { useGoogle } from "../../../modules/authentication/google/hooks/useGoogle";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

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
            <label htmlFor="email">
              <h4 className="mb-2">Correo electronico: </h4>
              <div className="border rounded-md flex gap-2 py-2 px-3">
                <Mail />
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  value={FormData.email}
                  onChange={handleChange}
                  className="appearance-none w-full focus:outline-none focus:shadow-outline bg-transparent text-sm"
                  placeholder="nombre@ejemplo.com"
                />
              </div>
            </label>
            <span className="text-red-400 text-xs animate-pulse">{FormDataError.email}</span>
            <label htmlFor="password">
              <h4 className="mb-2">Contraseña: </h4>
              <div className="border rounded-md flex gap-2 py-2 px-3">
                <Lock />
                <input
                  type={IsVisiblePassword === true ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="off"
                  value={FormData.password}
                  onChange={handleChange}
                  className="appearance-none w-full focus:outline-none focus:shadow-outline bg-transparent text-sm"
                />
                <button type="button" onClick={toogleVisiblePassword} className="cursor-pointer">
                  {IsVisiblePassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
            </label>
            <span className="text-red-400 text-xs animate-pulse">{FormDataError.password}</span>
            <Link to={PublicRoutes.FORGOT_PASSWORD} className="text-secondary-text text-xs mb-2 text-end hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
            <button type="submit" className="bg-secondary-background py-2 px-3 rounded-md cursor-pointer hover:bg-accent">
              {login.isPending ? "Cargando..." : "Iniciar sesion"}
            </button>
          </form>
          <p className="text-xs text-center m-4 text-secondary-text">o continua con</p>
          <button className="bg-secondary-background w-full py-2 px-3 rounded-md mb-3 cursor-pointer hover:bg-accent" type="button" onClick={loginWithGoogle.login}>
            Continuar con Google
          </button>
          <p className="text-sm text-center text-secondary-text">
            No tienes una cuenta?{" "}
            <Link to={PublicRoutes.REGISTER} className="hover:underline font-bold">Registrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
