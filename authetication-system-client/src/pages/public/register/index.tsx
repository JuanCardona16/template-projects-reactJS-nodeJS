import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../config";
import { useForm } from "../../../hooks";
import { RegisterRequestData } from "../../../modules/authentication/basic/types";
import { useAuth } from "../../../modules/authentication/basic";

const Register = () => {
  const {
    FormData,
    handleSubmit,
    handleChange,
    FormDataError,
    toogleVisiblePassword,
    IsVisiblePassword
  } = useForm<RegisterRequestData>({
    username: "",
    email: "",
    password: "",
  });

  const { register } = useAuth();

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
          onSubmit={handleSubmit(() => register.createAccount(FormData))}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            padding: "20px",
          }}
        >
          <label htmlFor="username">
            <h4>Nombre de usuario: </h4>
            <input
              type="text"
              id="username"
              name="username"
              value={FormData.username}
              onChange={handleChange}
              style={{
                padding: "10px",
                marginTop: "10px",
              }}
            />
          </label>
          <span>{FormDataError.username}</span>
          <br />
          <label htmlFor="email">
            <h4>Correo electronico: </h4>
            <input
              type="email"
              id="email"
              name="email"
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
          </label>
          <button type="button" onClick={toogleVisiblePassword}>
            Ver contraseña
          </button>
          <span>{FormDataError.password}</span>
          <button
            type="submit"
            style={{
              marginTop: "20px",
            }}
          >
            {register.isPending ? "Cargando..." : "Iniciar sesion"}
          </button>
        </form>
        <p>
          Ya tienes una cuenta?{" "}
          <Link to={PublicRoutes.LOGIN}>Inicia sesion aqui</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
