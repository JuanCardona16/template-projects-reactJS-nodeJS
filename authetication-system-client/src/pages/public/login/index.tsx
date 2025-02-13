import { LoginRequestData } from "../../../modules/authentication/basic/types";
import { useForm } from "../../../hooks";
import { useAuth } from "../../../modules/authentication/basic";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../config";

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h2>Pagina de inicio de sesion</h2>
      <div>
        <form
          method="POST"
          onSubmit={handleSubmit(() => login.authenticate(FormData))}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            padding: "20px",
          }}
        >
          <label htmlFor="email">
            <h4>Correo electronico: </h4>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="current-password"
              value={FormData.email}
              onChange={handleChange}
              style={{
                padding: "10px",
                marginTop: "10px",
              }}
            />
          </label>
          <span>{FormDataError.email}</span>
          <br />
          <label htmlFor="password">
            <h4>Contraseña: </h4>
            <input
              type={IsVisiblePassword === true ? "text" : "password"}
              id="password"
              name="password"
              value={FormData.password}
              onChange={handleChange}
              style={{
                padding: "10px",
                marginTop: "10px",
              }}
            />
            <button type="button" onClick={toogleVisiblePassword}>Ver contraseña</button>
          </label>
          <span>{FormDataError.password}</span>
          <Link to={PublicRoutes.FORGOT_PASSWORD}>Olvidaste tu contraseña?</Link>
          <button
            type="submit"
            style={{
              marginTop: "20px",
            }}
          >
            {login.isPending ? "Cargando..." : "Iniciar sesion"}
          </button>
        </form>
        <p>No tienes una cuenta? <Link to={PublicRoutes.REGISTER}>registrate aqui</Link></p>
      </div>
    </div>
  );
};

export default Login;
