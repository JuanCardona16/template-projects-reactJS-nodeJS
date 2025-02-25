import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../config";
import { useForm } from "../../../hooks";
import { RegisterRequestData } from "../../../modules/authentication/basic/types";
import { useAuth } from "../../../modules/authentication/basic";
import { useGoogle } from "../../../modules/authentication/google/hooks/useGoogle";
import { Label, Button } from "../../../components/shared";
import { Eye, EyeOff, Lock, Mail, UserRound } from "lucide-react";

const Register = () => {
  const {
    FormData,
    handleSubmit,
    handleChange,
    FormDataError,
    toogleVisiblePassword,
    IsVisiblePassword,
  } = useForm<RegisterRequestData>({
    username: "",
    email: "",
    password: "",
  });

  const { register } = useAuth();
  const { loginWithGoogle } = useGoogle();

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="p-4 w-96">
        <h2 className="text-3xl text-center mb-2 font-bold">
          Craer una cuenta
        </h2>
        <p className="text-sm text-center mb-4 text-secondary-text">
          Ingresa tus datos para registrarte
        </p>
        <form
          method="POST"
          onSubmit={handleSubmit(() => register.createAccount(FormData))}
          className="flex flex-col gap-2"
        >
          <Label
            id="username"
            name="username"
            label="Nombre de Usuario: "
            typeInput="text"
            value={FormData.username}
            onChange={handleChange}
            error={FormDataError.username}
            icon={<UserRound />}
          />
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
          <br />
          <Button type="submit" loading={register.isPending}>
            Craer Cuenta
          </Button>
        </form>
        <p className="text-xs text-center mb-3 text-secondary-text">
          o continua con
        </p>
        <Button onClick={loginWithGoogle.login}>Continuar con Google</Button>
        <p className="text-sm text-center text-secondary-text">
          Ya tienes una cuenta?{" "}
          <Link to={PublicRoutes.LOGIN} className="hover:underline font-bold">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
